
import React, { useState } from "react";

const tools = [
  { name: "Minea", url: "https://app.minea.com" },
  { name: "Adspy", url: "https://app.adspy.com/login" },
  { name: "PipiAds", url: "https://www.pipiads.com/nl/login" },
  { name: "PPSpy", url: "https://app.ppspy.com/login" },
  { name: "Adscalp", url: "https://authentication.adscalp.com/login" },
  { name: "Shophunter", url: "https://app.shophunter.io/login" },
  { name: "ChatGPT Plus", url: "https://chat.openai.com" },
  { name: "Dropispy", url: "https://dropispy.com" },
  { name: "Peeksta", url: "https://peeksta.com" }
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filtered = tools.filter(tool => tool.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main style={{ padding: 40, background: "#0e0e1a", minHeight: "100vh", color: "white", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>EasyTools Dashboard</h1>
      <input
        type="text"
        value={search}
        placeholder="Zoek tools..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 10, width: "100%", maxWidth: 400, margin: "0 auto 40px", display: "block" }}
      />
      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {filtered.map((tool, i) => (
          <div key={i} style={{ background: "#1e1e2e", padding: 20, borderRadius: 10, textAlign: "center" }}>
            <h2>{tool.name}</h2>
            <button onClick={() => window.open(tool.url, "_blank")} style={{ padding: 10, marginTop: 10 }}>Open Tool</button>
          </div>
        ))}
      </div>
    </main>
  );
}
