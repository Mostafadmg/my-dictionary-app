import { fetchWord } from "./api.js";
import { appState } from "./state.js";
import { renderEmptyState } from "./components/EmptyState.js";
import { renderErrorState } from "./components/ErrorState.js";
import { applyTheme, getStoredTheme } from "./utils/theme.js";
import { applyFont, getStoredFont, saveFont } from "./utils/font.js";
import { renderSearchBar } from "./components/SearchBar.js";
import { renderWordDefinition } from "./components/WordDefinition.js";
import { handleFontSelect, handleTheme } from "./utils/handlers.js";
import { renderLoadingState } from "./components/LoadingState.js";
import { setLoading } from "./state.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchContainer = document.getElementById("searchContainer");
  searchContainer.innerHTML = renderSearchBar();

  initializeTheme();
  initializeFont();
  initializeSearchBar();
  render();
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

  const fontSelector = document.querySelector(".header__fontSelector");

  if (fontMenu) {
    fontMenu.setAttribute("hidden", "");
  }

  fontTrigger?.addEventListener("click", () => {
    if (!fontMenu) return;
    const isHidden = fontMenu.hasAttribute("hidden");
    fontMenu.toggleAttribute("hidden", !isHidden);
    fontSelector?.setAttribute("data-open", isHidden ? "true" : "false");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!fontSelector?.contains(e.target)) {
      fontMenu?.setAttribute("hidden", "");
      fontSelector?.setAttribute("data-open", "false");
    }
  });

  const fontOptions = document.querySelectorAll(".header__fontOption");
  fontOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const font = option.dataset.font;
      handleFontSelect(font);
      fontMenu?.setAttribute("hidden", "");
      fontSelector?.setAttribute("data-open", "false");
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

  // Remove error state when user starts typing
  input.addEventListener("input", () => {
    form.classList.remove("form-error");
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const word = input.value.trim();

    if (word.length === 0) {
      return;
    }

    // Remove error state before searching
    form.classList.remove("form-error");

    render(); // Show current state (fetchWord will update to loading)
    await fetchWord(word); // Fetch word (sets loading, then success/error)
    render(); // Show final result

    // Add error border if word not found
    if (appState.status === "error") {
      form.classList.add("form-error");
    }
  });
}

function render() {
  const resultsContainer = document.getElementById("results");

  if (appState.status === "idle") {
    resultsContainer.innerHTML = renderEmptyState();
  } else if (appState.status === "loading") {
    resultsContainer.innerHTML = renderLoadingState();
  } else if (appState.status === "success") {
    resultsContainer.innerHTML = renderWordDefinition(appState.currentWord);
    initSynonyms();
  } else if (appState.status === "error") {
    resultsContainer.innerHTML = renderErrorState(appState.error);
  }
}

function initSynonyms() {
  // This function will be CALLED after results render
  const synonyms = document.querySelectorAll(".synonym-link");

  synonyms.forEach((s) => {
    s.addEventListener("click", async (e) => {
      // ✅ Fixed: async
      e.preventDefault();
      const synonym = s.textContent;
      render();
      const data = await fetchWord(synonym);
      render();
    });
  });
}
