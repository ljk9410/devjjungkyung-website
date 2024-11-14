"use client"

import { cn } from "@/lib/utils"
import { Code2, Home, FileText } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-purple-500/50 after:to-transparent">
      <div className="container flex h-16 max-w-screen-2xl items-center px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-8 flex items-center space-x-2 transition-opacity hover:opacity-80">
            <Code2 className="h-6 w-6" />
            <span className="font-bold">DevJJungKyung</span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/"
              className={cn(
                "transition-all duration-200 hover:text-purple-400",
                pathname === "/" ? "text-purple-400" : "text-foreground/60"
              )}
            >
              <div className="flex items-center gap-x-1">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </div>
            </Link>
            <Link
              href="/privacy"
              className={cn(
                "transition-all duration-200 hover:text-purple-400",
                pathname === "/privacy" ? "text-purple-400" : "text-foreground/60"
              )}
            >
              <div className="flex items-center gap-x-1">
                <FileText className="h-4 w-4" />
                <span>Privacy Policy</span>
              </div>
            </Link>
            <Link
              href="/terms"
              className={cn(
                "transition-all duration-200 hover:text-purple-400",
                pathname === "/terms" ? "text-purple-400" : "text-foreground/60"
              )}
            >
              <div className="flex items-center gap-x-1">
                <FileText className="h-4 w-4" />
                <span>Terms</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}