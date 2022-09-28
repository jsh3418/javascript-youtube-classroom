import { clearLaterSeeVideos, paintSawVideos } from "../view/saveVideos.js";

export const handleSawVideoButton = () => {
  clearLaterSeeVideos();
  paintSawVideos();
};
