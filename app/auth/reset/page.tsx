"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, Eye, EyeOff, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { authErrorVi } from "@/components/AuthModal";

type State = "checking" | "ready" | "invalid" | "done";

export default function ResetPasswordPage() {
  const [state, setState] = useState<State>("checking");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // The email link signs the user in with a recovery session (the client reads it from the URL)
  useEffect(() => {
    let settled = false;
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if ((event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") && session) {
        settled = true;
        setState("ready");
      }
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) { settled = true; setState("ready"); }
    });
    const t = setTimeout(() => { if (!settled) setState("invalid"); }, 4000);
    return () => { sub.subscription.unsubscribe(); clearTimeout(t); };
  }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 6) return setError("Mật khẩu cần ít nhất 6 ký tự.");
    if (password !== confirm) return setError("Hai mật khẩu chưa giống nhau.");
    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setState("done");
    } catch (err) {
      setError(authErrorVi(err));
    } finally {
      setSaving(false);
    }
  }

  const inputCls =
    "w-full h-12 px-4 rounded-xl bg-white dark:bg-navy-900 border-2 border-navy-900/10 dark:border-white/15 text-navy-900 dark:text-white placeholder:text-navy-400 focus:outline-none focus:border-apple-500 transition-colors";

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-24">
      <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-6 sm:p-8">
        {state === "checking" && (
          <p className="flex items-center gap-3 text-navy-500 dark:text-paper-200"><Loader2 className="w-5 h-5 animate-spin" /> Đang kiểm tra liên kết…</p>
        )}

        {state === "invalid" && (
          <>
            <h1 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-2">Liên kết đã hết hạn</h1>
            <p className="text-navy-500 dark:text-paper-200 mb-6">Liên kết đặt lại mật khẩu chỉ dùng được một lần và trong thời gian ngắn. Hãy yêu cầu một liên kết mới từ nút Đăng nhập → Quên mật khẩu.</p>
            <Link href="/" className="inline-flex font-bold text-apple-600 dark:text-apple-500 hover:underline">Về trang chủ</Link>
          </>
        )}

        {state === "ready" && (
          <>
            <h1 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-1.5">Đặt mật khẩu mới</h1>
            <p className="text-navy-500 dark:text-paper-200 mb-6">Chọn mật khẩu ít nhất 6 ký tự.</p>
            <form onSubmit={save} noValidate className="space-y-4">
              <div>
                <label htmlFor="new-pw" className="block text-sm font-semibold text-navy-700 dark:text-paper-100 mb-1.5">Mật khẩu mới</label>
                <div className="relative">
                  <input id="new-pw" type={show ? "text" : "password"} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className={`${inputCls} pr-12`} autoFocus />
                  <button type="button" onClick={() => setShow((v) => !v)} aria-label={show ? "Ẩn mật khẩu" : "Hiện mật khẩu"} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-navy-400 hover:text-navy-900 dark:hover:text-white">
                    {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirm-pw" className="block text-sm font-semibold text-navy-700 dark:text-paper-100 mb-1.5">Nhập lại mật khẩu</label>
                <input id="confirm-pw" type={show ? "text" : "password"} autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className={inputCls} />
              </div>
              {error && <p role="alert" className="text-[15px] text-apple-700 dark:text-apple-500 bg-apple-50 dark:bg-apple-500/15 rounded-xl px-4 py-3">{error}</p>}
              <button type="submit" disabled={saving} className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-apple-500 hover:bg-apple-600 text-white font-bold shadow-[0_4px_0_0_#A51F25] active:shadow-none active:translate-y-1 transition-all disabled:opacity-60">
                {saving && <Loader2 className="w-5 h-5 animate-spin" />} Lưu mật khẩu mới
              </button>
            </form>
          </>
        )}

        {state === "done" && (
          <>
            <span className="mb-5 w-14 h-14 rounded-full bg-leaf-50 dark:bg-leaf-500/15 grid place-items-center"><Check className="w-7 h-7 text-leaf-600 dark:text-leaf-500" strokeWidth={3} /></span>
            <h1 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-2">Đã đổi mật khẩu</h1>
            <p className="text-navy-500 dark:text-paper-200 mb-6">Bạn đang đăng nhập với mật khẩu mới.</p>
            <Link href="/dashboard" className="inline-flex font-bold text-apple-600 dark:text-apple-500 hover:underline">Xem tiến độ của bạn</Link>
          </>
        )}
      </div>
    </div>
  );
}
