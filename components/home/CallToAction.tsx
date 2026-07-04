import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-black p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Secure Your Next Trade</h2>
          <p className="text-slate-400 text-sm sm:text-base">Start your first milestone-based shipment on NovaTrade today.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard" className="bg-white text-black px-8 py-3 text-sm font-semibold rounded hover:bg-slate-100 transition-colors">
            Launch App
          </Link>
        </div>
      </div>
    </section>
  );
}
