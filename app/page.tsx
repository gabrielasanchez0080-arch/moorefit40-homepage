"use client";

import { useState } from "react";
import { ArrowRight, Mail, Instagram } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-orange-400" />
            <span className="font-black tracking-tight text-xl">MooreFIT 40+</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-cyan-600" href="#programs">Programs</a>
            <a className="hover:text-cyan-600" href="#about">About</a>
            <a className="hover:text-cyan-600" href="#contact">Contact</a>
          </nav>
          <a href="#programs" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition md:ml-4">
            Start Your Program <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-amber-50 to-white" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Get <span className="text-cyan-600">Moore</span> from your 40s and beyond
            </h1>
            <p className="mt-5 text-lg text-neutral-700">
              Strength, confidence, and longevity—without crash diets. Personalized coaching for busy adults in their 40s+.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition">
                Explore Programs <ArrowRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold border border-neutral-300 hover:border-neutral-400 transition">
                Meet Coach Gaby
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-3 gap-4 text-sm text-neutral-600">
              <li className="rounded-xl border p-3 text-center">Strength</li>
              <li className="rounded-xl border p-3 text-center">Confidence</li>
              <li className="rounded-xl border p-3 text-center">Longevity</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl bg-[rgb(245,238,230)] shadow-xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-3xl bg-gradient-to-tr from-cyan-400 to-orange-400 opacity-30 blur-2xl" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-3xl bg-gradient-to-tr from-orange-400 to-cyan-400 opacity-30 blur-2xl" />
          </div>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Programs & Pricing</h2>
          <p className="mt-3 text-neutral-700">Simple, transparent options. Choose what fits your season.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold">Onboarding</h3>
            <p className="mt-2 text-sm text-neutral-600">Initial consult, goal setting, and health assessment.</p>
            <p className="mt-6 text-3xl font-black">$100</p>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-600 text-white font-semibold px-4 py-3 hover:bg-cyan-700 transition">
              Get Started
            </a>
          </div>
          <div className="rounded-3xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold">Workout Programming</h3>
            <p className="mt-2 text-sm text-neutral-600">Customized 4-week plan with progressive overload.</p>
            <p className="mt-6 text-3xl font-black">$250</p>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-600 text-white font-semibold px-4 py-3 hover:bg-cyan-700 transition">
              Get Started
            </a>
          </div>
          <div className="rounded-3xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold">Onboarding + Programming</h3>
            <p className="mt-2 text-sm text-neutral-600">Complete setup plus your first month of training.</p>
            <p className="mt-6 text-3xl font-black">$299</p>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-600 text-white font-semibold px-4 py-3 hover:bg-cyan-700 transition">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-neutral-50 border-t border-b">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Meet Coach Gaby</h2>
            <p className="mt-4 text-neutral-700">
              I help adults 40+ build sustainable strength and energy with practical nutrition and training that fits real life. No extremes—just smart progress.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li>• Evidence-based training with glute-focused options</li>
              <li>• Macros that respect your lifestyle (including on-the-road plans)</li>
              <li>• Bilingual support (English/Spanish)</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition">
              Book a Consult <ArrowRight size={18} />
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square w-full rounded-3xl bg-[rgb(245,238,230)] shadow-xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Transformations</h2>
          <p className="mt-3 text-neutral-700">Real stories coming soon. Your journey could be next.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-3xl border p-6 shadow-sm">
              <div className="h-36 w-full rounded-2xl bg-neutral-100" />
              <p className="mt-4 text-sm text-neutral-700">“I feel stronger, more confident, and finally consistent.”</p>
              <p className="mt-2 text-xs text-neutral-500">Client name • Age 47</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-neutral-50 border-t">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Let’s talk</h2>
            <p className="mt-3 text-neutral-700">Have questions or want to get started? Send a message and I’ll reply personally.</p>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert(`Thanks! I’ll reply to ${email} soon.`); }}
            className="grid md:grid-cols-4 gap-3"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:col-span-3 w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-cyan-600 text-white font-semibold px-4 py-3 hover:bg-cyan-700 transition"
            >
              Contact Me
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-700">
            <a href="mailto:hello@moorefit40.com" className="inline-flex items-center gap-1 hover:text-cyan-700"><Mail size={16}/> hello@moorefit40.com</a>
            <span>•</span>
            <a href="https://instagram.com/ga_by9930" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-700"><Instagram size={16}/> @ga_by9930</a>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MooreFIT 40+. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-cyan-700">Back to top</a>
            <a href="#" className="hover:text-cyan-700">Privacy</a>
            <a href="#" className="hover:text-cyan-700">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
