"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold text-white">
          StayEase
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-white/80 md:flex">
          <Link href="/rooms">Rooms</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="default" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
