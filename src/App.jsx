import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/knowledgebase/MainContent";
import CreateModal from "./components/knowledgebase/CreateModal";

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-white">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent onCreateNew={() => setShowCreateModal(true)} />
      </div>

      <CreateModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}

export default App;
