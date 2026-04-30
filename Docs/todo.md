# 📋 Kanban Board Project - Todo List

## ⚙️ 0. Version Control (Git & GitHub)

- [x] Initialize Git repository locally (`git init`).
- [x] Create a new repository on GitHub and link it.
- [x] Setup `.gitignore` file (exclude `node_modules`, `.env`).
- [x] Create initial commit with the project skeleton.
- [x] Use a Branching Strategy (e.g., create a new branch for each feature like `feature/ui-setup`).
- [x] Regular commits with descriptive messages (e.g., `feat: added drag and drop logic`).
- [x] Push code regularly to GitHub to ensure a continuous commit history.

## 🚀 1. Initialization & Setup

- [x] Initialize project with Vite + React.
- [x] Install and configure Tailwind CSS.
- [x] Install Vitest for testing.
- [x] Setup Theme Management:
  - [ ] Add Dark/Light Mode switch.
- [ ] Setup Multi-language support (i18n):
  - [ ] Prepare Arabic translation files (RTL).
  - [ ] Prepare English translation files (LTR).

## 🎨 2. Design System & UI

- [ ] Build Design System (using Radix UI):
  - [x] Define Colors & Typography.
  - [x] Build base components (Buttons, TextFields).
  - [ ] Build Dropdowns.
- [ ] Build Modals & Popups:
  - [ ] Create Delete Confirmation Modal.
  - [ ] Create Add/Edit Task Modal.

## 🏗️ 3. Layout & Board UI

- [ ] Build Main Page Layout:
  - [ ] Sidebar (to show the list of boards).
  - [ ] Header (to show board name and actions).
  - [ ] Main Workspace area.
- [ ] Build Board UI:
  - [ ] Columns Container.
  - [ ] Task Card component.
  - [ ] Empty State UI (for empty boards or columns).

## 💾 4. Data & State Management

- [ ] Design Mock Data Structure.
- [ ] Setup Initial App State.
- [ ] Setup LocalStorage to save data (Persistence).

## ⚙️ 5. Core Operations

- [ ] Board Operations:
  - [ ] Add a new board.
  - [ ] Edit board details.
  - [ ] Delete a board.
- [ ] Column Operations:
  - [ ] Add a new column.
  - [ ] Edit column name.
  - [ ] Delete a column.
- [ ] Task Operations:
  - [ ] Add a new task.
  - [ ] Edit task details.
  - [ ] Delete a task.
  - [ ] Manage Sub-tasks (Checklists).

## 🪄 6. Drag & Drop Logic

- [ ] Install a DnD library (like `@hello-pangea/dnd` or `dnd-kit`).
- [ ] Enable dragging and reordering tasks within the same column.
- [ ] Enable dragging tasks across different columns.
- [ ] (Optional) Enable dragging columns to reorder them.

## 🔍 7. Advanced Features

- [ ] Enable task search (by title).
- [ ] Enable task filtering (by tags/priority).

## Mock data

```tsx
const mockData = {
  boards: [
    {
      id: "board-1",
      name: "Platform Launch",
      columns: [
        {
          id: "col-1",
          title: "Todo",
          taskIds: ["task-1", "task-2"], // بنشيل هنا الـ IDs بس عشان الترتيب
        },
        {
          id: "col-2",
          title: "Doing",
          taskIds: ["task-3"],
        },
      ],
    },
  ],
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Build UI Header",
      description: "Setup the main navigation and logo",
      status: "Todo",
      subtasks: [
        { title: "Design logo", isCompleted: true },
        { title: "Implement dark mode switch", isCompleted: false },
      ],
    },
    "task-2": {
      id: "task-2",
      title: "Fix Sidebar bugs",
      description: "Sidebar is overlapping on mobile",
      status: "Todo",
      subtasks: [],
    },
    "task-3": {
      id: "task-3",
      title: "Context API setup",
      description: "Manage global state for boards",
      status: "Doing",
      subtasks: [],
    },
  },
};
```
