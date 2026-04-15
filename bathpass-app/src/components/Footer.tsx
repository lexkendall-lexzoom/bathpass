import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <span className="text-lg font-bold tracking-tight">bathpass</span>
            <p className="text-sm text-silver mt-4 leading-relaxed max-w-xs">
              Flexible membership across the best bathhouses, saunas, and
              recovery spaces in your city.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-silver/50 uppercase tracking-wider mb-4">Product</p>
            <div className="space-y-2.5">
              <Link href="/membership" className="block text-sm text-silver hover:text-white transition-colors">Membership</Link>
              <Link href="/venues" className="block text-sm text-silver hover:text-white transition-colors">Venues</Link>
              <Link href="/how-it-works" className="block text-sm text-silver hover:text-white transition-colors">How It Works</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-silver/50 uppercase tracking-wider mb-4">Company</p>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-sm text-silver hover:text-white transition-colors">About</Link>
              <Link href="/partners" className="block text-sm text-silver hover:text-white transition-colors">For Venues</Link>
              <a href="https://dipdays.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-silver hover:text-white transition-colors">Dipdays.com</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-silver/50 uppercase tracking-wider mb-4">Legal</p>
            <div className="space-y-2.5">
              <Link href="/privacy" className="block text-sm text-silver hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="block text-sm text-silver hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-silver/40">&copy; {new Date().getFullYear()} Bathpass</p>
          <p className="text-xs text-silver/40">New York City &middot; Expanding soon</p>
        </div>
      </div>
    </footer>
  );
}
