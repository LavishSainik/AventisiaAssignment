import { ChevronDown } from "./Icons";

function SelectField({ label, required, value, onChange, options }) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer pr-10"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <ChevronDown size={16} />
        </span>
      </div>
    </div>
  );
}

export default SelectField;
