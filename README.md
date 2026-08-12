# 🚀 Nuxt 3 + Prisma 7 + SQLite (Full-Stack CRUD)

A clean, modern, full-stack Task & User Management application built with **Nuxt 3**, **Prisma 7**, and **SQLite**.

![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7.x-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

---

## ✨ Features

- 👤 **User Management:** Create and delete users.
- 📋 **Todo Management:** Assign tasks to specific users, toggle completed status, and delete tasks.
- 🔗 **Relational Data:** One-to-Many relationship between `User` and `Todo`.
- 💥 **Cascading Deletes:** Deleting a user automatically purges all associated tasks via database cascade (`onDelete: Cascade`).
- ⚡ **Prisma 7 Driver Adapter:** Integrated with `@prisma/adapter-better-sqlite3` and `prisma.config.ts`.
- 🎯 **Event-Driven UI:** Reactive UI updates powered by Vue 3 `$fetch` and Nuxt `useFetch` event triggers.

---

## 🛠️ Tech Stack

- **Framework:** [Nuxt 3](https://nuxt.com/) (SSR & Server Engine)
- **ORM:** [Prisma 7](https://www.prisma.io/)
- **Database:** SQLite
- **Styling:** Custom CSS with dark mode elements

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mahdi-Akbari93/nuxt-prisma-practice.git
   cd nuxt-prisma-practice
   ```



2. **Install dependencies:**
    ```bash
     npm install 
    ```

3. **Set up the Database:**
    **Push the Prisma schema to generate the local SQLite database (dev.db):**
    ```bash
     npx prisma db push 
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```


**Open http://localhost:3000 in your browser to see the app!**