import { useState } from "react";
import { SearchIcon, PlusIcon } from "../ui/Icons";
import KBCard from "./KBCard";
import Pagination from "./Pagination";

function MainContent({ entries, onCreateNew }) {
  const [searchQuery, setSearchQuery] = useState("");

  // filter cards based on title or description match
  const filteredEntries = entries.filter((entry) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      entry.title.toLowerCase().includes(query) ||
      entry.description.toLowerCase().includes(query)
    );
  });

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* card grid or empty state */}
        {filteredEntries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEntries.map((entry) => (
              <KBCard
                key={entry.id}
                title={entry.title}
                description={entry.description}
                createdOn={entry.createdOn}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <p className="mt-4 text-sm">No results found for "{searchQuery}"</p>
          </div>
        )}
      </div>

      {/* pagination pinned to bottom */}
      <div className="flex-shrink-0 px-6">
        <Pagination totalRows={filteredEntries.length} />
      </div>
    </main>
  );
}

export default MainContent;