import { store } from "../model/model.js";

export const isEmptySearchResult = (searchResult) => {
  return searchResult.pageInfo.resultsPerPage === 0;
};

export const isScrollBottom = (element) => {
  return element.scrollHeight - element.scrollTop === element.clientHeight;
};

export const isSaveVideo = (id) => {
  return store.laterSeeVideos.some((video) => {
    return video.dataVideoId === id;
  });
};
