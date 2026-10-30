"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, Eye, EyeOff, Loader2, MailCheck, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Mode = "login" | "register" | "forgot";

// Google sign-in only shows once it is enabled in Supabase (Auth → Providers → Google)
// and NEXT_PUBLIC_ENABLE_GOOGLE_LOGIN=true is set on Vercel.
const GOOGLE_ENABLED = process.env.NEXT_PUBLIC_ENABLE_GOOGLE_LOGIN === "true";

/** Turn Supabase / network errors into plain Vietnamese the learner can act on. */
export function authErrorVi(raw: unknown): string {
  const msg = (raw instanceof Error ? raw.message : typeof raw === "string" ? raw : (raw as { message?: string })?.message) ?? "";
  const m = msg.toLowerCase();
  if (m.includes("failed to fetch") || m.includes("network") || m.includes("load failed") || m.includes("fetch"))
    return "Không kết nối được máy chủ đăng nhập. Kiểm tra mạng rồi thử lại sau ít phút.";
  if (m.includes("invalid login credentials")) return "Email hoặc mật khẩu chưa đúng.";
  if (m.includes("email not confirmed")) return "Email chưa được xác nhận. Mở hộp thư và bấm vào liên kết xác nhận trước nhé.";
  if (m.includes("user already registered") || m.includes("already been registered")) return "Email này đã có tài khoản. Chuyển sang Đăng nhập nhé.";
  if (m.includes("password should be at least") || m.includes("weak password")) return "Mật khẩu cần ít nhất 6 ký tự.";
  if (m.includes("unable to validate email") || m.includes("invalid email")) return "Email chưa đúng định dạng.";
  if (m.includes("rate limit") || m.includes("too many") || m.includes("security purposes"))
    return "Bạn thử quá nhiều lần. Đợi khoảng một phút rồi thử lại.";
  if (m.includes("provider is not enabled") || m.includes("unsupported provider")) return "Đăng nhập bằng Google chưa được bật.";
  if (m.includes("signups not allowed")) return "Hiện chưa mở đăng ký tài khoản mới.";
  return msg ? `Có lỗi xảy ra: ${msg}` : "Có lỗi xảy ra. Thử lại sau nhé.";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 34 34" aria-hidden="true">
      <path d="M17 10.5c-2.4-2.2-8.5-2.6-10.6 2.6-2 5 .6 12.4 4.3 15.3 2 1.6 3.8 1.2 6.3.2 2.5 1 4.3 1.4 6.3-.2 3.7-2.9 6.3-10.3 4.3-15.3-2.1-5.2-8.2-4.8-10.6-2.6Z" fill="#E5484D" />
      <path d="M17 10.5c.2-3 1.6-5.6 4.2-7" stroke="#22304A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M18.3 6.3c2.2-2.6 5.6-2.4 7.4-1.3-1.4 2.2-4.6 3.4-7.4 1.3Z" fill="#2F9E5B" />
    </svg>
  );
}

const inputCls =
  "w-full h-12 px-4 rounded-xl bg-white dark:bg-navy-900 border-2 border-navy-900/10 dark:border-white/15 text-navy-900 dark:text-white placeholder:text-navy-400 focus:outline-none focus:border-apple-500 transition-colors aria-[invalid=true]:border-apple-500";

