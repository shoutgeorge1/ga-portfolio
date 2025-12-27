import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">George Aguilar</h1>
        <p className="text-xl text-gray-300 mb-8">Marketing Technology Portfolio</p>
        <Link 
          href="/work"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          View Work →
        </Link>
      </div>
    </div>
  );
}

