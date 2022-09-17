import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";
import { paintSkeletonUI, removeSkeletonUI } from "../view/skeletonUI.js";
import { paintVideoList } from "../view/view.js";
import { searchYoutube } from "./handleSearchButton.js";

const $videoList = $(".video-list");

export const searchResultInfiniteScroll = async () => {
  if ($videoList.scrollHeight - $videoList.scrollTop === $videoList.clientHeight) {
    paintSkeletonUI();
    const searchData = await searchYoutube(store.searchText);
    removeSkeletonUI();
    paintVideoList(searchData);
  }
};
