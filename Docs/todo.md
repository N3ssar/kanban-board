# 📋 Kanban Board Project - Todo List

## ⚙️ 0. Version Control (Git & GitHub)
- [ ] Initialize Git repository locally (`git init`).
- [ ] Create a new repository on GitHub and link it.
- [ ] Setup `.gitignore` file (exclude `node_modules`, `.env`).
- [ ] Create initial commit with the project skeleton.
- [ ] Use a Branching Strategy (e.g., create a new branch for each feature like `feature/ui-setup`).
- [ ] Regular commits with descriptive messages (e.g., `feat: added drag and drop logic`).
- [ ] Push code regularly to GitHub to ensure a continuous commit history.

## 🚀 1. Initialization & Setup
- [x] Initialize project with Vite + React.
- [x] Install and configure Tailwind CSS.
- [x] Install Vitest for testing.
- [ ] Setup Theme Management:
  - [ ] Add Dark/Light Mode switch.
- [ ] Setup Multi-language support (i18n):
  - [ ] Prepare Arabic translation files (RTL).
  - [ ] Prepare English translation files (LTR).

## 🎨 2. Design System & UI
- [ ] Build Design System (using Radix UI):
  - [ ] Define Colors & Typography.
  - [ ] Build base components (Buttons, TextFields).
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