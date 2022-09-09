import { LOAD_VIDEO_COUNT } from "../constants/constants.js";
import { $, $$ } from "../utils/DOM.js";

const $videoList = $(".video-list");

export const skeletonUI = `
<li class="video-item skeletonUI" data-video-id="">
  <div class="video-item__thumbnail skeleton">
    
  </div>
  <div class="video-item__title skeleton">ㅤ</div>
  <div class="video-item__channel-name skeleton">ㅤ</div>
  <div class="video-item__published-date skeleton">ㅤ</div>
  <button class="video-item__save-button button skeleton">ㅤ</button>
</li>`;

export const paintSkeletonUI = () => {
  $videoList.innerHTML += skeletonUI.repeat(LOAD_VIDEO_COUNT);
};

export const removeSkeletonUI = () => {
  const $$skeleton = $$(".skeletonUI");
  $$skeleton.forEach((element) => {
    element.classList.add("hide");
  });
};
