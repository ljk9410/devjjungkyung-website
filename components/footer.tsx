import { Code2, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 relative after:absolute after:top-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-purple-500/50 after:to-transparent">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 px-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code2 className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by DevJJungKyung. The source code is available on{" "}
            <Link
              href="https://github.com/devjjungkyung"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com/devjjungkyung" 
            target="_blank" 
            rel="noreferrer"
            className="transition-all duration-200 hover:text-purple-400 hover:scale-110"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href="https://linkedin.com/in/devjjungkyung" 
            target="_blank" 
            rel="noreferrer"
            className="transition-all duration-200 hover:text-purple-400 hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link 
            href="mailto:contact@devjjungkyung.com"
            className="transition-all duration-200 hover:text-purple-400 hover:scale-110"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}