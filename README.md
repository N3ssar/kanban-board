# 📋 Pro Kanban Board

A modern, scalable, and high-performance Kanban board application built to deliver a seamless task management experience. Inspired by industry tools like Trello and Jira, this project focuses on usability, accessibility, and clean architecture.

---

## 🚀 Live Demo

> *Coming soon...*

---

## ✨ Features

### 🎯 Core Functionality

* **Drag & Drop System**
  Smooth and intuitive task movement between columns with full reordering support.

* **Boards Management**
  Create, edit, and delete multiple boards to organize workflows efficiently.

* **Columns Control**
  Fully customizable status columns (e.g., Todo, In Progress, Done).

* **Task Management**

  * Create detailed task cards
  * Add subtasks (checklists)
  * Assign priority levels

---

### 🎨 User Experience

* **Theme Switching**
  Toggle between Light and Dark modes with persistent preferences.

* **Internationalization (i18n)**

  * English (LTR)
  * Arabic (RTL)

* **Local Storage Persistence**
  All data is محفوظ locally in the browser without needing a backend.

* **Accessible UI**
  Built with accessibility-first principles using Radix UI:

  * Keyboard navigation
  * Screen reader support

---

## 🛠️ Tech Stack

### ⚙️ Core

* React (with React Compiler)
* TypeScript
* Vite

### 🎨 Styling & UI

* Tailwind CSS v4
* Radix UI (Primitives)

### 🔀 Drag & Drop

* `@hello-pangea/dnd` *(or `dnd-kit`)*

### 🧪 Testing

* Vitest
* React Testing Library
* Jest DOM

### 🧹 Code Quality

* ESLint
* Strict TypeScript rules
* React-specific linting plugins

---

## 📂 Project Structure (Suggested)

```bash
src/
│
├── assets/        # Static files
├── components/    # Reusable UI components
│   ├── common/
│   └── features/
├── pages/         # App pages
├── hooks/         # Custom hooks
├── store/         # State management
├── utils/         # Helper functions
└── types/         # TypeScript types
```

---

## ⚡ Getting Started

### 📌 Prerequisites

* Node.js (v18+ recommended)

---

### 📥 Installation

```bash
git clone https://github.com/N3ssar/kanban-board.git
cd kanban-board
npm install
```

---

### ▶️ Run Development Server

```bash
npm run dev
```

App will be available at:

```
http://localhost:5173
```

---

## 🧪 Testing

Run tests in terminal:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

---

## 📌 Future Improvements

* Backend integration (API + database)
* User authentication
* Real-time collaboration
* Drag & drop animations enhancement
* Performance optimization for large boards

---

## 👨‍💻 Author

**Muhammad Nassar**
Frontend Developer

* GitHub: [https://github.com/N3ssar](https://github.com/N3ssar)

---

## ⭐ Support

If you like this project:

* Give it a ⭐ on GitHub
* Share it with others
* Or contribute 🚀

