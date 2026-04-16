export function BrowserMockup() {
  return (
    <div className="w-full max-w-[420px] bg-bg border border-border rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* Browser bar */}
      <div className="h-9 bg-bg-2 border-b border-border flex items-center px-3 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#fec600]" />
        <span className="w-2 h-2 rounded-full bg-[#29c940]" />
        <div className="flex-1 ml-2 h-5 bg-surface border border-border rounded flex items-center px-2">
          <span className="font-mono text-[0.6rem] text-text-3">
            https://medixpress.vercel.app/dashboard
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 bg-bg min-h-[200px]">
        {/* Header row */}
        <div className="h-10 bg-surface rounded-lg mb-3 flex items-center px-3 gap-2 border border-border">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-2 flex-shrink-0" />
          <div className="h-2 w-20 bg-border rounded-full" />
          <div className="flex-1" />
          <div className="h-2 w-12 bg-accent/30 rounded-full" />
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { num: "247", color: "text-accent" },
            { num: "94%", color: "text-green" },
          ].map((c) => (
            <div
              key={c.num}
              className="bg-surface border border-border rounded-lg p-3"
            >
              <p
                className={`font-mono text-[0.82rem] font-medium mb-1 ${c.color}`}
              >
                {c.num}
              </p>
              <div className="h-1.5 w-[70%] bg-border rounded-full" />
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {[
            { dot: "bg-green" },
            { dot: "bg-amber" },
            { dot: "bg-accent" },
            { dot: "bg-green" },
          ].map((r, i) => (
            <div
              key={i}
              className="h-7 bg-surface border border-border rounded flex items-center px-2 gap-2"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${r.dot}`}
              />
              <div className="h-1.5 flex-1 bg-border rounded-full" />
              <div className="h-1.5 w-10 bg-border rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
