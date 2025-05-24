import React, { useState } from 'react';

const tools = [
  { name: 'Minea', url: 'https://app.minea.com' },
  { name: 'Adspy', url: 'https://www.adspy.com' },
  { name: 'PipiAds', url: 'https://pipiads.com' },
  { name: 'PPSpy', url: 'https://ppspy.com' },
  { name: 'Adscalp', url: 'https://adscalp.com' },
  { name: 'Shophunter', url: 'https://shophunter.io' },
  { name: 'ChatGPT Plus', url: 'https://chat.openai.com' },
  { name: 'Dropispy', url: 'https://dropispy.com' },
  { name: 'Peeksta', url: 'https://peeksta.com' },
  { name: 'Mokker AI', url: 'https://mokker.ai' },
  { name: 'Foreplay', url: 'https://foreplay.co' },
  { name: 'NicheScraper', url: 'https://nichescraper.com' },
  { name: 'Futurelib', url: 'https://futurelib.io' },
  { name: 'PlayHT', url: 'https://play.ht' },
  { name: 'CreativeOS', url: 'https://creativeos.com' },
  { name: 'Midjourney', url: 'https://midjourney.com' },
  { name: 'DesignBeast', url: 'https://designbeast.io' },
  { name: 'vidIQ', url: 'https://vidiq.com' },
  { name: 'Brain.fm', url: 'https://brain.fm' },
  { name: 'Krea AI', url: 'https://krea.ai' },
  { name: 'Unsplash', url: 'https://unsplash.com' },
  { name: 'StealthWriter AI', url: 'https://stealthwriter.ai' },
  { name: 'Viralytic', url: 'https://viralytic.com' },
  { name: 'HeyGen', url: 'https://heygen.com' },
  { name: 'GetHookd', url: 'https://gethookd.io' },
  { name: 'PicLumen', url: 'https://piclumen.com' },
  { name: 'Trending SoundTok', url: 'https://trendingsoundtok.com' }
];

export default function Dashboard() {
  const [search, setSearch] = useState('');
  const filtered = tools.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>EasyTools Dashboard</h1>
      <input placeholder="Zoek tools..." value={search} onChange={e => setSearch(e.target.value)} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
        {filtered.map((tool, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: 10, margin: 10, width: 150 }}>
            <strong>{tool.name}</strong>
            <div><a href={tool.url} target="_blank">Open Tool</a></div>
          </div>
        ))}
      </div>
    </div>
  );
}