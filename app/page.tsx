export default function Home() {
  return (
    <main
      className="h-screen bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="h-screen bg-black/55">

        {/* LOGO */}
        <header className="pt-10 pl-7">
          <h1 className="uppercase tracking-[3px] text-[22px] leading-none font-semibold">
            <span className="text-white">LUXURY </span>
            <span className="text-[#c8a24c]">VISION</span>
          </h1>

          <p className="uppercase tracking-[5px] text-[8px] text-gray-300 mt-2">
            Real Estate
          </p>
        </header>

        {/* HERO */}
        <section className="pl-7 pt-32 max-w-[650px]">

          {/* TOP LABEL */}
          <div className="border border-[#c8a24c]/50 inline-block px-5 py-3 mb-10">
            <p className="uppercase tracking-[4px] text-[10px] text-[#c8a24c] font-semibold">
              • Dubai's Premier Real Estate Agency
            </p>
          </div>

          {/* TITLE */}
          <h2 className="text-[64px] leading-[1.05] font-light mb-6">
            <span className="text-white">Find Your </span>

            <span className="italic text-[#c8a24c]">
              Dream
            </span>

            <br />

            <span className="text-white">
              Property in Dubai
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[18px] leading-[2] text-gray-200 max-w-[620px] mb-10">
            Helping you navigate Dubai's most exclusive properties —
            from off-plan investments to luxury villas across Sheikh
            Zayed Road and beyond.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">

            <button className="bg-[#d4af37] text-black uppercase tracking-[3px] text-[11px] font-bold px-10 py-5">
              View Properties
            </button>

            <button className="border border-white/40 uppercase tracking-[3px] text-[11px] px-10 py-5">
              Book Consultation
            </button>

          </div>

          {/* SCROLL */}
          <div className="flex items-center gap-4 mt-20">
            <div className="w-10 h-[1px] bg-[#c8a24c]" />

            <p className="uppercase tracking-[4px] text-[9px] text-gray-300">
              Scroll to Explore
            </p>
          </div>

        </section>

      </div>
    </main>
  );
}