import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code2, Smartphone, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="container flex max-w-[980px] flex-col items-center gap-8 py-16 md:py-24">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Building Beautiful Digital Experiences
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Software Developer specializing in mobile applications and web development.
          Creating elegant solutions for complex problems.
        </p>
        <div className="flex gap-4">
          <Link href="mailto:contact@devjjungkyung.com">
            <Button size="lg">Get in touch</Button>
          </Link>
          <Link href="https://github.com/devjjungkyung" target="_blank">
            <Button variant="outline" size="lg">View GitHub</Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto grid max-w-[980px] gap-6 py-8 md:grid-cols-3">
        <Card className="p-6">
          <Code2 className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-muted-foreground">
            Creating responsive and modern web applications using cutting-edge technologies.
          </p>
        </Card>
        <Card className="p-6">
          <Smartphone className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
          <p className="text-muted-foreground">
            Developing native and cross-platform mobile applications for iOS and Android.
          </p>
        </Card>
        <Card className="p-6">
          <Sparkles className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-muted-foreground">
            Crafting beautiful and intuitive user interfaces with attention to detail.
          </p>
        </Card>
      </section>
    </div>
  );
}