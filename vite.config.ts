import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Detect GitHub Pages deployment
  const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true';

  return {
    // Use /portfolio/ base on GitHub Pages, otherwise root
    base: isGitHubPages ? '/portfolio/' : '/',
    build: {
      // Output build into docs/ for GitHub Pages
      outDir: 'docs',
    },
    server: {
      host: "::",  // Local development host
      port: 8080,   // Local development port
    },
    plugins: [
      react(),
      // Apply lovable tagger only in development
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        // Alias for src directory
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
