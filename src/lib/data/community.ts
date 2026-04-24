export const contributions = [
  {
    id: "smart-funnel-chart",
    title: "Smart Funnel Chart",
    description: "Smart Funnel Chart",
    url: "https://github.com/tryretool/custom-component-gallery/pull/52",
    tags: ["Charts & Maps","Data Visualization","Sales"],
    icon: "BarChartBig",
    imageUrl: "",
    githubBody: "Dynamically set the data according to json and also chart with 3d view"
  },
  {
    id: "cohort-analysis-chart",
    title: "Cohort Analysis Chart",
    description: "Cohort Analysis Chart",
    url: "https://github.com/tryretool/custom-component-gallery/pull/50",
    tags: ["Charts & Maps","Analytics","Retention"],
    icon: "LineChart",
    imageUrl: "",
    githubBody: "Cohort chart in dynamic way that gives css and json according to it and also we can change the css ."
  },
  {
    id: "dynamic-kanban-board",
    title: "Dynamic Kanban Board",
    description: "Add Dynamic Kanban Board Component with JSON Auto-Parsing and Drag-and-Drop",
    url: "https://github.com/tryretool/custom-component-gallery/pull/22",
    tags: ["UI & Layout","Project Management","Drag & Drop"],
    icon: "LayoutKanban",
    imageUrl: "",
    githubBody: "## 🚀 Overview\n\nThis PR introduces a dynamic Kanban board custom component for Retool that automatically parses JSON data and renders tasks into an interactive drag-and-drop board.\n\nThe component is schema-agnostic and supports flexible data structures with minimal configuration.\n\n---\n\n## ✨ Features\n\n- 🔄 Automatic JSON parsing from any structure\n- 🧠 Smart field inference (title, status, assignee, etc.)\n- 🎯 Optional field mapping for full control\n- 🧲 Drag-and-drop task movement across columns\n- 📊 Dynamic column generation based on status\n- 🔁 Real-time JSON synchronization on updates\n- 👤 Avatar support with image or initials fallback\n- 📅 Due date formatting and display\n- ⚡ Full Retool state and event integration\n\n---\n\n## 🔔 Event Handling\n\n- `dataSelect` event triggered when a task is selected\n- Exposes:\n  - `selectedData`\n  - `selectedDataId`\n- `lastAction` state tracks user interactions (`select`, `move`, `jsonLoad`)\n\n---\n\n## 📦 Inputs\n\n- `dataJson`\n- Field mappings (id, title, status, etc.)\n- `statusOrder`\n\n---\n\n## 📤 Outputs\n\n- `tasks`\n- `selectedData`\n- `selectedDataId`\n- `jsonError`\n- `lastAction`\n\n---\n\n## 🧪 Example Use Case\n\n- Visualize API data as a Kanban board\n- Build task tracking dashboards\n- Integrate with workflows using Retool events\n\n---\n\n## ⚠️ Notes\n\n- Handles invalid JSON gracefully\n- Works with nested or unknown data structures\n- Preserves original raw data when updating tasks\n\n---\n\n## 📸 Demo\n\n(Add screenshots or GIF here if needed)\n\n---\n\n## ✅ Ready for Review\n\nThis component is ready for testing and integration into Retool apps."
  },
  {
    id: "interactive-indoor-map",
    title: "Interactive Indoor Map",
    description: "Add interactive IndoorMap component with seat selection, layout editing, and theming",
    url: "https://github.com/tryretool/custom-component-gallery/pull/48",
    tags: ["Charts & Maps","Interactive","Events"],
    icon: "Map",
    imageUrl: "",
    githubBody: "## ✨ Overview\n\nThis PR introduces **IndoorMap**, a powerful and interactive custom component for Retool designed to handle seat layout management and booking workflows seamlessly.\n\nIt combines **visual clarity**, **real-time interaction**, and **flexible customization** to deliver a production-ready indoor mapping experience.\n\n---\n\n## 🚀 Key Features\n\n- 🎯 **Interactive Seat Selection**  \n  Easily select, highlight, and manage seats with clear visual states (available, selected, occupied)\n\n- 🛠 **Admin Layout Editor**  \n  Create, position, and remove seats with grid snapping and overlap prevention\n\n- 🗂 **Zone-Based Filtering**  \n  Filter seats dynamically by zones and availability\n\n- 🎨 **Custom Theme Support**  \n  Fully configurable design system (dark, light, rose gold, and custom themes)\n\n- 🔄 **Real-Time Data Sync**  \n  Seamless integration with Retool queries using controlled inputs/outputs\n\n- 💡 **Enhanced UX**  \n  Tooltips, hover states, and clear visual feedback for better usability\n\n---\n\n## ⚙️ Behavior\n\n- **User Mode**: Select and book seats with instant feedback  \n- **Edit Mode**: Modify layout and save changes  \n- Layout updates → `layoutSeatsOut`  \n- Selected seats → `selectedSeatIdsOut`  \n\n---\n\n## 📌 Notes\n\n- Component height must be set to **Auto** for proper rendering  \n- State-driven updates ensure reliable query execution  \n- Fully compatible with existing Retool workflows  \n\n---\n\n## 🎯 Purpose\n\nIndoorMap provides a **scalable, reusable solution** for building seat-based interfaces such as:\n\n- Booking systems  \n- Event layouts  \n- Workspace planning  \n- Interactive dashboards  \n\n---\n\n## ✅ Summary\n\nA clean, flexible, and production-ready component that brings **interactive indoor mapping directly into Retool apps**."
  },
  {
    id: "smart-audio-player",
    title: "Smart Audio Player",
    description: "Add Smart Audio Player Component",
    url: "https://github.com/tryretool/custom-component-gallery/pull/23",
    tags: ["Media","UI & Layout","Audio"],
    icon: "PlayCircle",
    imageUrl: "",
    githubBody: "## 🚀 Smart Audio Player Component\n\nThis PR adds a fully functional Smart Audio Player custom component for Retool.\n\n### ✨ Features\n- 🎵 Play / Pause / Next / Previous controls\n- 🔀 Shuffle mode with proper cycle logic (no repeat until all songs played)\n- 🔁 Repeat mode support\n- 📀 Autoplay next track after completion\n- 🎚 Volume control (vertical slider UI)\n- 📱 Responsive design (mini player + fullscreen player)\n- 📝 Marquee support for long song titles\n- 🎧 Playback memory (resume support)\n- ⚡ Smooth UI transitions\n\n### 🛠 Improvements\n- Fixed autoplay issues after song completion\n- Fixed play/pause glitch on manual song selection\n- Improved mobile UI and bottom bar layout\n- Added proper SVG icons for controls\n\n### 📦 Usage\nPass songs in the format:\n```js\n[\n  { title: \"Song Name\", soundURL: \"https://...\" }\n]"
  },
  {
    id: "d3-force-graph",
    title: "D3 Force Graph Component",
    description: "D3 Force Graph Component",
    url: "https://github.com/tryretool/custom-component-gallery/pull/19",
    tags: ["Charts & Maps","D3.js","Data Visualization"],
    icon: "Share2",
    imageUrl: "",
    githubBody: "### 🚀 Overview\n\nThis PR introduces a fully interactive D3-based force-directed graph component for visualising node-link data inside Retool.\n\n---\n\n### ✨ Features\n\n* **Force-directed graph rendering (D3)**\n* **Dynamic node sizing** based on usage (`numCalls`)\n* **Automatic grouping detection** (e.g. `model`, `category`, or inferred fields)\n* **Custom color mapping per group**\n* **Preset + custom themes** (with persistence via localStorage)\n* **Interactive UI:**\n\n  * Zoom in/out + reset controls\n  * Drag nodes\n  * Hover tooltips\n  * Click to inspect node details\n* **Side panel (InfoPanel):**\n\n  * Node metrics (latency, cost, calls, performance)\n  * Full metadata display\n  * Graph summary view\n* **Theme editor (ThemeBar):**\n\n  * Modify colors (background, links, labels, tooltip, etc.)\n  * Persist custom themes + group colors\n\n---\n\n### 🧠 Data Handling\n\n* Robust parsing + coercion of incoming `graphData`\n* Supports flexible schemas with automatic field detection\n* Safely handles invalid or missing data\n\n---\n\n### 🎨 Theming\n\nIncludes preset themes:\n\n* Arctic\n* Midnight\n* Rose Gold\n* Slate Pro\n\nPlus:\n\n* Fully customizable theme editor\n* Persistent theme + color settings via localStorage\n\n---\n\n### ⚙️ Integration\n\n* Built for Retool using `@tryretool/custom-component-support`\n* Uses `Retool.useStateObject` for dynamic data binding\n\n---\n\n### 📁 Main Component\n\n* `ForceGraphComponent` \n\n---\n\n### 🧪 Notes\n\n* Handles resize via `ResizeObserver`\n* Simulation stabilises automatically or after a timeout, fallback\n* Optimised to avoid unnecessary re-renders\n\n---\n\n### 📸 Future Improvements (optional)\n\n* Edge labels/weights display\n* Search & filtering\n* Clustering/grouping UI\n* Performance tuning for very large graphs\n\n---\n\n### ✅ Summary\n\nThis adds a production-ready, highly customizable graph visualisation component with strong UX, theming flexibility, and robust data handling."
  },
  {
    id: "react-whiteboard-calendar",
    title: "React Whiteboard Calendar",
    description: "Add React Whiteboard Calendar component for crew scheduling and multi-day event visualization",
    url: "https://github.com/tryretool/custom-component-gallery/pull/14",
    tags: ["UI & Layout","Scheduling","Calendar"],
    icon: "CalendarDays",
    imageUrl: "https://github.com/user-attachments/assets/6f91c668-55e7-42b4-a6fa-a58505295ea8",
    githubBody: "## Overview\n\nThis PR adds a React-based whiteboard calendar component for Retool, focused on crew scheduling and multi-day event visualization.\n\nThe component displays events across a timeline layout with crews as rows and dates as columns, making it easier to track assignments, overlaps, and availability at a glance.\n\n---\n\n## What’s included\n\n- Week, 2-week, and month views\n- Support for multi-day events spanning across date columns\n- Crew-based grouping (each row represents a crew/resource)\n- Automatic stacking of overlapping events using lane logic\n- Dynamic color assignment per crew for better visual distinction\n- Click handlers for both events and empty cells\n- Timezone-aware date handling\n\n---\n\n## Implementation details\n\n- Events are normalized into a start index and span relative to the visible week\n- A lane allocation approach is used to avoid visual overlap between events\n- Layout is built using a grid for structure and absolute positioning for precise event placement\n- Rendering is optimized to only process visible date ranges\n\n---\n\n## Use cases\n\n- Crew and workforce scheduling\n- Job or task planning across multiple days\n- Resource allocation dashboards\n- Operational timelines\n\n---\n\n## Notes\n\n- The component is designed to handle overlapping and long-running events without UI breakage\n- Works with dynamic data passed from Retool queries or state\n- No external UI libraries are used to keep it lightweight and customizable\n\n---\n\n## Preview\n\n<img width=\"1349\" height=\"393\" alt=\"Screen Shot 2026-03-31 at 4 09 16 PM\" src=\"https://github.com/user-attachments/assets/6f91c668-55e7-42b4-a6fa-a58505295ea8\" />\n\n---\n\n## Checklist\n\n- Component tested inside Retool\n- Verified layout across different view modes\n- Confirmed event rendering and stacking behavior"
  },
  {
    id: "social-mention-editor",
    title: "Social Mention Rich Text Editor",
    description: "Social Mention Rich Text Editor",
    url: "https://github.com/tryretool/custom-component-gallery/pull/24",
    tags: ["Editors","Collaboration","Rich Text"],
    icon: "FileSignature",
    imageUrl: "",
    githubBody: "# 📝 Social Mention Rich Text Editor\n\nRich text editor built with TipTap and Retool. Supports @mentions, formatting, images, and links with full state sync.\n\n---\n\n## Features\n\n* @mentions with search and keyboard navigation\n* Text formatting (bold, italic, underline, highlight)\n* Headings, lists, and blockquotes\n* Link insertion and image upload\n* Undo/redo support\n* Auto-resizing editor\n* Debounced updates for better performance\n* Works with the Retool state\n\n---\n\n## Users Data Format\n\n```json\n[\n  { \"label\": \"John Doe\", \"email\": \"john@test.com\" }\n]\n```\n\n* `label` (required): display name\n* `email` (optional): used for the handle\n* `id` (optional): unique value\n\n---\n\n## Notes\n\n* Type `@` to trigger mentions\n* Supports multi-word names\n* Best used with dynamic user data"
  },
  {
    id: "multi-file-viewer-uploader",
    title: "Smart File Viewer & Uploader",
    description: "Add Smart File Viewer component with auto-detection and multi-format support",
    url: "https://github.com/tryretool/custom-component-gallery/pull/20",
    tags: ["Data & Files","Uploads","Viewers"],
    icon: "Files",
    imageUrl: "https://github.com/user-attachments/assets/eebf560f-c2b0-4a72-a164-505a921a1f43",
    githubBody: "## Overview\n\nThis PR adds a new **Smart File Viewer** custom component for Retool that automatically detects and renders multiple file types without requiring manual configuration.\n\nIt supports files from:\n- Upload (local files)\n- URLs (including Google Drive / Docs / Sheets / Slides)\n- Base64 strings\n\n---\n\n## Features\n\n- Auto-detection of file types (PDF, Word, Excel, CSV, JSON, images, video, text)\n- Google Drive and Docs preview support via embedded URLs\n- PDF viewer with pagination and navigation controls\n- Word (.docx) rendering using mammoth (HTML conversion)\n- Excel and CSV parsing into table view\n- JSON structured preview\n- Text file viewer with formatted output\n- Image and video preview support\n- Download, print, and clear functionality\n- Responsive UI with auto height adjustment\n\n---\n\n## Technical Details\n\n- Built using React + TypeScript\n- Integrated with Retool using `@tryretool/custom-component-support`\n- Uses:\n  - `react-pdf` for PDF rendering\n  - `xlsx` for Excel parsing\n  - `mammoth` for Word document rendering\n- Implements Blob URL handling for consistent file rendering\n- Includes MIME detection + filename fallback for accurate file type detection\n- Handles cleanup of Blob URLs to prevent memory leaks\n\n---\n\n## Fixes & Improvements\n\n- Fixed incorrect MIME detection for `.docx` files (ZIP-based format issue)\n- Prevented PDF rendering errors for non-PDF files\n- Improved file type detection using filename fallback\n- Ensured proper handling of Base64 inputs\n- Stabilized rendering for multiple file formats\n\n---\n\n## Screenshots / Preview\n\n<img width=\"787\" height=\"363\" alt=\"Screen Shot 2026-04-06 at 5 24 12 PM\" src=\"https://github.com/user-attachments/assets/eebf560f-c2b0-4a72-a164-505a921a1f43\" />\n\n\n<img width=\"1386\" height=\"542\" alt=\"Screen Shot 2026-04-06 at 5 23 15 PM\" src=\"https://github.com/user-attachments/assets/34671417-16ce-46e1-b454-f8b0b59e43d1\" />\n\n---\n\n## Notes\n\nThis component is designed to be production-ready, extensible, and reusable across Retool apps for handling various file preview use cases.\n\nFuture enhancements can include:\n- Audio file support\n- Drag-and-drop upload\n- Improved Word rendering fidelity\n- Large dataset pagination\n"
  },
];
