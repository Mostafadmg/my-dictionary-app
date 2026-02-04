const FONT_KEY = "dictionary-font";

function getStoredFont() {
  const stored = localStorage.getItem(FONT_KEY);
  return stored || "sans";
}

function saveFont(font) {
  localStorage.setItem(FONT_KEY, font);
}

function applyFont(font) {
  const root = document.documentElement;
  root.classList.remove("font-sans", "font-serif", "font-mono");
  root.classList.add(`font-${font}`);
}
export { getStoredFont, saveFont, applyFont };
