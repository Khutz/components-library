import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "khutz-library",
      formats: ["es", "umd"],
      fileName: (format) => `khutz-library.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "lucide-react",
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
        "tailwindcss-animate",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "lucide-react": "LucideReact",
          clsx: "clsx",
          "tailwind-merge": "tailwindMerge",
          "class-variance-authority": "CVA",
          "tailwindcss-animate": "tailwindcssAnimate",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
