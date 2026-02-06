// At the TOP of api.js (for example)
//Notice: We're NOT importing appState here.
//api.js only needs to UPDATE the state (using the functions)
//It doesn't need to READ the state directly

import { setLoading, setSuccess, setError } from "./state.js";

const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function fetchWord(word) {
  setLoading();

  try {
    const response = await fetch(API_BASE_URL + word);

    // Check if response is ok BEFORE parsing JSON
    if (!response.ok) {
      const errorData = await response.json();
      setError({
        title: errorData.title || "No Definitions Found",
        message: errorData.message || "Word not found",
        resolution: errorData.resolution || "Please try searching for another word.",
        searchedWord: word,  // ← ADD THIS! Store the word that was searched
      });
      return; // Exit early
    }

    const data = await response.json();
    const wordObject = data[0];
    setSuccess(wordObject);
  } catch (error) {
    setError({
      title: "No Definitions Found",
      message: "Something went wrong. Please try again.",
      resolution: "Check your internet connection or try a different word.",
      searchedWord: word,  // ← ADD THIS TOO!
    });
  }
}

export { fetchWord };
