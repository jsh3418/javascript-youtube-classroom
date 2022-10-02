import { $ } from "../utils/DOM.js";

export const isEmptySaveVideoList = () => {
  const $saveVideoList = $("#save-video-list");
  return $saveVideoList.childElementCount === 0;
};
