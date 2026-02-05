export function renderSearchBar() {
  return /* html */ `
    <form class="search-form" id="searchForm">
      <input type="text" id="searchInput" placeholder="Search for any word..." />
      <button type="submit"><img src="../../assets/images/icon-search.svg" alt=""></button>
    </form>
  `;
}
