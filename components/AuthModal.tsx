"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { X, Mail, Lock, Chrome } from "lucide-react";

export function AuthModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  async function handleGoogle() { return; }

  async function handleSubmit() {
    setLoading(true); setError(""); setMsg("");
    if (tab === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message); else onClose();
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
      else setMsg("Đă gửi email xác nhận! Kiểm tra hộp thư nhé.");
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 pt-64" onClick={onClose}>
      <div className="bg-white dark:bg-zinc-900 rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="relative bg-gradient-to-br from-sky-500 to-blue-600 px-8 pt-8 pb-10">
          <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all">
            <X className="w-4 h-4" />
          </button>
          <div className="text-white">
            <p className="text-sm font-medium opacity-80 mb-1">Apple English</p>
            <h2 className="text-2xl font-black">{tab === "login" ? "Đăng nhập" : "Tạo tài khoản"}</h2>
            <p className="text-sm opacity-70 mt-1">{tab === "login" ? "Chào mừng bạn trở lại 👋" : "Bắt đầu hành trình học tiếng Anh 🚀"}</p>
          </div>
        </div>

        {/* Tab toggle */}
        <div className="flex bg-zinc-100 dark:bg-zinc-800 mx-6 -mt-5 rounded-2xl p-1 relative z-10 shadow-md">
          {["login", "register"].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={"flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all " + (tab === t ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm" : "text-zinc-500 hover:text-zinc-700")}>
              {t === "login" ? "Đăng nhập" : "Đăng ký"}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="px-6 pt-5 pb-6 space-y-3">

          {/* Google */}
          <button onClick={handleGoogle} style={{display:"none"}}
            className="w-full flex items-center justify-center gap-3 border border-zinc-200 dark:border-zinc-700 rounded-2xl py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Đăng nhập với Google
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
            <span className="text-xs text-zinc-400">hoặc</span>
            <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm outline-none focus:border-sky-400 focus:bg-white dark:focus:bg-zinc-700 transition-all" />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm outline-none focus:border-sky-400 focus:bg-white dark:focus:bg-zinc-700 transition-all" />
          </div>

          {error && <p className="text-red-500 text-xs px-1">{error}</p>}
          {msg && <p className="text-emerald-500 text-xs px-1">{msg}</p>}

          <button onClick={handleSubmit} disabled={loading}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 disabled:opacity-50 text-white font-bold py-3.5 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] mt-1">
            {loading ? "Đang xử lý..." : tab === "login" ? "Đăng nhập" : "Tạo tài khoản"}
          </button>
        </div>
      </div>
    </div>
  );
}