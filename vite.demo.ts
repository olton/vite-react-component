import {defineConfig} from 'vite'
import path from "path";
import glob from "glob";

// https://vitejs.dev/config/
export default defineConfig({
    root: path.join(__dirname, "demo"),
    build: {
        outDir: path.join(__dirname, "build"),
        rollupOptions: {
            input: glob.sync(path.resolve(__dirname, "demo", "*.html")),
        },
    },
})
