import { getStoredTheme, saveTheme, applyTheme } from "./theme.js";

function handleTheme() {
  const currentTheme = getStoredTheme();
  const newTheme = currentTheme === "light" ? "dark" : "light";
  saveTheme(newTheme);
  applyTheme(newTheme);
}

export { handleTheme };
