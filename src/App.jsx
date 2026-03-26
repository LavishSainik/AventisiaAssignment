import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/knowledgebase/MainContent";
import CreateModal from "./components/knowledgebase/CreateModal";

// default cards matching the Figma
const DEFAULT_ENTRIES = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Test",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  createdOn: "14/07/2025",
}));

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [entries, setEntries] = useState(DEFAULT_ENTRIES);

  function handleCreate(formData) {
    const today = new Date();
    const dateStr =
      String(today.getDate()).padStart(2, "0") +
      "/" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "/" +
      today.getFullYear();

    const newEntry = {
      id: Date.now(),
      title: formData.name,
      description: formData.description || "No description provided",
      createdOn: dateStr,
    };

    setEntries((prev) => [newEntry, ...prev]);
    setShowCreateModal(false);
  }

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-white">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent
          entries={entries}
          onCreateNew={() => setShowCreateModal(true)}
        />
      </div>
      <CreateModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}

export default App;