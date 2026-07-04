export default function FeatureHighlight() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-cover bg-center aspect-video rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400"
             style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0TMXfAyyia6zF06CB90XxMFNGx9kMp8iGNdNGJMDv5uCqR9hI2_cavHO_X4sq7FENcILA0oXUuVjCyv1fjazU7pdHkbkSF1nxhtU7-qUh5jpJJbN9-96MfW0emrqPUTWIqGAdr06_mfBDJaJfiP4lq3ZtfmtX1dKB18D6Px9mowGipWvGBEzYBGg_m2KD_HEnFqHLUYNYpWMlK6aYp0DvIGgkD952cqfiD7oUA76OYRO9L6OXgeL_mkeI3L8Sil7bgzj0c_-ASNI')` }}>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">Trustless Verification at Every Port</h2>
          <p className="text-slate-500 leading-relaxed">
            NovaTrade integrates with port authorities and independent inspectors via Soroban smart contracts. No more manual paperwork or delayed wire transfers. Once a verified inspector uploads the hash of the bill of lading, funds are automatically triggered.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#10B981] mt-0.5">task_alt</span>
              <div>
                <p className="font-bold text-sm text-slate-900">Immutable Audit Trail</p>
                <p className="text-xs text-slate-500 mt-0.5">Every handover is timestamped and signed on the Stellar ledger.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#10B981] mt-0.5">task_alt</span>
              <div>
                <p className="font-bold text-sm text-slate-900">Zero Gas Soroban</p>
                <p className="text-xs text-slate-500 mt-0.5">Execute complex logic with the industry&apos;s lowest overhead.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
