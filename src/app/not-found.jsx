import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-12 text-center">
      <h1 className="text-9xl font-black mb-8 italic opacity-20">404</h1>
      <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">
        DISCONNECTED
      </h2>
      <p className="text-lg opacity-50 mb-12 max-w-sm">
        The node you are looking for has been purged or never existed. Return to
        the source node to continue.
      </p>
      <Link
        href="/"
        className="px-12 py-5 border border-white/10 rounded-full hover:bg-white/10 transition uppercase tracking-widest text-xs font-bold"
      >
        Re-synchronize Nexus &rarr;
      </Link>
    </div>
  );
}
