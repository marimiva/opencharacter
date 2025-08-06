import Image from 'next/image';

export const runtime = "edge";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-white mb-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About Chara</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center">An uncensored alternative to c.ai, built for the community</h2>

      <div className="space-y-6">
        <p className="italic text-gray-300 text-center">Started: August 3, 2025 | Last Updated: August 6, 2025</p>

        <p>
          Chara is a platform created in response to growing dissatisfaction with Character.AI’s increasing censorship, limited control, and long queues. Our goal is simple: bring back the freedom, flexibility, and fun of the early days — without the restrictions.
        </p>

        <p>
          Chara is inspired by the original version of c.ai that users loved: open-ended, fast, and user-first. With Chara, you can create uncensored characters, roleplay without filters, and have full control over your experience.
        </p>

        <p>
          While we are not open source, our goal is transparency and freedom — and we proudly build on top of existing community efforts. Chara makes use of foundational ideas and code contributions from the amazing open-source project <a href="https://opencharacter.org" className="underline text-blue-400" target="_blank">OpenCharacter.org</a>. We are incredibly grateful for their work in making customizable AI character tools available to everyone.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Chara Exists</h2>

        <p>
          Most character chat platforms today impose strict filters, slow you down with wait times, or gate core features behind a paywall. Chara is different. It’s designed to be <strong>uncensored</strong>, <strong>free forever</strong>, and <strong>extremely customizable</strong>.
        </p>

        <p>
          We support public and private characters, message editing, regeneration, personas, and more. You can talk to characters, create stories, and explore creative possibilities without limits.
        </p>

        <p>
          Large language models (LLMs) are becoming more accessible, and with tools like OpenRouter, we can tap into multiple powerful models under one system — giving you the flexibility c.ai doesn’t offer.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Future of Chara</h2>

        <p>
          Chara isn’t meant to just mimic c.ai — it’s a launchpad. We’re working on future integrations with voice models, text-to-image, image-to-text, and persona chaining so that you can create entire worlds, stories, and visual experiences using characters you define.
        </p>

        <p>
          Want a character that talks like Shakespeare and draws like Hokusai? You’ll be able to do that — all within the same platform. We're building a modular system that lets you mix and match models to shape your experience exactly how you want.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Credits & Acknowledgements</h2>

        <p>
          Parts of Chara’s initial codebase were adapted from the open-source project <a href="https://opencharacter.org" className="underline text-blue-400" target="_blank">OpenCharacter.org</a>. We sincerely thank the contributors behind it for their openness, effort, and support of the AI developer community.
        </p>

        <p>
          We also thank the broader open-source ecosystem for making LLMs, hosting solutions, and development tools freely accessible — without which Chara would not exist.
        </p>

        <p className="mt-6 font-semibold text-center">
          Learn more or start chatting at <a href="https://chara-research.com" className="underline">chara-research.com</a>
        </p>
      </div>
    </div>
  );
}
