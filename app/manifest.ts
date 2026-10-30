import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Apple English — Học tiếng Anh từ con số 0",
    short_name: "Apple English",
    description: "Học tiếng Anh cho người Việt mất gốc: lộ trình A0→A2, TOEIC, từ vựng theo chủ đề.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F9FC",
    theme_color: "#152033",
    lang: "vi",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
