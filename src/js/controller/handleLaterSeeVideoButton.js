import { clearLaterSeeVideos, paintLaterSeeVideos } from "../view/saveVideos.js";

export const handleLaterSeeVideoButton = () => {
  clearLaterSeeVideos();
  paintLaterSeeVideos();
};
