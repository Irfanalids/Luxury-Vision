export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,8,12,0.58), rgba(8,8,12,0.58)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* LOGO */}
        <div className="pt-16 px-9 md:px-14">
          <h1
            className="text-[22px] md:text-[28px] tracking-[5px] font-light uppercase text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            LUXURY <span className="text-[#c9a84c]">VISION</span>
          </h1>

          <p className="text-[9px] tracking-[7px] mt-2 text-white/70 uppercase">
            REAL ESTATE
          </p>
        </div>

        {/* HERO */}
        <div className="flex-1 flex items-center">

          <div className="w-full max-w-[620px] px-9 md:px-14 pb-16">

            {/* LABEL */}
            <div className="border border-[#c9a84c]/45 bg-[#c9a84c]/08 px-6 py-4 inline-block mb-10">
              <p className="text-[#c9a84c] tracking-[4px] text-[10px] md:text-[11px] uppercase">
                • Dubai's Premier Real Estate Agency
              </p>
            </div>

            {/* TITLE */}
            <h2
              className="
                text-[36px]
                md:text-[59px]
                leading-[0.95]
                tracking-[-1.5px]
                font-light
                text-white
                mb-8
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Find Your{" "}
              <span className="italic text-[#c9a84c]">
                Dream
              </span>
              <br />
              Property in Dubai
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[17px] leading-[1.9] text-white/82 max-w-[540px]">
              Helping you navigate Dubai’s most exclusive properties —
              from off-plan investments to luxury villas across Sheikh
              Zayed Road and beyond.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-5 mt-12 max-w-[380px]">

              <button className="bg-[#c9a84c] text-black py-5 tracking-[4px] text-[12px] font-semibold uppercase">
                View Properties
              </button>

              <button className="border border-white/25 bg-black/15 backdrop-blur-sm text-white py-5 tracking-[4px] text-[12px] font-semibold uppercase">
                Book Consultation
              </button>

            </div>

            {/* SCROLL */}
            <div className="flex items-center gap-4 mt-16">
              <div className="w-12 h-[1px] bg-[#c9a84c]" />

              <p className="tracking-[5px] text-[10px] uppercase text-white/65">
                Scroll to Explore
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* WHATSAPP */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl shadow-2xl">
          ☏
        </div>
      </div>
    </main>
  );
}