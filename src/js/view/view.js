import { $ } from "../utils/DOM.js";
import { timeForToday } from "../utils/utils.js";
import { isEmptySearchResult } from "../validation/validation.js";

const $videoList = $(".video-list");

const searchResultVideoListTemplate = (imageUrl, title, channelName, publishedDate) => {
  return `
<li class="video-item" data-video-id="">
  <img 
    src=${imageUrl}
    alt="video-item-thumbnail"
    class="video-item__thumbnail"
  />
  <h4 class="video-item__title">${title}</h4>
  <p class="video-item__channel-name">${channelName}</p>
  <p class="video-item__published-date">${publishedDate}</p>
  <button class="video-item__save-button button">⬇ 저장</button>
</li>`;
};

export const paintVideoList = (data) => {
  if (isEmptySearchResult(data)) {
    showEmptySearchResult();
    return;
  }

  const items = data.items;
  items.forEach((item) => {
    const imageUrl = item.snippet.thumbnails.high.url;
    const title = item.snippet.title;
    const channelName = item.snippet.channelTitle;
    const publishedDate = timeForToday(item.snippet.publishTime);

    $videoList.innerHTML += searchResultVideoListTemplate(imageUrl, title, channelName, publishedDate);
  });
};

const $searchResultNoResult = $(".search-result--no-result");

const showEmptySearchResult = () => {
  $searchResultNoResult.classList.remove("hide");
};

export const hideEmptySearchResult = () => {
  $searchResultNoResult.classList.add("hide");
};