export function AuthModal({ onClose, initialMode = "login" }: { onClose: () => void; initialMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState<"form" | "google" | null>(null);
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState<{ kind: "confirm" | "reset"; email: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Escape closes, body doesn't scroll behind the dialog, focus starts on email
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input, a[href]');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey, true);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  useEffect(() => {
    if (mounted) setTimeout(() => emailRef.current?.focus(), 30);
  }, [mounted, mode]);

  // After an error, put focus back inside the dialog on the field most likely to need fixing
  useEffect(() => {
    if (!error) return;
    const target = !EMAIL_RE.test(email.trim()) || mode === "forgot" ? emailRef.current : (document.getElementById("auth-password") as HTMLInputElement | null);
    target?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  function switchMode(m: Mode) {
    setMode(m);
    setError("");
    setSentTo(null);
  }

  const emailValid = EMAIL_RE.test(email.trim());
  const pwValid = password.length >= 6;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const addr = email.trim();
    if (!EMAIL_RE.test(addr)) return setError("Nhập email đúng định dạng, ví dụ ten@gmail.com.");
    if (mode !== "forgot" && !pwValid) return setError("Mật khẩu cần ít nhất 6 ký tự.");

    setLoading("form");
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email: addr, password });
        if (error) throw error;
        onClose();
      } else if (mode === "register") {
        const { data, error } = await supabase.auth.signUp({
          email: addr,
          password,
          options: { emailRedirectTo: `${window.location.origin}/dashboard` },
        });
        if (error) throw error;
        // Supabase returns a user with no identities when the email is already registered
        if (data.user && data.user.identities && data.user.identities.length === 0) {
          throw new Error("User already registered");
        }
        if (data.session) onClose(); // email confirmation turned off: signed in right away
        else setSentTo({ kind: "confirm", email: addr });
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(addr, {
          redirectTo: `${window.location.origin}/auth/reset`,
        });
        if (error) throw error;
        setSentTo({ kind: "reset", email: addr });
      }
    } catch (err) {
      setError(authErrorVi(err));
    } finally {
      setLoading(null);
    }
  }

  async function handleGoogle() {
    setError("");
    setLoading("google");
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.href },
      });
      if (error) throw error;
      // Browser now leaves for Google; keep the spinner
    } catch (err) {
      setError(authErrorVi(err));
      setLoading(null);
    }
  }

  if (!mounted) return null;

  const title = mode === "login" ? "Chào mừng trở lại" : mode === "register" ? "Tạo tài khoản miễn phí" : "Quên mật khẩu";
  const subtitle =
    mode === "login"
      ? "Đăng nhập để tiếp tục chuỗi ngày học và XP của bạn."
      : mode === "register"
      ? "Lưu tiến độ lên mạng, học tiếp trên điện thoại hay máy tính đều được."
      : "Nhập email đã đăng ký, chúng tôi sẽ gửi liên kết để đặt mật khẩu mới.";

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4" role="presentation">
      <div className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        className="relative w-full sm:max-w-[420px] max-h-[92vh] overflow-y-auto bg-[rgb(var(--bg))] sm:rounded-3xl rounded-t-3xl shadow-[0_30px_80px_-20px_rgba(21,32,51,0.5)] border border-navy-900/10 dark:border-white/10"
      >
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 p-2 rounded-xl text-navy-400 hover:text-navy-900 hover:bg-navy-900/5 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 sm:px-8 pt-8 pb-7">
          {sentTo ? (
            <div className="text-center py-4">
              <span className="mx-auto mb-5 w-16 h-16 rounded-full bg-leaf-50 dark:bg-leaf-500/15 grid place-items-center">
                <MailCheck className="w-8 h-8 text-leaf-600 dark:text-leaf-500" />
              </span>
              <h2 id="auth-title" className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-2">Kiểm tra hộp thư nhé</h2>
              <p className="text-navy-500 dark:text-paper-200 mb-1">
                {sentTo.kind === "confirm" ? "Đã gửi liên kết xác nhận tới" : "Đã gửi liên kết đặt lại mật khẩu tới"}
              </p>
              <p className="font-bold text-navy-900 dark:text-white mb-5 break-all">{sentTo.email}</p>
              <p className="text-sm text-navy-400 mb-6">Không thấy thư? Xem thử mục Spam hoặc Quảng cáo.</p>
              <button onClick={() => switchMode("login")} className="font-bold text-apple-600 dark:text-apple-500 hover:underline">
                Quay lại đăng nhập
              </button>
            </div>
          ) : (
            <>
              {mode === "forgot" ? (
                <button onClick={() => switchMode("login")} className="inline-flex items-center gap-1 text-sm font-semibold text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white mb-4">
                  <ArrowLeft className="w-4 h-4" /> Đăng nhập
                </button>
              ) : (
                <div className="mb-4"><AppleMark /></div>
              )}
              <h2 id="auth-title" className="font-display text-2xl sm:text-[28px] font-extrabold tracking-[-0.01em] text-navy-900 dark:text-white mb-1.5 pr-8">{title}</h2>
              <p className="text-[15px] text-navy-500 dark:text-paper-200 mb-6">{subtitle}</p>

              {mode !== "forgot" && (
                <div role="tablist" aria-label="Chọn" className="grid grid-cols-2 p-1 rounded-xl bg-navy-900/[0.05] dark:bg-white/[0.07] mb-5">
                  {(["login", "register"] as const).map((m) => (
                    <button
                      key={m}
                      role="tab"
                      aria-selected={mode === m}
                      onClick={() => switchMode(m)}
                      className={`py-2.5 rounded-lg text-[15px] font-semibold transition-colors ${
                        mode === m ? "bg-white dark:bg-navy-700 text-navy-900 dark:text-white shadow-sm" : "text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white"
                      }`}
                    >
                      {m === "login" ? "Đăng nhập" : "Đăng ký"}
                    </button>
                  ))}
                </div>
              )}

              {GOOGLE_ENABLED && mode !== "forgot" && (
                <>
                  <button
                    type="button"
                    onClick={handleGoogle}
                    disabled={loading !== null}
                    className="w-full h-12 flex items-center justify-center gap-3 rounded-xl border-2 border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 font-semibold text-navy-900 dark:text-white hover:border-navy-900/25 dark:hover:border-white/30 transition-colors disabled:opacity-50"
                  >
                    {loading === "google" ? <Loader2 className="w-5 h-5 animate-spin" /> : <GoogleIcon />}
                    Tiếp tục với Google
                  </button>
                  <div className="flex items-center gap-3 my-5" aria-hidden="true">
                    <span className="flex-1 h-px bg-navy-900/10 dark:bg-white/10" />
                    <span className="text-sm text-navy-400">hoặc dùng email</span>
                    <span className="flex-1 h-px bg-navy-900/10 dark:bg-white/10" />
                  </div>
                </>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="auth-email" className="block text-sm font-semibold text-navy-700 dark:text-paper-100 mb-1.5">Email</label>
                  <input
                    ref={emailRef}
                    id="auth-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="ten@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error && !emailValid}
                    className={inputCls}
                  />
                </div>

                {mode !== "forgot" && (
                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <label htmlFor="auth-password" className="block text-sm font-semibold text-navy-700 dark:text-paper-100">Mật khẩu</label>
                      {mode === "login" && (
                        <button type="button" onClick={() => switchMode("forgot")} className="text-sm font-semibold text-apple-600 dark:text-apple-500 hover:underline">
                          Quên mật khẩu?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        id="auth-password"
                        type={showPw ? "text" : "password"}
                        autoComplete={mode === "login" ? "current-password" : "new-password"}
                        placeholder={mode === "register" ? "Ít nhất 6 ký tự" : "Mật khẩu của bạn"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-invalid={!!error && mode !== "login" && !pwValid}
                        aria-describedby={mode === "register" ? "pw-hint" : undefined}
                        className={`${inputCls} pr-12`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPw((v) => !v)}
                        aria-label={showPw ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-navy-400 hover:text-navy-900 dark:hover:text-white"
                      >
                        {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {mode === "register" && (
                      <p id="pw-hint" className={`text-sm mt-1.5 ${password.length === 0 ? "text-navy-400" : pwValid ? "text-leaf-600 dark:text-leaf-500" : "text-navy-500 dark:text-paper-200"}`}>
                        {password.length === 0 ? "Ít nhất 6 ký tự." : pwValid ? "Mật khẩu hợp lệ." : `Thêm ${6 - password.length} ký tự nữa.`}
                      </p>
                    )}
                  </div>
                )}

                {error && (
                  <p role="alert" className="text-[15px] text-apple-700 dark:text-apple-500 bg-apple-50 dark:bg-apple-500/15 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading !== null}
                  className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-apple-500 hover:bg-apple-600 text-white font-bold shadow-[0_4px_0_0_#A51F25] active:shadow-none active:translate-y-1 transition-all disabled:opacity-60 disabled:shadow-none disabled:translate-y-0"
                >
                  {loading === "form" && <Loader2 className="w-5 h-5 animate-spin" />}
                  {mode === "login" ? "Đăng nhập" : mode === "register" ? "Tạo tài khoản" : "Gửi liên kết đặt lại"}
                </button>
              </form>

              {mode !== "forgot" && (
                <p className="text-sm text-navy-400 text-center mt-5">
                  Không đăng nhập vẫn học được. Tiến độ sẽ chỉ lưu trên trình duyệt này.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
