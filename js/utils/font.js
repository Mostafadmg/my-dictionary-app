const FONT_KEY = "dictionary-font";

const fontFamilies = {
  sans: "'Inter', sans-serif",
  serif: "'Lora', serif",
  mono: "'Inconsolata', monospace",
};

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

  // Apply specific font family to the font label
  const fontLabel = document.getElementById("fontLabel");
  if (fontLabel) {
    fontLabel.style.fontFamily = fontFamilies[font];
  }
}
export { getStoredFont, saveFont, applyFont };
