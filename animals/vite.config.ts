import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: "./index.ts",
            name: "Animals",
            fileName: () => "index.js",
            formats: ["es", "cjs"],
        },
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            output: {
                exports: "named",
            },
        },
    },
    plugins: [
        dts({
            entryRoot: ".",
            exclude: ["vite.config.ts", "tests"],
        }),
    ],
});
