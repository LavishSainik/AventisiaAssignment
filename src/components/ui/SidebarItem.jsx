function SidebarItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer rounded-r-md transition-colors
        ${
          active
            ? "bg-indigo-50 text-primary border-l-[3px] border-primary font-medium"
            : "text-gray-600 hover:bg-gray-50 border-l-[3px] border-transparent"
        }`}
    >
      <span className={active ? "text-primary" : "text-gray-500"}>
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}

export default SidebarItem;
