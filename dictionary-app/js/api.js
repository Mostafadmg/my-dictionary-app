// At the TOP of api.js (for example)
//Notice: We're NOT importing appState here.
//api.js only needs to UPDATE the state (using the functions)
//It doesn't need to READ the state directly

import {setLoading, setSuccess, setError } from "./state.js";

const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";


async function fetchWord(word) {
    setLoading()

    try {
 const data = await fetch(API_BASE_URL + word)

    } catch {


    }
}
