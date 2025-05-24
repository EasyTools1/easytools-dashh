import React, { useState } from "react";

const tools = [
  { name: "Minea", url: "https://app.minea.com" },
  { name: "Adspy", url: "https://www.adspy.com" },
  { name: "PipiAds", url: "https://pipiads.com" },
  { name: "PPSpy", url: "https://ppspy.com" },
  { name: "Adscalp", url: "https://adscalp.com" },
  { name: "Shophunter", url: "https://shophunter.io" },
  { name: "ChatGPT Plus", url: "https://chat.openai.com" },
  { name: "Dropispy", url: "https://dropispy.com" },
  { name: "Peeksta", url: "https://peeksta.com" },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#0e0e1a", color: "white", minHeight: "100vh", padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}>EasyTools Dashboard</h1>
      <input
        type="text"
        placeholder="Zoek tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ display: "block", margin: "0 auto 2rem auto", padding: "0.5rem", width: "300px" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
        {filteredTools.map((tool, idx) => (
          <div key={idx} style={{ background: "#1e1e2e", padding: "1rem", borderRadius: "8px", width: "160px", textAlign: "center" }}>
            <h2>{tool.name}</h2>
            <button onClick={() => window.open(tool.url, '_blank')} style={{ padding: "0.5rem 1rem", marginTop: "0.5rem" }}>Open Tool</button>
          </div>
        ))}
      </div>
    </div>
  );
}
