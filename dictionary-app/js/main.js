import { fetchWord } from "./api.js";
import { appState } from "./state.js";
import { renderEmptyState } from "./components/EmptyState.js";

import { applyTheme, getStoredTheme } from "./utils/theme.js";
import { applyFont, getStoredFont, saveFont } from "./utils/font.js";

import { handleTheme } from "./utils/handlers.js";

document.addEventListener("DOMContentLoaded", () => {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = renderEmptyState();
  initializeTheme();
});

function initializeTheme() {
  let savedTheme = getStoredTheme();
  applyTheme(savedTheme);

  const themeToggle = document.getElementById("toggle");

  themeToggle.checked = savedTheme === "dark";

  themeToggle.addEventListener("change", handleTheme);
}

const fontMenu = document.getElementById("fontMenu");
const fontTrigger = document.getElementById("fontTrigger");

if (fontMenu) {
  fontMenu.setAttribute("hidden", "");
}

fontTrigger?.addEventListener("click", () => {
  if (!fontMenu) return;
  const isHidden = fontMenu.hasAttribute("hidden");
  fontMenu.toggleAttribute("hidden", !isHidden);
});
