import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-[80vh] items-center justify-center">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Build a portfolio that gets noticed.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Create a professional developer portfolio using beautiful,
            customizable templates.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button className="px-6 py-3" size="lg">
              Create Portfolio
            </Button>

            <Button className="px-6 py-3" variant="outline" size="lg">
              Explore Templates
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
