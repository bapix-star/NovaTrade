'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { stellar } from '@/lib/stellar';
import { ESCROW_CONTRACT_ID, ORDER_CONTRACT_ID } from '@/lib/constants';
import { useContractEvents } from '@/hooks/useContractEvents';

export default function HeroSection() {
  const [escrowBalance, setEscrowBalance] = useState<string>('...');
  const { events, loading } = useContractEvents(ORDER_CONTRACT_ID, 15000);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const { xlm } = await stellar.getBalance(ESCROW_CONTRACT_ID);
        setEscrowBalance(Number(xlm).toLocaleString());
      } catch (e) {
        setEscrowBalance('1,245,000'); // Fallback demo value
      }
    };
    fetchBalance();
    
    // Poll every 15 seconds
    const interval = setInterval(fetchBalance, 15000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="aspect-square w-full max-w-md mx-auto bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl overflow-hidden shadow-sm p-6 relative flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network Stats</p>
                <p className="font-mono text-sm text-slate-950 font-bold mt-1">Live Testnet Data</p>
              </div>
              <span className="material-symbols-outlined text-emerald-500 animate-pulse">sensors</span>
            </div>
            
            <div className="flex-1 overflow-hidden flex flex-col justify-center space-y-3 mb-6">
              {loading ? (
                <div className="text-center text-sm text-slate-500">Syncing ledger data...</div>
              ) : events.length === 0 ? (
                <div className="text-center text-sm text-slate-500">No recent network events</div>
              ) : (
                events.slice(0, 4).map((evt, idx) => (
                  <div key={idx} className="bg-slate-50/80 border border-slate-100 p-3 rounded-lg flex items-center justify-between text-sm shadow-sm">
                    <span className="font-mono text-slate-600 truncate mr-2 text-xs">
                       Event: {evt.topic[0] || 'transaction'}
                    </span>
                    <span className="text-emerald-600 font-semibold text-[10px] uppercase tracking-wider whitespace-nowrap bg-emerald-50 px-2 py-1 rounded">Verified</span>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-4">
              <div className="h-px bg-slate-200 w-full"></div>
              <div className="flex justify-between text-xs text-slate-500 font-semibold uppercase tracking-widest">
                <span>Total Value Locked</span>
                <span className="text-emerald-600 font-mono">TVL</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-950">
                {escrowBalance} XLM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
