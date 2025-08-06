import React from 'react';
import { Metadata } from 'next';

export const runtime = "edge";

export const metadata: Metadata = {
  title: 'Chara vs Character.AI – What Sets Us Apart',
  description: 'Chara is an uncensored, free forever, no-restrictions alternative to c.ai.',
  openGraph: {
    title: 'Chara vs Character.AI – What Sets Us Apart',
    description: 'Chara is an uncensored, free forever, no-restrictions alternative to c.ai.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Chara vs Character.AI – What Sets Us Apart',
    description: 'Chara is an uncensored, free forever, no-restrictions alternative to c.ai.',
    creator: '@chara_research',
  },
};

export default function CharaVsCAIBlogPage() {
  return (
    <div className="md:ml-16 bg-neutral-900 text-white p-6 rounded-lg mx-auto flex flex-col gap-12 mb-24">
      <div className='gap-6 flex flex-col text-center mx-auto'>
        <p className="text-xs mb-4 text-center">Published on October 9th, 2024</p>
        <h1 className="text-5xl mb-6 text-center max-w-4xl">Chara vs Character.AI</h1>
        <p className='text-sm text-neutral-400'>
          A breakdown of why Chara is the platform c.ai could have been — free, fast, and unrestricted.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-6 text-left text-white space-y-6 text-sm sm:text-base">
        <h2 className="text-2xl font-bold">Chara is Different</h2>
        <p>
          We built <strong>Chara</strong> to fix the problems we faced on Character.AI — constant filters, wait times, and limited control. Here’s how the two compare:
        </p>

        <div className="overflow-x-auto mt-6 border border-white/10 rounded-lg">
          <table className="min-w-full text-left text-sm border-collapse">
            <thead className="bg-white/5">
              <tr>
                <th className="p-3 font-semibold">Feature</th>
                <th className="p-3 font-semibold text-green-400">Chara</th>
                <th className="p-3 font-semibold text-red-400">Character.AI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                ["Uncensored Conversations", "✅ Yes", "❌ No"],
                ["Free Forever", "✅ Yes", "❌ No (Paid Tiers)"],
                ["No Queue or Wait Time", "✅ Instant access", "❌ Frequent queues"],
                ["Customizable Characters", "✅ Full control", "⚠️ Limited"],
                ["Offline/Local Mode", "✅ Available", "❌ Not supported"],
                ["Open Source", "❌ Closed-source", "❌ Closed-source"],
                ["Ads and Monetization", "❌ None", "✅ Present"],
                ["Export & Ownership", "✅ You own it", "❌ Locked in"],
              ].map(([feature, chara, cai], i) => (
                <tr key={i}>
                  <td className="p-3 font-medium">{feature}</td>
                  <td className="p-3">{chara}</td>
                  <td className="p-3">{cai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10">Your AI, Your Rules</h2>
        <p>
          Whether you're roleplaying, experimenting with unique personalities, or just having fun — Chara gives you freedom without filters or corporate restrictions. It’s your world. Build it your way.
        </p>

        <p className="mt-6 font-semibold">
          Try it now at <a href="https://chara-research.com" className="underline">chara-research.com</a>
        </p>
      </div>
    </div>
  );
}
