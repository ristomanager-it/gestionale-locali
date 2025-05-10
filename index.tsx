export default function Home() {
  return (
    <main>
      <h1>Benvenuto nel tuo gestionale 🎉</h1>
      <p>La pagina si è caricata correttamente da Vercel.</p>
    </main>
  );
}
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const generate = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <main>
      <h1>Generatore Marketing</h1>
      <textarea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Scrivi qui il tuo evento..."
      />
      <button onClick={generate}>Genera</button>
      <pre>{result}</pre>
    </main>
  );
}
