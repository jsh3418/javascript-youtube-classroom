import { $ } from "../utils/DOM.js";

const $videoList = $(".video-list");

const searchResultVideoListTemplate = (imageUrl, title, channelName, publishedDate) => {
  return `
<li class="video-item" data-video-id="">
  <img 
    src=${imageUrl}
    alt="video-item-thumbnail"
    class="video-item__thumbnail"
  />
  <h4 class="video-item__title">${title}</h4>
  <p class="video-item__channel-name">${channelName}</p>
  <p class="video-item__published-date">${publishedDate}</p>
  <button class="video-item__save-button button">⬇ 저장</button>
</li>`;
};

export const paintVideoList = (data) => {
  const items = data.items;

  items.forEach((item) => {
    const imageUrl = item.snippet.thumbnails.high.url;
    const title = item.snippet.title;
    const channelName = item.snippet.channelTitle;
    const publishedDate = timeForToday(item.snippet.publishTime);

    $videoList.innerHTML += searchResultVideoListTemplate(imageUrl, title, channelName, publishedDate);
  });
};

const timeForToday = (value) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
};
