import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Application-form-ui/", // Set to the `homepage` path in package.json
});
