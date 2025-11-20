export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--navy))] text-[rgb(var(--off-white))] py-8 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center">
            <img
              src="/brand/trimesa-logo-transparent.png"
              alt="TriMesa Capital Partners"
              className="h-24 md:h-36 w-auto max-w-full object-contain opacity-80"
            />
          </div>
          
          <div className="text-sm text-[rgb(var(--off-white))] opacity-80 max-w-2xl">
            <p className="text-xs">
              TriMesa Capital Partners serves institutional and accredited investors. This website does not constitute an offer to sell securities.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-[rgb(var(--slate))] text-xs text-[rgb(var(--off-white))] opacity-60">
          <p>© {new Date().getFullYear()} TriMesa Capital Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
