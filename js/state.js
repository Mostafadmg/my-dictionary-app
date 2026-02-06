let appState = {
  status: "idle",
  currentWord: null,
  error: null,
};

function setLoading() {
  appState.status = "loading";
  appState.currentWord = null;
  appState.error = null;
}

function setSuccess(wordData) {
  appState.status = "success";
  appState.currentWord = wordData;
  appState.error = null;
}

function setError(errorData) {
  appState.status = "error";
  appState.currentWord = null; // ← Clear old word data
  appState.error = errorData; // ← Store error information
}

export { appState, setError , setLoading , setSuccess}
