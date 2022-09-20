import { store } from "../model/model.js";
import { $$ } from "../utils/DOM.js";
import { hideElement } from "./view.js";

export const saveVideoTemplate = (src, title, channelName, date) => {
  return `
    <li class="video-item">
      <img src=${src} alt="video-item-thumbnail" class="video-item__thumbnail">
      <h4 class="video-item__title">${title}</h4>
      <p class="video-item__channel-name">${channelName}</p>
      <p class="video-item__published-date">${date}</p>
    </li>
    `;
};

export const hideSaveButton = () => {
  const $$videoItem = $$(".video-item");
  store.saveVideos.forEach((video) => {
    $$videoItem.forEach((item) => {
      if (video.dataVideoId === item.dataset.videoId) {
        hideElement(item.querySelector("button"));
      }
    });
  });
};
