import { $ } from "../utils/DOM.js";
import { addNextPageToken, store } from "../model/model.js";
import { paintSkeletonUI, removeSkeletonUI } from "../view/skeletonUI.js";
import { paintVideoList } from "../view/view.js";
import { searchYoutube } from "./handleSearchButton.js";

const $videoList = $(".video-list");

export const handleVideoListScroll = async () => {
  if (isScrollBottom($videoList)) {
    paintSkeletonUI();
    const searchData = await searchYoutube(store.searchText);
    removeSkeletonUI();
    paintVideoList(searchData);
    addNextPageToken(searchData);
  }
};

const isScrollBottom = (element) => {
  return element.scrollHeight - element.scrollTop === element.clientHeight;
};
