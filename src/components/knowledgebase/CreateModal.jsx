import { useState } from "react";
import { CloseIcon } from "../ui/Icons";
import SelectField from "../ui/SelectField";
import useEscapeKey from "../../hooks/useEscapeKey";

const VECTOR_STORE_OPTIONS = [
  { value: "Qdrant", label: "Qdrant" },
  { value: "Pinecone", label: "Pinecone" },
  { value: "Weaviate", label: "Weaviate" },
  { value: "ChromaDB", label: "ChromaDB" },
];

const EMBEDDING_MODEL_OPTIONS = [
  { value: "text-embedding-ada-002", label: "text-embedding-ada-002" },
  { value: "text-embedding-3-small", label: "text-embedding-3-small" },
  { value: "text-embedding-3-large", label: "text-embedding-3-large" },
];

const INITIAL_FORM = {
  name: "",
  description: "",
  vectorStore: "Qdrant",
  embeddingModel: "text-embedding-ada-002",
};

function CreateModal({ isOpen, onClose, onCreate }) {

  const [formData, setFormData] = useState(INITIAL_FORM);

  // close panel on Escape press
  useEscapeKey(onClose, isOpen);

  if (!isOpen) return null;

  function handleChange(field) {
    return (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

 function handleCreate() {
  if (!formData.name.trim()) {
    alert("Name is required and cannot be edited later.");
    return;
  }
  onCreate(formData);
  setFormData(INITIAL_FORM);
}

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Create New Knowledge Base"
        className="relative bg-white w-full max-w-[480px] h-full shadow-xl flex flex-col animate-slide-in"
      >
        {/* header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Create New Knowledge Base
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 mt-1 transition-colors"
            aria-label="Close panel"
          >
            <CloseIcon />
          </button>
        </div>

        {/* form body */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* name — can't be changed after creation */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Name (Cannot be edited later)
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange("name")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-gray-400"
            />
          </div>

          {/* description — optional */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Description
            </label>
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={handleChange("description")}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none placeholder-gray-400"
            />
          </div>

          <SelectField
            label="Vector Store"
            required
            value={formData.vectorStore}
            onChange={handleChange("vectorStore")}
            options={VECTOR_STORE_OPTIONS}
          />

          <SelectField
            label="LLM Embedding Model"
            required
            value={formData.embeddingModel}
            onChange={handleChange("embeddingModel")}
            options={EMBEDDING_MODEL_OPTIONS}
          />
        </div>

        {/* footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={handleCreate}
            className="text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors hover:bg-indigo-700"
            style={{ backgroundColor: "#4F46E5" }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
