export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,5,10,0.55), rgba(5,5,10,0.55)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-14 py-10 text-white">

        {/* LOGO */}
        <div>
          <h1 className="text-[26px] tracking-[5px] font-light uppercase">
            LUXURY <span className="text-[#c9a84c]">VISION</span>
          </h1>

          <p className="text-[10px] tracking-[7px] mt-1 text-white/70 uppercase">
            REAL ESTATE
          </p>
        </div>

        {/* HERO SECTION */}
        <div className="max-w-[720px] mb-10">

          {/* SMALL BOX */}
          <div className="border border-[#c9a84c]/40 px-6 py-4 inline-block mb-8">
            <p className="text-[#c9a84c] tracking-[5px] text-[11px] uppercase">
              Dubai's Premier Real Estate Agency
            </p>
          </div>

          {/* MAIN TITLE */}
          <h2
            className="
              text-[44px]
              md:text-[58px]
              leading-[0.95]
              tracking-[-2px]
              font-light
              mb-6
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
          <p className="text-[18px] leading-[1.8] text-white/85 max-w-[760px]">
            Helping you navigate Dubai’s most exclusive properties —
            from off-plan investments to luxury villas across Sheikh
            Zayed Road and beyond.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">

            <button className="bg-[#c9a84c] text-black px-10 py-5 tracking-[4px] text-[12px] font-semibold uppercase w-full sm:w-auto">
              View Properties
            </button>

            <button className="border border-white/30 text-white px-10 py-5 tracking-[4px] text-[12px] font-semibold uppercase backdrop-blur-sm w-full sm:w-auto">
              Book Consultation
            </button>

          </div>

          {/* SCROLL TEXT */}
          <div className="flex items-center gap-4 mt-16">
            <div className="w-12 h-[1px] bg-[#c9a84c]" />

            <p className="tracking-[5px] text-[10px] uppercase text-white/70">
              Scroll to Explore
            </p>
          </div>

        </div>
      </div>

      {/* WHATSAPP BUTTON */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white text-2xl shadow-2xl">
          ⟲
        </div>
      </div>

    </main>
  );
}