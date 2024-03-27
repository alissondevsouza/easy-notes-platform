import { ModeToggle } from "./_components/mode-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <ModeToggle />
      <h1> Home </h1>
    </main>
  );
}
