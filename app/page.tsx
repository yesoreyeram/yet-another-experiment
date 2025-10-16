import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8 bg-gradient-to-b from-background to-muted">
      <main className="flex flex-col gap-8 items-center max-w-2xl">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to Next.js
          </h1>
          <p className="text-xl text-muted-foreground">
            Built with TypeScript, Tailwind CSS, and shadcn/ui
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="font-semibold mb-2">TypeScript</h3>
            <p className="text-sm text-muted-foreground">
              Type-safe development with full TypeScript support
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-sm text-muted-foreground">
              Utility-first CSS framework for rapid UI development
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="font-semibold mb-2">shadcn/ui</h3>
            <p className="text-sm text-muted-foreground">
              Beautiful, accessible components built with Radix UI
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
