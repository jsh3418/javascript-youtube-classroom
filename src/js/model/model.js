import { RECENT_SEARCH_TEXT_MAX_LENGTH } from "../constants/constants.js";

export const store = {
  searchText: null,
  nextPageToken: null,
  laterSeeVideos: [],
  recentSearchText: [],
};

export const addSearchText = (element) => {
  store.searchText = element.value;
};

export const addNextPageToken = (data) => {
  store.nextPageToken = data.nextPageToken;
};

export const addSaveVideos = (element) => {
  store.laterSeeVideos.push({
    dataVideoId: element.dataset.videoId,
    src: element.querySelector("img").src,
    title: element.querySelector(".video-item__title").textContent,
    channelName: element.querySelector(".video-item__channel-name").textContent,
    date: element.querySelector(".video-item__published-date").textContent,
  });
};

export const addRecentSearchText = (element) => {
  store.recentSearchText.unshift(element.value);
  if (store.recentSearchText.length > RECENT_SEARCH_TEXT_MAX_LENGTH) {
    store.recentSearchText.pop();
  }
};
