export default function Home() {
  return (
    <main className="min-h-screen flex-col flex items-center justify-center bg-neutral-900 text-white">
      <h1 className="text-5xl font-bold">
        Simulation Gallery
      </h1>
      <div className="mt-10">
        <a href="/boids">
          <button className="text-5xl font-bold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Boids
          </button>
        </a>
      </div>
    </main>
  );
}