# Knowledge Base UI — React + Tailwind CSS

A pixel-accurate implementation of the Knowledge Base screen from the provided Figma design, built with React and Tailwind CSS.

## Screenshots

### Screen 1 — Knowledge Base Home
The main dashboard showing a grid of knowledge base cards with search, pagination, and full sidebar navigation.

### Screen 2 — Create New Knowledge Base
A slide-in modal panel triggered by the "Create New" button, with form fields for Name, Description, Vector Store, and LLM Embedding Model.

## Tech Stack

- **React 18** — functional components + hooks
- **Tailwind CSS 3.4** — utility-first styling
- **Vite 5** — fast dev server & build tool

## Getting Started

```bash
# install deps
npm install

# start dev server
npm run dev

# production build
npm run build
```

## Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # top navigation bar
│   │   └── Sidebar.jsx         # left sidebar with nav sections
│   ├── knowledgebase/
│   │   ├── MainContent.jsx     # cards grid + search bar + header
│   │   ├── KBCard.jsx          # individual knowledge base card
│   │   ├── CreateModal.jsx     # slide-in create form panel
│   │   └── Pagination.jsx      # pagination controls
│   └── ui/
│       ├── Icons.jsx           # all SVG icon components
│       ├── SidebarItem.jsx     # reusable sidebar nav item
│       └── SelectField.jsx     # reusable select dropdown with custom chevron
├── hooks/
│   └── useEscapeKey.js         # custom hook for keyboard shortcut
├── assets/                     # static assets (images, fonts etc.)
├── App.jsx                     # root component, manages modal state
├── main.jsx                    # entry point
└── index.css                   # tailwind directives + scrollbar styles
```

## Design Decisions

- **Component separation** — each UI piece lives in its own file. Grouped by feature (`knowledgebase/`) and shared concerns (`layout/`, `ui/`). This keeps things scalable — adding a new page means adding a new folder, not touching existing ones.
- **Custom hooks** — `useEscapeKey` extracts keyboard handling logic out of the component. Makes the modal cleaner and the hook reusable anywhere else in the app.
- **Reusable UI primitives** — `SelectField` and `SidebarItem` are generic building blocks. `SelectField` wraps the native `<select>` with `appearance-none` and a custom chevron to match the Figma exactly, while keeping accessibility intact.
- **No icon library dependency** — SVG icons are hand-written in `Icons.jsx`, keeping the bundle tiny. Can be swapped for `lucide-react` later with a one-line import change per icon.
- **Tailwind theme config** — primary (`#4F46E5`) and secondary (`#1E1B4B`) colors live in `tailwind.config.js`, so changing the brand palette is a single-file edit that propagates everywhere.
- **Slide-in modal** — panel slides from right with CSS animation (`animate-slide-in` defined in Tailwind config). Closes on Escape key or backdrop click. Has `role="dialog"` and `aria-modal` for accessibility.
- **Form validation** — basic required-field check on the Name input before submission. Form resets to initial state after successful creation.
