import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
    