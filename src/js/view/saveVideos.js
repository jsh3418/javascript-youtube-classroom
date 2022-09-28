import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";

export const saveVideoTemplate = (dataVideoId, src, title, channelName, date) => {
  return `
    <li class="video-item" data-video-id=${dataVideoId}>
      <img src=${src} alt="video-item-thumbnail" class="video-item__thumbnail">
      <h4 class="video-item__title">${title}</h4>
      <p class="video-item__channel-name">${channelName}</p>
      <p class="video-item__published-date">${date}</p>
      <button class="check-video-button video-button">✅</button>
      <button class="remove-video-button video-button">🗑</button>
    </li>
    `;
};

const $laterSeeVideoList = $("#later-see-video-list");

export const paintSaveVideos = (currentPage) => {
  if (currentPage === "laterSeeVideo") {
    store.laterSeeVideos.forEach((element) => {
      if (element.isChecked !== false) return;
      $laterSeeVideoList.innerHTML += saveVideoTemplate(element.dataVideoId, element.src, element.title, element.channelName, element.date);
    });

    return;
  }

  if (currentPage === "sawVideo") {
    store.laterSeeVideos.forEach((element) => {
      if (element.isChecked !== true) return;
      $laterSeeVideoList.innerHTML += saveVideoTemplate(element.dataVideoId, element.src, element.title, element.channelName, element.date);
    });

    return;
  }
};

export const clearLaterSeeVideos = () => {
  $laterSeeVideoList.innerHTML = "";
};
