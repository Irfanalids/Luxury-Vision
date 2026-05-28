export default function Home() {
  return (
    <main
      className="h-screen bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="h-screen bg-black/68">

        {/* HEADER */}
        <header className="pt-10 pl-8">
          
          <h1 className="uppercase tracking-[3px] text-[21px] font-semibold leading-none">
            <span className="text-white">LUXURY </span>

            <span className="text-[#c8a24c]">
              VISION
            </span>
          </h1>

          <p className="uppercase tracking-[6px] text-[7px] text-gray-300 mt-3">
            Real Estate
          </p>

        </header>

        {/* HERO SECTION */}
        <section className="pl-8 pt-[135px] max-w-[560px]">

          {/* LABEL */}
          <div className="border border-[#c8a24c]/50 inline-block px-5 py-3 mb-11">
            
            <p className="uppercase tracking-[4px] text-[10px] text-[#c8a24c] font-medium">
              • Dubai's Premier Real Estate Agency
            </p>

          </div>

          {/* HEADING */}
          <h2
            className="
              text-[66px]
              leading-[0.98]
              tracking-[-2px]
              font-light
              mb-8
              text-white
            "
            style={{
              fontFamily: "Georgia, Times New Roman, serif",
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
            className="
              text-[16px]
              leading-[2]
              text-gray-200
              max-w-[520px]
              mb-11
              font-light
            "
          >
            Helping you navigate Dubai’s most exclusive properties —
            from off-plan investments to luxury villas across Sheikh
            Zayed Road and beyond.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">

            <button
              className="
                bg-[#d4af37]
                text-black
                uppercase
                tracking-[3px]
                text-[10px]
                font-bold
                px-10
                py-5
              "
            >
              View Properties
            </button>

            <button
              className="
                border
                border-white/40
                uppercase
                tracking-[3px]
                text-[10px]
                px-10
                py-5
              "
            >
              Book Consultation
            </button>

          </div>

          {/* SCROLL */}
          <div className="flex items-center gap-4 mt-20">

            <div className="w-10 h-[1px] bg-[#c8a24c]" />

            <p className="uppercase tracking-[4px] text-[8px] text-gray-300">
              Scroll to Explore
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}