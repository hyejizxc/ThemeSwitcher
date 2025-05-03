# 🎨 Theme Switcher React App

This is a React application that allows users to switch between **light** and **dark** themes using a toggle button. The app leverages **React Context API** for global theme management and encapsulates theme logic in a **custom hook**. For an enhanced user experience, it also persists the selected theme using `localStorage`.

## 🛠️ Technologies Used

- **React** (with functional components)
- **Context API** – for managing global theme state
- **Custom Hooks** – for reusable theme logic
- **useState** and **useContext** – for React state and context access
- **CSS / Tailwind CSS** – for styling components
- **localStorage** (Bonus) – for persistent theme state across sessions

---

## 🧠 How It Works: Context API + Custom Hook

### `ThemeContext`
- Provides a global state (`theme`) and a `toggleTheme()` function.
- Wraps the main App component via `ThemeProvider`.

### `useTheme()` Custom Hook
- A simple hook to access the `ThemeContext`.
- Allows any component to read the theme and call `toggleTheme()`.

### Theme Persistence (Bonus)
- On initial load, the app checks `localStorage` for a saved theme.
- When toggled, the new theme is saved to `localStorage`.

---

## 💻 How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd theme-switcher

