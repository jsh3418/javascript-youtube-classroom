import { $ } from "../utils/DOM.js";
import { store } from "../model/model.js";

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

const $laterSeeVideoList = $("#later-see-video-list");

export const paintLaterSeeVideos = () => {
  store.laterSeeVideos.forEach((element) => {
    $laterSeeVideoList.innerHTML += saveVideoTemplate(element.src, element.title, element.channelName, element.date);
  });
};
