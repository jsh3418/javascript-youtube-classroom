export const LOAD_VIDEO_COUNT = 10;
export const BASE_URL = "https://www.googleapis.com/youtube/v3/search?";
export const LOCALSTORAGE_KEY = "saveVideos";
export const MAX_SAVE_VIDEO_COUNT = 100;
export const RECENT_SEARCH_TEXT_MAX_LENGTH = 3;
export const CURRENT_PAGE = {
  LATER_SEE_VIDEO: "laterSeeVideo",
  SAW_VIDEO: "sawVideo",
  LIKE_VIDEO: "likeVideo",
};
export const ERROR_MESSAGE = {
  MAX_SAVE_VIDEO: "최대 저장할 수 있는 영상 갯수에 도달했습니다. 더 이상 영상을 저장할 수 없습니다.",
};
export const SNACKBAR_MESSAGE = {
  CHANGE_SAW_VIDEO: "본 영상으로 처리하였습니다.",
  CHANGE_LATER_SEE_VIDEO: "볼 영상으로 처리하였습니다.",
  REMOVE_SAVE_VIDEO: "영상을 삭제하였습니다.",
  CHANGE_LIKE_VIDEO: "해당 영상을 좋아요 했습니다.",
  CHANGE_CANCEL_LIKE_VIDEO: "해당 영상의 좋아요를 취소했습니다.",
};
