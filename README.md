#  KeenKeeper
> A professional **Personal Relationship Management** (PRM) dashboard built with Next.js and Tailwind CSS that helps users nurture meaningful connections, track interactions, and visualize their social health.

---

##  Live Demo
-> [https://keen-keeper-project.vercel.app/](https://ph-a-7-keen-keeper.vercel.app/)

---

##  Project Goal
The goal of **KeenKeeper** was to create a "personal shelf" for human connections that:
- Centralizes friendship tracking into a single, professional interface.
- Automates the monitoring of relationship health through "On Track" vs. "Need Attention" status badges.
- Provides an immediate visual history of social interactions through a dynamic, filterable timeline.
- Demonstrates advanced **Global State Management** and data persistence in a modern web application.

This project showcases how to build a data-driven **social CRM** using a centralized "brain" architecture via the React Context API.

---

## Key Features
-  **Smart Friends List:** Overview of all connections with real-time status updates (On Track, Almost Due, Overdue).
-  **Quick Check-In:** Log calls, texts, or video chats directly from a friend's profile with a single click.
-  **Dynamic Timeline:** A chronological activity log with custom icons and interaction filtering.
-  **Friendship Analytics:** Interactive Donut charts visualizing your communication distribution via Recharts.
-  **Global State:** Real-time updates across Home, Timeline, and Stats pages using the Context API.
-  **Persistent Data:** All interaction logs and friendship statuses survive page refreshes via `localStorage`.
-  **Intelligent Loading:** Custom-built server-side loading states to ensure a smooth professional experience.
-  **Cinematic UI:** A clean, high-resolution aesthetic optimized for all devices using DaisyUI.

---

##  How It Works (Technical Breakdown)
- Built with **Next.js 14+** using the App Router for optimized performance and routing.
- Implemented a **Centralized Context Provider** (`FriendProvider`) that wraps the application, serving as the single source of truth for all friendship data.
- Used **Custom Hooks** (`useFriends`) to allow any UI component to easily trigger interactions or read global data.
- Leveraged **Next.js Loading UI** (`loading.jsx`) to handle asynchronous data states gracefully during page transitions.
- Integrated **Recharts** for SVG-based data visualization that dynamically recalculates based on user activity logs.
- Styled with **Tailwind CSS** and **DaisyUI** to achieve a "corporate-cinematic" design language.
- Managed client-side persistence by syncing the React state with **browser localStorage** for zero data loss.

---

##  Tech Stack (With Justification)
| Technology | Why It Was Used |
|---|---|
| **Next.js (App Router)** | For modern routing, server components, and optimized asset loading. |
| **React Context API** | To avoid "prop drilling" and ensure data remains consistent across multiple pages. |
| **Tailwind CSS** | For a utility-first approach to building a custom, professional UI design. |
| **DaisyUI** | To implement accessible, pre-built components like avatars, badges, and professional buttons. |
| **Recharts** | A lightweight library to provide instant visual feedback on friendship health. |
| **React Toastify** | For non-intrusive, live feedback when interactions are successfully logged. |
| **LocalStorage** | To provide a "database-like" experience without needing a backend for the MVP. |

---

##  Problem-Solving Highlights
-  **State Synchronization:** Solved the challenge of instant UI updates (e.g., logging a "Call" on the Details page and seeing it immediately on the Stats chart) using Context.
-  **Hydration & Charting:** Resolved Next.js SSR mismatches with Recharts by implementing a `mounted` state check to ensure charts render only on the client.
-  **Performance Optimization:** Used `force-dynamic` rendering to ensure time-based interactions and loading states trigger correctly in production.
-  **Visual Consistency:** Created a cohesive design language using a specific dark-emerald palette (`#1d4239`) to match the "KeenKeeper" brand.
-  **Async Boundaries:** Utilized `loading.jsx` at the route level to prevent layout shifts while waiting for data.

---

##  Impact & Results
-  Delivered a functional PRM tool that improves social accountability and connection frequency.
-  Optimized for **high performance** with fast navigation and minimal re-renders.
-  Created a **scalable architecture** ready for backend and authentication integration.
-  Achieved **100% responsiveness**, ensuring users can log interactions on-the-go via mobile.
-  Established a **reliable data flow** where user interactions are never lost during session transitions.

---
