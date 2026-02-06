function renderEmptyState() {
  return /* html */ `
    <div class="empty-state">
     <div class ="emptyStateIconBox">
       <svg  class="emptyState-icon" "http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground" data-replit-metadata="client/src/components/EmptyState.tsx:7:8" data-component-name="BookOpen"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
      </div>
          <h1 class="emptyState-title">Start Exploring</h1>
          <p class="emptyState-text">Search for any word to see its definition, phonetic transcription, and more. Try words like "keyboard", "serendipity", or "ephemeral".</p>
    </div>
  `;
}

export { renderEmptyState };
