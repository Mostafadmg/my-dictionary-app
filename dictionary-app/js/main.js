import { fetchWord } from "./api.js";
import { appState } from "./state.js";
import { renderEmptyState } from "./components/EmptyState.js";

import { applyTheme, getStoredTheme } from "./utils/theme.js";
import { applyFont, getStoredFont, saveFont } from "./utils/font.js";
import { renderSearchBar } from "./components/SearchBar.js";

import { handleFontSelect, handleTheme } from "./utils/handlers.js";

document.addEventListener("DOMContentLoaded", () => {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = renderEmptyState();

  const searchContainer = document.getElementById("searchContainer");
  searchContainer.innerHTML = renderSearchBar();

  initializeTheme();
  initializeFont();
  initializeSearchBar();
});

function initializeFont() {
  const fontTrigger = document.getElementById("fontTrigger");
  const fontLabel = document.getElementById("fontLabel");
  const fontMenu = document.getElementById("fontMenu");
  const fontNames = {
    sans: "Sans Serif",
    serif: "Serif",
    mono: "Mono",
  };

  const font = getStoredFont();
  applyFont(font);
  fontLabel.textContent = fontNames[font];

  if (fontMenu) {
    fontMenu.setAttribute("hidden", "");
  }

  fontTrigger?.addEventListener("click", () => {
    if (!fontMenu) return;
    const isHidden = fontMenu.hasAttribute("hidden");
    fontMenu.toggleAttribute("hidden", !isHidden);
  });

  const fontOptions = document.querySelectorAll(".header__fontOption");
  fontOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const font = option.dataset.font;
      handleFontSelect(font);
    });
  });
}

function initializeTheme() {
  let savedTheme = getStoredTheme();
  applyTheme(savedTheme);

  const themeToggle = document.getElementById("toggle");

  themeToggle.checked = savedTheme === "dark";

  themeToggle.addEventListener("change", handleTheme);
}

function initializeSearchBar() {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const word = input.value.trim();

    if (word.length === 0) {
      return;
    }

    fetchWord(word);
  });
}
// 🎓 What does the SearchBar component need to do?
// Display - Show an input field and search button
// Capture - Get user's text input
// Validate - Make sure input isn't empty
// Submit - Call API when user searches
// Feedback - Show loading state, disable during search
