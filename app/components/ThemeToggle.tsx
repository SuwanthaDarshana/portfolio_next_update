"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="h-9 w-9 rounded-full border border-slate-200 dark:border-white/10 p-2" />
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 p-2 text-slate-700 dark:text-slate-100 transition hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ scale: isDark ? 1 : 0, rotate: isDark ? 0 : 90 }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <FaMoon className="h-4 w-4" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ scale: isDark ? 0 : 1, rotate: isDark ? -90 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <FaSun className="h-4 w-4" />
            </motion.div>
        </button>
    );
}
