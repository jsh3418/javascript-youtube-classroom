import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";
import { CURRENT_PAGE } from "../constants/constants.js";

export const saveVideoTemplate = (dataVideoId, src, title, channelName, date) => {
  return `
    <li class="video-item" data-video-id=${dataVideoId}>
      <img src=${src} alt="video-item-thumbnail" class="video-item__thumbnail">
      <h4 class="video-item__title">${title}</h4>
      <p class="video-item__channel-name">${channelName}</p>
      <p class="video-item__published-date">${date}</p>
      <button class="check-video-button video-button">✅</button>
      <button class="remove-video-button video-button">🗑</button>
      <button class="like-video-button video-button">👍</button>
    </li>
    `;
};

const $saveVideoList = $("#save-video-list");

export const paintSaveVideos = (currentPage) => {
  if (currentPage === CURRENT_PAGE.LATER_SEE_VIDEO) {
    store.saveVideos.forEach((video) => {
      if (video.isChecked !== false) return;
      $saveVideoList.innerHTML += saveVideoTemplate(video.dataVideoId, video.src, video.title, video.channelName, video.date);
    });

    return;
  }

  if (currentPage === CURRENT_PAGE.SAW_VIDEO) {
    store.saveVideos.forEach((video) => {
      if (video.isChecked !== true) return;
      $saveVideoList.innerHTML += saveVideoTemplate(video.dataVideoId, video.src, video.title, video.channelName, video.date);
    });

    return;
  }
};

export const clearLaterSeeVideos = () => {
  $saveVideoList.innerHTML = "";
};
