import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determine if we're building for GitHub Pages or local/production (Lovable)
  const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true'; // Custom environment variable to indicate deployment

  return {
    base: isGitHubPages ? '/md-ammar-portfolio/' : '/',  // Conditional base path
    server: {
      host: "::",  // Local server host
      port: 8080,  // Port number for local development
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
