# 📊 Admin Dashboard – User Analytics System

A responsive admin dashboard built with **React**, **Redux Toolkit**, **RTK Query**, and **Tailwind CSS**, featuring user management (CRUD), secure authentication, and real-time data visualizations powered by **MockAPI**.

---

## 🌐 Live Demo

**🔗 [View Live](https://multibrand.onrender.com)**

---

## 🚀 Features

- 🔐 **Authentication System** (Login/Logout)
- 👥 **User Module**

  - Create, View, Edit, Delete users via modals
  - Validations using Zod + React Hook Form
  - Persistent backend data (MockAPI)

- 📊 **Dynamic Dashboard**

  - **Bar Chart**: Users by birth year
  - **Pie Chart**: Active vs. inactive users
  - **Donut Chart**: Email domain breakdown
  - **Line Chart**: User creation trend

- 🧭 **Sidebar Navigation** with active link highlights
- 🌗 **Dark Mode** toggle (with localStorage persistence)
- ⚙️ **Global State Management** via Redux Toolkit
- 🌐 **API Integration** via RTK Query (no Axios needed)
- 🧼 **Toast Notifications** using Sonner
- 🧱 **Component Library**: ShadCN UI (Radix-based, fully accessible)
- 💻 **Responsive Design** – mobile/tablet/desktop ready

---

## 🧰 Tech Stack

| Tech             | Purpose                           |
| ---------------- | --------------------------------- |
| React            | Component-based UI                |
| Vite             | Fast dev environment              |
| Redux Toolkit    | State management                  |
| RTK Query        | Data fetching + caching           |
| Tailwind CSS     | Utility-first styling             |
| React Router DOM | Client-side routing               |
| Zod              | Schema-based form validation      |
| React Hook Form  | Form handling                     |
| Recharts         | Data visualizations               |
| ShadCN/UI        | Headless, themeable UI components |
| Sonner           | Toast notifications               |
| MockAPI.io       | RESTful backend simulation        |

---

## 📂 Folder Structure

```
src/
├── components/         # Reusable UI components
│   ├── charts/         # All chart cards (bar, pie, line, donut)
│   └── users/          # User modals and table
├── auth/
│   └── login/          # Login form and auth slice
├── layouts/            # Protected layout (Navbar + Sidebar)
├── pages/              # Dashboard, Users, Login
├── redux/              # Store and RTK Query services
├── routes/             # Routing structure
├── lib/                # Zod schemas, constants
├── App.jsx
├── main.jsx
```

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Nasif28/Multibrand.git
cd multibrand

```

2. **Install dependencies:**

```bash
npm install
or
npm install --legacy-peer-deps
```

3. **Start development server:**

```bash
npm run dev
```

4. **Build for production:**

```bash
npm run build
```

---

## ✅ API Setup

Using [MockAPI](https://mockapi.io):

- Create a project and add a **`users`** resource
- Fields:

  - `name`: string
  - `email`: string
  - `phone`: string
  - `dob`: string (YYYY-MM-DD)
  - `status`: boolean (`true` or `false`)

- Replace `baseUrl` in `redux/api.js` with your MockAPI URL

---

## 🔐 Authentication

> 🧪 **Test Credentials**
> Email: `admin@admin.com`
> Password: `admin123`

- Uses Redux to persist token
- Protected routes (Dashboard/Users) redirect to login if not authenticated

---

## ✨ Charts Overview

| Chart Type  | Purpose                              |
| ----------- | ------------------------------------ |
| Bar Chart   | Number of users by **birth year**    |
| Pie Chart   | **Active vs. Inactive** status split |
| Donut Chart | Breakdown of **email domains**       |
| Line Chart  | Simulated user creation trend        |

---

## 🔐 Authentication

- Dummy login with hardcoded credentials or minimal validation
- Uses Redux to persist token
- Protected routes (Dashboard/Users) redirect if not logged in

---

## 🌗 Dark Mode

- Toggle from Navbar
- Respects system settings on first load
- Saves preference in `localStorage`

---

## 📢 Toast Notifications

Implemented using [Sonner](https://sonner.emilkowal.dev/):

- Success/failure on:

  - Create/Edit/Delete user
  - Login/logout

- Non-blocking, beautiful alerts

---

## 📌 Future Improvements

- Add pagination to users table
- Integrate real authentication API
- Add search/filter on users
- Upload avatars per user
- Export data (CSV, PDF)

---

## 📄 License

MIT © \Nasif Jihan

---