import SidebarItem from "../ui/SidebarItem";
import {
  AgentsIcon,
  AIModelsIcon,
  LibraryIcon,
  PublishedIcon,
  MachinesIcon,
  QueuesIcon,
  TriggersIcon,
  JobsIcon,
  ExecutionsIcon,
  VaultIcon,
  KnowledgeBaseIcon,
  KeyStoreIcon,
  TenantIcon,
  IntegrationsIcon,
  CreditUsageIcon,
} from "../ui/Icons";

// nav config — keeps the render clean, easy to add/remove items
const NAV_SECTIONS = [
  {
    title: "My Projects",
    items: [
      { icon: <AgentsIcon />, label: "Agents" },
      { icon: <AIModelsIcon />, label: "AI Models" },
      { icon: <LibraryIcon />, label: "Library" },
    ],
  },
  {
    title: "Orchestrator",
    items: [
      { icon: <PublishedIcon />, label: "Published" },
      { icon: <MachinesIcon />, label: "Machines" },
      { icon: <QueuesIcon />, label: "Queues" },
      { icon: <TriggersIcon />, label: "Triggers" },
      { icon: <JobsIcon />, label: "Jobs" },
      { icon: <ExecutionsIcon />, label: "Executions" },
      { icon: <VaultIcon />, label: "Vault" },
      { icon: <KnowledgeBaseIcon />, label: "Knowledge Base", active: true },
      { icon: <KeyStoreIcon />, label: "Key Store" },
    ],
  },
  {
    title: "Admin",
    items: [
      { icon: <TenantIcon />, label: "Tenant" },
      { icon: <IntegrationsIcon />, label: "Integrations" },
      { icon: <CreditUsageIcon />, label: "Credit Usage" },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="w-[230px] min-w-[230px] bg-white border-r border-gray-200 h-full overflow-y-auto flex-shrink-0">
      <nav className="py-4">
        {NAV_SECTIONS.map((section, idx) => (
          <div key={section.title}>
            <p className={`px-5 pb-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider ${idx === 0 ? "pt-2" : "pt-5"}`}>
              {section.title}
            </p>
            {section.items.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                active={item.active || false}
              />
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
