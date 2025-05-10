import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function generateContent(prompt: string): Promise<string> {
  const res = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'Sei un esperto marketing per locali.' },
      { role: 'user', content: prompt }
    ],
    max_tokens: 800,
  });

  return res.choices[0].message.content || '';
}
