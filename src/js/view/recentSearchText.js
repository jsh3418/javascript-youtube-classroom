import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";

const recentSearchTextTemplate = (text) => {
  return `
    <span class="recent-search-text">${text}</span>
  `;
};

export const paintRecentSearchText = () => {
  const $recentSearchTextWrapper = $(".recent-search-text-wrapper");
  let template = "최근 검색어:";
  store.recentSearchText.forEach((text) => {
    template += recentSearchTextTemplate(text);
  });
  $recentSearchTextWrapper.innerHTML = template;
};
