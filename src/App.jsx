import Users from "./Users.jsx";
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // اضافه یا حذف کلاس به <body> واقعی مرورگر
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="body">
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "حالت روشن" : "حالت تیره"}
      </button>
      <Users />
    </div>
  );
}
