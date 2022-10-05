import { store } from "../model/model.js";
import { $ } from "../utils/DOM.js";
import { timeForToday } from "../utils/utils.js";

const $videoList = $(".video-list");

const searchResultVideoListTemplate = (videoId, imageUrl, title, channelName, publishedDate) => {
  return `
<li class="video-item" data-video-id=${videoId}>
  <img 
    src=${imageUrl}
    alt="video-item-thumbnail"
    class="video-item__thumbnail"
  />
  <h4 class="video-item__title">${title}</h4>
  <p class="video-item__channel-name">${channelName}</p>
  <p class="video-item__published-date">${publishedDate}</p>
  <button class="video-item__save-button button ${isSaveVideo(videoId) ? "hide" : ""}">⬇ 저장</button>
</li>`;
};

const isSaveVideo = (id) => {
  return store.saveVideos.some((video) => {
    return video.dataVideoId === id;
  });
};

const $searchResultNoResult = $(".search-result--no-result");

export const paintVideoList = (data) => {
  if (isEmptySearchResult(data)) {
    showElement($searchResultNoResult);
    return;
  }

  const items = data.items;
  items.forEach((item) => {
    const videoId = item.id.videoId;
    const imageUrl = item.snippet.thumbnails.high.url;
    const title = item.snippet.title;
    const channelName = item.snippet.channelTitle;
    const publishedDate = timeForToday(item.snippet.publishTime);

    $videoList.innerHTML += searchResultVideoListTemplate(videoId, imageUrl, title, channelName, publishedDate);
  });
};

const isEmptySearchResult = (searchResult) => {
  return searchResult.pageInfo.resultsPerPage === 0;
};

export const showElement = (element) => {
  element.classList.remove("hide");
};

export const hideElement = (element) => {
  element.classList.add("hide");
};

export const clearSearchResult = () => {
  $videoList.innerHTML = "";
};
