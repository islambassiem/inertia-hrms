import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { wayfinder } from "@laravel/vite-plugin-wayfinder";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.tsx"],
            refresh: true,
        }),
        tailwindcss(),
        react(),
        wayfinder(),
    ],
    aliases: {
        "@": "/resources/js",
    },
});
