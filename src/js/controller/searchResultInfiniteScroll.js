import { store } from "../model/model.js";
import { paintSkeletonUI, removeSkeletonUI } from "../view/skeletonUI.js";
import { paintVideoList } from "../view/view.js";
import { searchYoutube } from "./handleSearchButton.js";
import { isScrollBottom } from "../validation/validation.js";

export const searchResultInfiniteScroll = async () => {
  if (isScrollBottom()) {
    paintSkeletonUI();
    const searchData = await searchYoutube(store.searchText);
    removeSkeletonUI();
    paintVideoList(searchData);
  }
};
