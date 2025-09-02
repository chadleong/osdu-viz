import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    // Dev-time proxy to avoid CORS when fetching community.opengroup.org raw files
    proxy: {
      // Client can request /gitlab/Generated/<path> and Vite will proxy to the raw tree
      "/gitlab": {
        target: "https://community.opengroup.org",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/gitlab/, "/osdu/data/data-definitions/-/raw/master"),
      },
    },
  },
})
