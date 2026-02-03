import { fetchWord } from "./api.js";
import { appState } from "./state.js";
import { renderEmptyState } from "./components/EmptyState.js";

document.addEventListener("DOMContentLoaded", () => {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = renderEmptyState();
});
