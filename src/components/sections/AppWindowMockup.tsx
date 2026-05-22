interface AppWindowMockupProps {
  src: string;
  alt?: string;
}

export function AppWindowMockup({
  src,
  alt = "App screenshot",
}: AppWindowMockupProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-border shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      {/* Thin window chrome */}
      <div className="h-7 bg-bg-2 border-b border-border flex items-center px-2.5 gap-1.5 flex-shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#fec600]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#29c940]" />
      </div>
      {/* Screenshot */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 shadow-[inset_0_-30px_50px_rgba(0,0,0,0.3)] pointer-events-none" />
      </div>
    </div>
  );
}
