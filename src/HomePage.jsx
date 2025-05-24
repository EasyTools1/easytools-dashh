import React from 'react';

export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0e0e1a',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <img src="https://i.imgur.com/3NrlAXw.png" alt="EasyTools Logo" style={{ height: '48px', marginBottom: '1rem' }} />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>EasyTools Dashboard</h1>
      <p style={{ color: '#ccc' }}>Bekijk en gebruik de beste AI tools met één klik!</p>
    </main>
  );
}
