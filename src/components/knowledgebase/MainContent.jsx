import { SearchIcon, PlusIcon } from "../ui/Icons";
import KBCard from "./KBCard";
import Pagination from "./Pagination";

function MainContent({ entries, onCreateNew }) {
  return (
    <main className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 pb-0">
        {/* page header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Knowledge Base</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <SearchIcon
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg py-2 pl-9 pr-4 text-sm w-56 outline-none focus:border-indigo-500 bg-white placeholder-gray-400"
              />
            </div>
            <button
              onClick={onCreateNew}
              className="flex items-center gap-1.5 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors hover:bg-indigo-700"
              style={{ backgroundColor: "#4F46E5" }}
            >
              <PlusIcon />
              Create New
            </button>
          </div>
        </div>

        {/* card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {entries.map((entry) => (
            <KBCard
              key={entry.id}
              title={entry.title}
              description={entry.description}
              createdOn={entry.createdOn}
            />
          ))}
        </div>
      </div>

      {/* pagination pinned to bottom */}
      <div className="flex-shrink-0 px-6">
        <Pagination totalRows={entries.length} />
      </div>
    </main>
  );
}

export default MainContent;