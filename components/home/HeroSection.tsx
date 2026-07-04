import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col lg:flex-row items-center gap-8 py-8 lg:py-16">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-full tracking-wider uppercase">
            Soroban Powered Trade Escrows
          </div>
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
            Decentralized Logistics &amp; Milestone Escrows
          </h1>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            Remove counterparty risks in global trade. Coordinate buyers, sellers, carriers, and inspectors trustlessly through Stellar smart contracts.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/dashboard" className="bg-black text-white px-8 py-3 text-sm font-semibold rounded hover:bg-slate-800 transition-all active:scale-95">
              Access Trade Dashboard
            </Link>
            <Link href="/transfer" className="bg-white border border-slate-200 text-slate-900 px-8 py-3 text-sm font-semibold rounded hover:bg-slate-50 transition-all active:scale-95">
              Direct XLM Transfer
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-square w-full max-w-md mx-auto bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm p-8 relative flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Smart Contract ID</p>
                <p className="font-mono text-sm text-slate-950 font-bold mt-1">CBAF...LJ47</p>
              </div>
              <span className="material-symbols-outlined text-slate-900 text-3xl">encrypted</span>
            </div>
            <div className="space-y-4">
              <div className="h-px bg-slate-200 w-full"></div>
              <div className="flex justify-between text-xs text-slate-500 font-semibold uppercase tracking-widest">
                <span>Escrow Balance</span>
                <span className="text-emerald-600">Locked</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-950">
                50,000 XLM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
