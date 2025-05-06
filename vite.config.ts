import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Detect GitHub Pages deployment
  const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true';

  return {
    // Set base path for GitHub Pages, otherwise use root
    base: isGitHubPages ? '/portfolio/' : '/',  // Adjust base path for GitHub Pages

    build: {
      // Output build into docs/ for GitHub Pages deployment
      outDir: 'docs',
    },

    server: {
      host: "::",  // Local development host
      port: 8080,   // Port for local development
    },

    plugins: [
      react(),
      // Apply lovable tagger only in development mode
      mode === 'development' && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        // Resolve @ as the src directory
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
