import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//     // 開發中、產品路徑
//     base:
//         process.env.NODE_ENV === "production"
//             ? "/React-ZDX-Club-Booking/"
//             : "/",
//     plugins: [react()],
// });

export default defineConfig(({ mode }) => {
  return {
    // 當 mode 為 'production' 時，使用專案名稱作為 base
    base: mode === "production" ? "/React-ZDX-Club-Booking/" : "/",
    plugins: [react()],
  };
});
