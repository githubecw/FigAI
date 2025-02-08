export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa] text-white">
      <h1 className="text-4xl font-bold text-[#012745]">Welcome to FigAI!</h1>
      <p className="text-lg text-[#076BA0] mt-4">Your Next.js website with a custom color scheme.</p>

      <button className="mt-6 px-6 py-3 bg-[#012745] text-white font-semibold rounded-lg shadow-md hover:bg-[#15FB89] hover:text-[#012745] transition">
        Get Started
      </button>
    </main>
  );
}
