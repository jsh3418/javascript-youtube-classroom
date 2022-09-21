import { $ } from "../utils/DOM.js";
import { addNextPageToken, store } from "../model/model.js";
import { paintSkeletonUI, removeSkeletonUI } from "../view/skeletonUI.js";
import { paintVideoList } from "../view/view.js";
import { searchYoutube } from "./handleSearchButton.js";
import { isScrollBottom } from "../validation/validation.js";

const $videoList = $(".video-list");

export const searchResultInfiniteScroll = async () => {
  if (isScrollBottom($videoList)) {
    paintSkeletonUI();
    const searchData = await searchYoutube(store.searchText);
    removeSkeletonUI();
    paintVideoList(searchData);
    addNextPageToken(searchData);
  }
};
