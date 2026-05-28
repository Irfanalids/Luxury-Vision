```tsx
export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div
        className="min-h-screen flex flex-col"
        style={{
          background:
            "linear-gradient(rgba(5,10,20,0.68), rgba(5,10,20,0.68))",
        }}
      >
        {/* HEADER */}
        <header className="px-8 pt-7">
          <div className="leading-none">
            <h1
              style={{
                fontSize: "24px",
                letterSpacing: "2px",
                fontFamily: "Georgia, serif",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              LUXURY{" "}
              <span style={{ color: "#c8a24c" }}>
                VISION
              </span>
            </h1>

            <p
              style={{
                fontSize: "8px",
                letterSpacing: "5px",
                marginTop: "10px",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "Arial, sans-serif",
              }}
            >
              REAL ESTATE
            </p>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="flex-1 flex items-center">
          <div
            style={{
              paddingLeft: "64px",
              marginTop: "-20px",
              width: "100%",
              maxWidth: "760px",
            }}
          >
            {/* TOP LABEL */}
            <div
              style={{
                border: "1px solid rgba(200,162,76,0.55)",
                padding: "14px 26px",
                width: "fit-content",
                marginBottom: "44px",
              }}
            >
              <p
                style={{
                  color: "#c8a24c",
                  fontSize: "11px",
                  letterSpacing: "4px",
                  fontWeight: 600,
                  fontFamily: "Arial, sans-serif",
                }}
              >
                • DUBAI'S PREMIER REAL ESTATE AGENCY
              </p>
            </div>

            {/* TITLE */}
            <h2
              style={{
                fontSize: "58px",
                lineHeight: "1.08",
                maxWidth: "560px",
                fontFamily: "Georgia, serif",
                fontWeight: 500,
                color: "#ffffff",
              }}
            >
              Find Your{" "}
              <span
                style={{
                  color: "#c8a24c",
                  fontStyle: "italic",
                }}
              >
                Dream
              </span>
              <br />
              Property in Dubai
            </h2>

            {/* DESCRIPTION */}
            <p
              style={{
                marginTop: "34px",
                fontSize: "16px",
                lineHeight: "2",
                color: "rgba(255,255,255,0.9)",
                maxWidth: "610px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Helping you navigate Dubai's most exclusive properties — from
              off-plan investments to luxury villas across Sheikh Zayed Road
              and beyond.
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: "18px",
                marginTop: "42px",
              }}
            >
              <button
                style={{
                  background: "#d8b547",
                  color: "#000",
                  padding: "16px 42px",
                  fontSize: "12px",
                  letterSpacing: "3px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                VIEW PROPERTIES
              </button>

              <button
                style={{
                  border: "1px solid rgba(255,255,255,0.5)",
                  color: "#fff",
                  background: "transparent",
                  padding: "16px 42px",
                  fontSize: "12px",
                  letterSpacing: "3px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                BOOK CONSULTATION
              </button>
            </div>

            {/* BOTTOM TEXT */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "64px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "1px",
                  background: "#c8a24c",
                }}
              />

              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "4px",
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                SCROLL TO EXPLORE
              </p>
            </div>
          </div>
        </section>

        {/* WHATSAPP */}
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
          }}
        >
          <div
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "999px",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "26px",
              boxShadow: "0 0 30px rgba(37,211,102,0.45)",
            }}
          >
            ✆
          </div>
        </div>
      </div>
    </main>
  );
}
```
