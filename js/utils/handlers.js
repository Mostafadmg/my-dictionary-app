import { getStoredTheme, saveTheme, applyTheme } from "./theme.js";
import { getStoredFont, saveFont, applyFont } from "./font.js";
function handleTheme() {
  const currentTheme = getStoredTheme();
  const newTheme = currentTheme === "light" ? "dark" : "light";
  saveTheme(newTheme);
  applyTheme(newTheme);
}

function handleFontSelect(font) {
  saveFont(font);
  applyFont(font);

  const fontNames = {
    sans: "Sans Serif",
    serif: "Serif",
    mono: "Mono",
  };

  const fontLabel = document.getElementById("fontLabel");
  fontLabel.textContent = fontNames[font];

  const fontMenu = document.getElementById("fontMenu");
  fontMenu.setAttribute("hidden", "");
}

function synonymSearchHandler() {}

export { handleTheme, handleFontSelect };
