import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";

const recentSearchTextTemplate = (text) => {
  return `
  <span>${text}</span>
  `;
};

export const paintRecentSearchText = () => {
  const $recentSearchText = $(".recent-search-text");
  let template = "";
  store.recentSearchText.forEach((text) => {
    template += recentSearchTextTemplate(text);
  });
  $recentSearchText.innerHTML = template;
};
