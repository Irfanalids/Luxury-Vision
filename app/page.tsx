export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1974&auto=format&fit=crop')",
      }}
    >
      <div className="min-h-screen bg-black/60 flex flex-col justify-between">
        
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 py-6">
          <div>
            <h1 className="text-3xl tracking-[6px] font-light">
              LUXURY{" "}
              <span className="text-[#c8a24c] font-medium">
                VISION
              </span>
            </h1>

            <p className="text-xs tracking-[5px] text-gray-300 mt-1">
              REAL ESTATE
            </p>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 pb-20 max-w-2xl">
          
          <div className="border border-[#c8a24c]/50 px-6 py-4 inline-block mb-8">
            <p className="text-[#c8a24c] tracking-[5px] text-sm uppercase">
              Dubai’s Premier Real Estate Agency
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
            Find Your{" "}
            <span className="text-[#c8a24c] italic">
              Dream
            </span>
            <br />
            Property in Dubai
          </h2>

          <p className="text-gray-300 text-xl leading-10 max-w-xl mb-10">
            Helping you navigate Dubai’s most exclusive
            properties — from off-plan investments to
            luxury villas across Sheikh Zayed Road and beyond.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            
            <button className="bg-[#c8a24c] text-black px-8 py-4 font-semibold tracking-[3px] rounded-full hover:opacity-90 transition">
              VIEW PROPERTIES
            </button>

            <button className="border border-white px-8 py-4 tracking-[3px] rounded-full hover:bg-white hover:text-black transition">
              BOOK CONSULTATION
            </button>

          </div>
        </section>

      </div>
    </main>
  );
}