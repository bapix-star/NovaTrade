export default function PipelineConsole() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Global Pipeline Console</h2>
            <p className="text-sm text-slate-500 mt-1">Route: SIN (Singapore) → HAM (Hamburg) • Shipment ID: #CT-88291</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3B82F6]"></span>
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout for Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {/* Milestone 1 */}
          <div className="high-air-card p-6 flex flex-col justify-between h-48 rounded-xl relative overflow-hidden shadow-sm">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 flex items-center justify-center bg-[#10B981] text-white rounded-full">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Oct 12</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Order Funded</h3>
              <p className="text-xs text-slate-500 mt-1">Escrow wallet verified &amp; locked.</p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="high-air-card p-6 flex flex-col justify-between h-48 rounded-xl relative overflow-hidden shadow-sm">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 flex items-center justify-center bg-[#10B981] text-white rounded-full">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Oct 14</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Cargo Shipped</h3>
              <p className="text-xs text-slate-500 mt-1">Vessel: &quot;Ever Given II&quot;</p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="high-air-card border-2 border-black p-6 flex flex-col justify-between h-48 rounded-xl relative overflow-hidden shadow-sm bg-white">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 flex items-center justify-center border-2 border-[#3B82F6] rounded-full relative">
                <div className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full animate-status-pulse"></div>
              </div>
              <span className="text-xs font-bold text-black tracking-widest uppercase">IN PROGRESS</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Inspection Clear</h3>
              <p className="text-xs text-slate-500 mt-1">Awaiting digital signature from Hamburg Port.</p>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="high-air-card p-6 flex flex-col justify-between h-48 rounded-xl relative overflow-hidden shadow-sm opacity-60">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 flex items-center justify-center bg-slate-200 text-slate-500 rounded-full">
                <span className="material-symbols-outlined text-sm">hourglass_empty</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Pending</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Payment Released</h3>
              <p className="text-xs text-slate-500 mt-1">Instant settlement upon validation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
