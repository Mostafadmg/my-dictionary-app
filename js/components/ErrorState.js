function renderErrorState(error) {
  return /* html */ `
    <div class="error-state">
      <div class="errorStateIconBox">
        <svg class="errorState-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <h1 class="errorState-title">${error.title}</h1>
      ${error.searchedWord ? `<p class="errorState-word">The word "<strong>${error.searchedWord}</strong>" is not in our dictionary.</p>` : ''}
      <p class="errorState-text">${error.message} ${error.resolution}</p>
    </div>
  `;
}

export { renderErrorState };
