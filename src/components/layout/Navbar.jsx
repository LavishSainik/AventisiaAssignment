import { SearchIcon, BellIcon, ChevronDown } from "../ui/Icons";

function Navbar() {
  return (
    <header className="h-14 flex items-center justify-between px-4 flex-shrink-0" style={{ backgroundColor: "#1E1B4B" }}>
      {/* left — logo + workspace selector */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-base tracking-tight">Worcspace</span>
        </div>
        <button className="flex items-center gap-1.5 text-white text-sm px-3 py-1 rounded-md ml-2" style={{ backgroundColor: "rgba(99, 91, 199, 0.7)" }}>
          Worcspace 1
          <ChevronDown size={12} />
        </button>
      </div>

      {/* center — global search */}
      <div className="flex-1 max-w-lg mx-8">
        <div className="relative">
          <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-gray-300 placeholder-gray-500 text-sm rounded-lg py-2 pl-9 pr-14 outline-none focus:border-indigo-400 transition-colors"
            style={{ backgroundColor: "#312d63", borderWidth: "1px", borderColor: "#413c7a" }}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-400 px-1.5 py-0.5 rounded" style={{ backgroundColor: "#1E1B4B", border: "1px solid #413c7a" }}>
            ⌘K
          </span>
        </div>
      </div>

      {/* right — bell + avatar */}
      <div className="flex items-center gap-4">
        <button className="text-gray-300 hover:text-white transition-colors">
          <BellIcon />
        </button>
        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-semibold">
          GK
        </div>
      </div>
    </header>
  );
}

export default Navbar;
