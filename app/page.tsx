export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="min-h-screen bg-black/45 flex flex-col">
        
        {/* HEADER */}
        <header className="px-7 pt-8">
          <div className="leading-none">
            <h1 className="text-[20px] tracking-[2px] font-semibold">
              LUXURY{" "}
              <span className="text-[#c8a24c]">VISION</span>
            </h1>

            <p className="text-[8px] tracking-[5px] mt-2 text-white/80">
              REAL ESTATE
            </p>
          </div>
        </header>

        {/* HERO */}
        <section className="flex-1 flex items-center">
          <div className="px-14 w-full max-w-[760px] -mt-8">
            
            {/* TOP LABEL */}
            <div className="border border-[#c8a24c]/50 w-fit px-6 py-3 mb-10">
              <p className="text-[#c8a24c] text-[11px] tracking-[4px] font-semibold">
                • DUBAI'S PREMIER REAL ESTATE AGENCY
              </p>
            </div>

            {/* MAIN TITLE */}
            <h2
              className="font-serif leading-[1.05] text-white"
              style={{
                fontSize: "76px",
                maxWidth: "650px",
              }}
            >
              Find Your{" "}
              <span className="italic text-[#c8a24c]">
                Dream
              </span>
              <br />
              Property in Dubai
            </h2>

            {/* DESCRIPTION */}
            <p
              className="mt-8 text-[17px] leading-[2] text-white/90 max-w-[650px]"
            >
              Helping you navigate Dubai's most exclusive properties — from
              off-plan investments to luxury villas across Sheikh Zayed Road
              and beyond.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-10">
              <button className="bg-[#d8b547] text-black px-12 py-4 text-[12px] tracking-[3px] font-semibold">
                VIEW PROPERTIES
              </button>

              <button className="border border-white/60 px-12 py-4 text-[12px] tracking-[3px] font-semibold">
                BOOK CONSULTATION
              </button>
            </div>

            {/* BOTTOM TEXT */}
            <div className="flex items-center gap-4 mt-16">
              <div className="w-12 h-[1px] bg-[#c8a24c]" />

              <p className="text-[10px] tracking-[4px] text-white/80">
                SCROLL TO EXPLORE
              </p>
            </div>
          </div>
        </section>

        {/* WHATSAPP */}
        <div className="fixed bottom-8 right-8">
          <div className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl">
            ✆
          </div>
        </div>
      </div>
    </main>
  );
}