'use client';

import { ArrowRight } from 'lucide-react';

export default function ScrollButton() {
  return (
    <button
      onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
      className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold group transition-colors"
    >
      Discover More
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
}
