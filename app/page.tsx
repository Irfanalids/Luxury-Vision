```tsx
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.02]"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(7,8,15,0.58) 0%,
                rgba(10,12,20,0.42) 38%,
                rgba(18,20,30,0.20) 100%
              ),
              linear-gradient(
                to top,
                rgba(0,0,0,0.38),
                rgba(0,0,0,0.10)
              ),
              url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            filter: "brightness(1.03) contrast(1.05) saturate(1.08)",
          }}
        />

        {/* PURPLE/BLUE LUXURY TINT */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(40,32,60,0.18) 0%, rgba(18,22,38,0.05) 45%, rgba(0,0,0,0) 100%)",
          }}
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col px-8 pt-12 pb-10 md:px-16 backdrop-blur-[0.3px]">

        {/* LOGO */}
        <div className="mb-[140px]">
          <h1
            className="uppercase tracking-[0.22em] text-[34px] md:text-[40px]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 500,
            }}
          >
            <span className="text-white">LUXURY </span>
            <span className="text-[#caa84c]">VISION</span>
          </h1>

          <p
            className="mt-2 uppercase tracking-[0.45em] text-[11px] text-white/70"
          >
            REAL ESTATE
          </p>
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-[620px]">

          {/* LABEL */}
          <div
            className="mb-10 inline-flex items-center border border-[#caa84c]/50 bg-[#8a7440]/18 px-8 py-5"
          >
            <span className="mr-4 text-[#caa84c] text-[12px]">•</span>

            <span
              className="uppercase tracking-[0.35em] text-[#d7bb69]"
              style={{
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Dubai's Premier Real Estate Agency
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="leading-[0.95] tracking-[-0.03em] text-white"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 500,
              fontSize: "clamp(58px, 7vw, 96px)",
              marginBottom: "34px",
            }}
          >
            Find Your{" "}
            <span className="italic text-[#caa84c]">
              Dream
            </span>
            <br />
            Property in Dubai
          </h2>

          {/* DESCRIPTION */}
          <p
            className="max-w-[640px] text-white/88 leading-[1.8]"
            style={{
              fontSize: "clamp(19px, 1.4vw, 24px)",
              marginBottom: "52px",
              fontWeight: 400,
            }}
          >
            Helping you navigate Dubai’s most exclusive properties —
            from off-plan investments to luxury villas across Sheikh
            Zayed Road and beyond.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-5 sm:flex-row">

            <button
              className="h-[74px] w-[290px] uppercase tracking-[0.32em]"
              style={{
                background: "#d4b24d",
                color: "#111",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              VIEW PROPERTIES
            </button>

            <button
              className="h-[74px] w-[290px] border border-white/25 uppercase tracking-[0.32em] backdrop-blur-md"
              style={{
                background: "rgba(10,10,18,0.26)",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              BOOK CONSULTATION
            </button>

          </div>

          {/* SCROLL */}
          <div className="mt-20 flex items-center gap-5">

            <div className="h-[2px] w-[44px] bg-[#d4b24d]" />

            <span
              className="uppercase text-white/80 tracking-[0.35em]"
              style={{
                fontSize: "11px",
              }}
            >
              Scroll To Explore
            </span>

          </div>

        </div>

        {/* WHATSAPP */}
        <div className="fixed bottom-8 right-8 z-50">
          <div
            className="flex h-[74px] w-[74px] items-center justify-center rounded-full"
            style={{
              background: "#25D366",
              boxShadow: "0 0 35px rgba(37,211,102,0.5)",
            }}
          >
            <span className="text-[34px] text-white">☎</span>
          </div>
        </div>

      </div>
    </main>
  );
}
```
