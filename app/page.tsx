```tsx
export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1974&auto=format&fit=crop')",
      }}
    >
      <div className="min-h-screen bg-black/75 flex flex-col justify-between">

        {/* Navbar */}
        <header className="flex justify-between items-center px-6 md:px-12 py-8">
          <div>
            <h1 className="text-3xl md:text-4xl tracking-[8px] font-light">
              LUXURY{" "}
              <span className="text-[#c8a24c]">
                VISION
              </span>
            </h1>

            <p className="text-[10px] md:text-xs tracking-[6px] text-gray-300 mt-2">
              REAL ESTATE
            </p>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 md:px-16 pb-20 md:pb-28 max-w-xl">

          {/* Top Badge */}
          <div className="border border-[#c8a24c]/40 bg-black/20 backdrop-blur-sm px-5 py-4 inline-block mb-10">
            <p className="text-[#c8a24c] tracking-[5px] text-xs md:text-sm uppercase">
              Dubai’s Premier Real Estate Agency
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
            Find Your{" "}
            <span className="text-[#c8a24c] italic">
              Dream
            </span>
            <br />
            Property in Dubai
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-9 mb-12">
            Helping you navigate Dubai’s most exclusive
            properties — from off-plan investments to
            luxury villas across Sheikh Zayed Road and beyond.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-5">

            <button className="bg-[#c8a24c] text-black px-8 py-4 tracking-[3px] text-sm font-semibold rounded-md hover:opacity-90 transition">
              VIEW PROPERTIES
            </button>

            <button className="border border-white/40 px-8 py-4 tracking-[3px] text-sm rounded-md hover:bg-white hover:text-black transition">
              BOOK CONSULTATION
            </button>

          </div>

        </section>

      </div>
    </main>
  );
}
```
