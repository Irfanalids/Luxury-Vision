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
                rgba(7,8,15,0.34) 0%,
                rgba(10,12,20,0.18) 38%,
                rgba(18,20,30,0.06) 100%
              ),
              linear-gradient(
                to top,
                rgba(0,0,0,0.18),
                rgba(0,0,0,0.02)
              ),
              url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            filter: "brightness(1.14) contrast(0.94) saturate(0.92)",
          }}
        />

        {/* SOFT PURPLE LUXURY TINT */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(52,38,72,0.14) 0%, rgba(20,22,36,0.04) 45%, rgba(0,0,0,0) 100%)",
          }}
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col px-8 pt-12 pb-10 md:px-16">

        {/* LOGO */}
        <div className="mb-[140px]">

          <h1
            className="uppercase tracking-[0.22em]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 500,
              fontSize: "clamp(32px, 3vw, 42px)",
            }}
          >
            <span className="text-white">LUXURY </span>
            <span className="text-[#caa84c]">VISION</span>
          </h1>

          <p
            className="mt-2 uppercase tracking-[0.45em] text-white/70"
            style={{
              fontSize: "11px",
            }}
          >
            REAL ESTATE
          </p>

        </div>

        {/* HERO */}
        <div className="max-w-[620px]">

          {/* LABEL */}
          <div
            className="mb-10 inline-flex items-center border border-[#caa84c]/40 bg-[#8a7440]/16 px-8 py-5"
          >
            <span className="mr-4 text-[#d4b24d] text-[12px]">
              •
            </span>

            <span
              className="uppercase tracking-[0.34em] text-[#d7bb69]"
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
            className="leading-[0.94] tracking-[-0.03em]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 500,
              fontSize: "clamp(58px, 7vw, 96px)",
              marginBottom: "34px",
            }}
          >
            <span className="text-white">
              Find Your{" "}
            </span>

            <span className="italic text-[#caa84c]">
              Dream
            </span>

            <br />

            <span className="text-white">
              Property in Dubai
            </span>
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
              className="h-[74px] w-[290px] border border-white/20 uppercase tracking-[0.32em]"
              style={{
                background: "rgba(8,8,14,0.22)",
                backdropFilter: "blur(10px)",
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
              className="uppercase tracking-[0.35em] text-white/75"
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
              boxShadow: "0 0 34px rgba(37,211,102,0.45)",
            }}
          >
            <span className="text-[32px] text-white">
              ☎
            </span>
          </div>

        </div>

      </div>

    </main>
  );
}
```
