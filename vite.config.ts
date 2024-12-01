import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { env } from "node:process";

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(env.SERVER_PORT) || 3000,
    host: env.BACKEND_ADDRESS || "localhost",
  },
});
