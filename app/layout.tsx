import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Budget Tech India — Best Gadget Reviews for Students",
  description: "Honest budget tech reviews, trending gadgets, and best deals in India for students and professionals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "var(--bg)", color: "var(--text)" }}>

        {/* Trending ticker bar */}
        <div style={{ background: "var(--accent)", padding: "6px 0", overflow: "hidden" }}>
          <div className="ticker-track text-sm font-semibold text-white">
            {[
              "🔥 iQOO Neo 9 Pro — ₹29,999",
              "⚡ POCO X6 Pro — Best Under ₹25K",
              "💻 HP Pavilion 15 — Great Deal",
              "🎧 Nothing Ear (2) — ₹7,999",
              "📱 Realme GT 6T — Gaming Beast",
              "🖥️ Acer Nitro V — Budget Gaming",
              "🔥 iQOO Neo 9 Pro — ₹29,999",
              "⚡ POCO X6 Pro — Best Under ₹25K",
              "💻 HP Pavilion 15 — Great Deal",
              "🎧 Nothing Ear (2) — ₹7,999",
              "📱 Realme GT 6T — Gaming Beast",
              "🖥️ Acer Nitro V — Budget Gaming",
            ].map((item, i) => (
              <span key={i} style={{ marginRight: "60px" }}>{item}</span>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <nav style={{
          background: "rgba(12,12,15,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          padding: "0 24px",
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span className="font-display" style={{ fontSize: "1.3rem", fontWeight: 800 }}>
              <span className="gradient-text">Budget</span>
              <span style={{ color: "var(--text)" }}> Tech India</span>
            </span>
          </Link>

          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            <Link href="/" className="nav-link" style={{ textDecoration: "none" }}>Home</Link>
            <Link href="/blog" className="nav-link" style={{ textDecoration: "none" }}>Blog</Link>
            <Link href="/about" className="nav-link" style={{ textDecoration: "none" }}>About</Link>
            <Link href="/contact" className="nav-link" style={{ textDecoration: "none" }}>Contact</Link>
            <Link href="/deals" style={{
              background: "var(--accent)",
              color: "white",
              padding: "6px 16px",
              borderRadius: "6px",
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}>🔥 Hot Deals</Link>
          </div>
        </nav>

        {/* Page Content */}
        <main style={{ minHeight: "100vh" }}>{children}</main>

        {/* Footer */}
        <footer style={{
          background: "var(--bg-card)",
          borderTop: "1px solid var(--border)",
          marginTop: "80px",
          padding: "40px 24px 24px",
        }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "32px", marginBottom: "32px" }}>
              
              <div>
                <div className="font-display" style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "8px" }}>
                  <span className="gradient-text">Budget</span> Tech India
                </div>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", maxWidth: "240px", lineHeight: 1.6 }}>
                  Honest reviews and best tech deals for Indian students and professionals.
                </p>
              </div>

              <div>
                <div style={{ fontWeight: 600, marginBottom: "12px", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)" }}>Quick Links</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["Home", "Blog", "About", "Contact"].map(link => (
                    <Link key={link} href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                      style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                    >{link}</Link>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 600, marginBottom: "12px", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)" }}>Categories</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["Laptops", "Smartphones", "Earbuds", "Accessories"].map(cat => (
                    <span key={cat} style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{cat}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "20px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>© 2026 Budget Tech India. All Rights Reserved.</p>
              <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
                ⚠️ As an Amazon Associate, we earn from qualifying purchases.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
