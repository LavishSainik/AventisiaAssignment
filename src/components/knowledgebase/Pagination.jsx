import { ChevronDown } from "../ui/Icons";

function Pagination({ totalRows }) {
  const arrows = ["«", "‹", "›", "»"];

  return (
    <div className="flex items-center justify-between px-1 py-3 text-sm text-gray-500 border-t border-gray-200">
      <span>{totalRows} rows</span>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <div className="relative">
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm bg-white outline-none pr-7 cursor-pointer"
              style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none" }}
              defaultValue="10"
            >
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <ChevronDown size={12} />
            </span>
          </div>
        </div>

        <span>page 1 of 1</span>

        <div className="flex items-center gap-1">
          {arrows.map((arrow, i) => (
            <button
              key={i}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-400 hover:bg-gray-50 text-sm"
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pagination;
