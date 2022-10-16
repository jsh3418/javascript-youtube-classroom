import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";
import { CURRENT_PAGE } from "../constants/constants.js";

export const saveVideoTemplate = (video) => {
  return `
    <li class="video-item" data-video-id=${video.dataVideoId}>
      <img loading="lazy" src=${video.src} alt="video-item-thumbnail" class="video-item__thumbnail">
      <h4 class="video-item__title">${video.title}</h4>
      <p class="video-item__channel-name">${video.channelName}</p>
      <p class="video-item__published-date">${video.date}</p>
      <button class="check-video-button video-button">✅</button>
      <button class="remove-video-button video-button">🗑</button>
      <button class="like-video-button video-button ${video.isLike ? "like-video" : ""}">👍</button>
    </li>
    `;
};

const $saveVideoList = $("#save-video-list");

const paintLaterSeeVideos = () => {
  $saveVideoList.innerHTML = store.saveVideos
    .filter((video) => video.isChecked === false)
    .map((video) => saveVideoTemplate(video))
    .join("");
};

const paintSawVideos = () => {
  $saveVideoList.innerHTML = store.saveVideos
    .filter((video) => video.isChecked === true)
    .map((video) => saveVideoTemplate(video))
    .join("");
};

const paintLikeVideos = () => {
  $saveVideoList.innerHTML = store.saveVideos
    .filter((video) => video.isLike === true)
    .map((video) => saveVideoTemplate(video))
    .join("");
};

export const paintSaveVideos = (currentPage) => {
  if (currentPage === CURRENT_PAGE.LATER_SEE_VIDEO) {
    paintLaterSeeVideos();

    return;
  }

  if (currentPage === CURRENT_PAGE.SAW_VIDEO) {
    paintSawVideos();

    return;
  }

  if (currentPage === CURRENT_PAGE.LIKE_VIDEO) {
    paintLikeVideos();

    return;
  }
};
