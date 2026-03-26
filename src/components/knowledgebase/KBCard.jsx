import { DotsVertical } from "../ui/Icons";

function KBCard({ title, description, createdOn }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between hover:shadow-sm transition-shadow min-h-[180px]">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <button className="text-gray-400 hover:text-gray-600 p-0.5">
            <DotsVertical />
          </button>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>

      <p className="text-xs text-gray-400 mt-6 pt-3 border-t border-gray-100">
        Created On: {createdOn}
      </p>
    </div>
  );
}

export default KBCard;
