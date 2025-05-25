import React from 'react'

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
]

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#0e0e1a', color: 'white', minHeight: '100vh', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>EasyTools Dashboard</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        {tools.map((tool, idx) => (
          <div key={idx} style={{ background: '#1a1b29', padding: '1rem', borderRadius: '1rem', textAlign: 'center', width: '150px' }}>
            <h2>{tool.name}</h2>
            <button onClick={() => window.open(tool.url)} style={{ marginTop: '0.5rem', background: '#3b82f6', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '0.5rem' }}>
              Open Tool
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}