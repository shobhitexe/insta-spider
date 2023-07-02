import { downloadReel } from "../requests/fetchReel";

export function instaSpider(cookie: string) {
  return {
    downloadReel: (link: string) => downloadReel(link, cookie),
  };
}
