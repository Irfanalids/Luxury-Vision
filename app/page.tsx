export default function Home() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(3,7,18,0.78), rgba(3,7,18,0.78)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-20 px-14 pt-10">
        <div className="flex items-center">
          <div>
            <h1
              className="text-[20px] tracking-[4px] font-semibold leading-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              <span className="text-white">LUXURY </span>
              <span className="text-[#c9a84c]">VISION</span>
            </h1>

            <p className="text-[10px] tracking-[6px] text-white/70 mt-2">
              REAL ESTATE
            </p>
          </div>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <section className="relative z-10 flex items-center min-h-screen px-14">
        <div className="max-w-[720px] mt-16">
          {/* BADGE */}
          <div className="border border-[#c9a84c]/50 w-fit px-6 py-3 mb-8">
            <p className="text-[#d8bb6c] tracking-[4px] text-[11px] font-medium">
              • DUBAI'S PREMIER REAL ESTATE AGENCY
            </p>
          </div>

          {/* HEADING */}
          <h2
            className="
              text-[58.9px]
              leading-[1.05]
              tracking-[-1px]
              font-normal
              text-white
              mb-6
              max-w-[520px]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Find Your{" "}
            <span className="italic text-[#c9a84c]">Dream</span>
            <br />
            Property in Dubai
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/82 text-[18px] leading-[1.8] max-w-[640px] mb-10 font-light">
            Helping you navigate Dubai’s most exclusive properties — from
            off-plan investments to luxury villas across Sheikh Zayed Road and
            beyond.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 items-center">
            <button className="bg-[#c9a84c] hover:bg-[#d4b15a] transition-all duration-300 text-black px-12 py-5 tracking-[3px] text-[12px] font-semibold">
              VIEW PROPERTIES
            </button>

            <button className="border border-white/35 bg-black/10 backdrop-blur-sm text-white px-12 py-5 tracking-[3px] text-[12px] font-semibold">
              BOOK CONSULTATION
            </button>
          </div>

          {/* SCROLL */}
          <div className="flex items-center gap-4 mt-24">
            <div className="w-10 h-[1px] bg-[#c9a84c]" />
            <p className="text-white/70 tracking-[4px] text-[10px]">
              SCROLL TO EXPLORE
            </p>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white text-2xl shadow-2xl">
          ✆
        </div>
      </div>
    </main>
  );
}