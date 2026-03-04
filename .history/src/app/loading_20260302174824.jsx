export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black transition-opacity animate-pulse">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-1 w-32 bg-cyan-500 rounded-full animate-progress-glow"></div>
        <span className="text-xs uppercase tracking-[0.5em] font-black text-white/50">
          Synchronizing...
        </span>
      </div>
    </div>
  );
}
