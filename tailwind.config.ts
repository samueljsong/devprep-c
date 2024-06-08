import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                background: "rgba(var(--background))",
                textColor: "rgba(var(--textColor))",
                borderColor: "rgba(var(--borderColor))",
                featureColor: "rgba(var(--featureColor))",
            },
            maxWidth: {
                "1280": "80rem",
                "960": "60rem",
                "1080": "67.50rem",
            },
        },
    },
    plugins: [],
};
export default config;
