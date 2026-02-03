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
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Word not found");
    }

    const wordObject = data[0];
    setSuccess(wordObject);
  } catch (error) {
    setError({
      title: "No Definitions Found", // String literal
      message: error.message, // Variable that contains "Word not found"
      resolution: "Please try searching for another word.", // String literal
    });
  }
}

export { fetchWord };
