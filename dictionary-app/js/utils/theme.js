const THEME_KEY = "dictionary-theme";

function getStoredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  return stored || "light";
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}

export { getStoredTheme, saveTheme, applyTheme };
