function renderDefinition(definition) {
  const exampleHTML = definition.example
    ? `<p class="definition-example">"${definition.example}"</p>`
    : "";

  return /* html */ `
    <li class="meaning-li">
                <span class="dot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#8F19E8" />
                  </svg>
                </span>
                <div>
                  <p>${definition.definition}</p>
                  ${exampleHTML}
                </div>
              </li>

    `;
}

function renderSynonyms(synonyms) {
  if (!synonyms || synonyms.length === 0) return "";

  const synonymLinks = synonyms
    .map((syn) => `<a href="#" class="synonym-link">${syn}</a>`)
    .join(" ");

  return /* html */ `
    <div class="synonyms-container">
      <span class="synonyms-label">Synonyms</span>
      <div class="synonyms-list">${synonymLinks}</div>
    </div>
  `;
}

function renderMeaning(meaning) {
  const definitionArray = meaning.definitions;
  const definitionHTML = definitionArray
    .map((definition) => {
      return renderDefinition(definition);
    })
    .join("");

  const synonymsHTML = renderSynonyms(meaning.synonyms);

  return /* html */ `
 <div class="meaningContainer">
              <h2 class="meaningTitle">${meaning.partOfSpeech}</h2>
              <div class="line"></div>
            </div>

            <h3
              style="padding-top: 1rem; color: #757575; font-size: 1rem; font-weight: 400"
            >
              Meaning
            </h3>

            <ul>

            ${definitionHTML}
            </ul>

            ${synonymsHTML}
    `;
}

function renderSource(sourceUrls) {
  if (!sourceUrls || sourceUrls.length === 0) return "";

  const sourceLinks = sourceUrls
    .map(
      (url) => /* html */ `
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="sourceLink">
        ${url}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    `
    )
    .join("");

  return /* html */ `
    <div class="sourceContainer">
      <span class="sourceLabel">Source</span>
      ${sourceLinks}
    </div>
  `;
}

// Call the function AND log the result

function renderWordDefinition(wordData) {
  const pronunciationText =
    wordData.phonetics?.[0]?.text ||
    wordData.phonetic ||
    "pronounciation cannot be found";

  const audioUrl = wordData.phonetics?.[0]?.audio || "";

  const meaningHTML = wordData.meanings.map((meaning) => renderMeaning(meaning)).join("");

  const sourceHTML = renderSource(wordData.sourceUrls);

  return /* html */ `
 <section>
            <!-- Word + Pronunciation + Audio -->
            <div class="pronounciationContainer">
              <div class="pronounciationText">
                <h1 class="word">${wordData.word}</h1>
                <p class="pronounciation">

                ${pronunciationText}</p>
              </div>

              ${
                audioUrl
                  ? `
                  <audio id="wordAudio" src="${audioUrl}"></audio>
                  <button class="playBtn" onclick="document.getElementById('wordAudio').play()">
                <img src="assets/images/icon-play.svg" alt="Play pronunciation" />

              </button>`
                  : ""
              }

            </div>

           ${meaningHTML}

           ${sourceHTML}

          </section>


    `;
}

export {
  renderDefinition,
  renderMeaning,
  renderWordDefinition,
  renderSynonyms,
  renderSource,
};
