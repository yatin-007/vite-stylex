import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslintPlugin from 'vite-plugin-eslint';
import styleX from "vite-plugin-stylex";
// import { stylexPlugin } from "vite-plugin-stylex-dev";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX(), eslintPlugin({
    cache: false,
    exclude: ['node_modules', '/virtual:/'],
  })],
})
