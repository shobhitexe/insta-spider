import { isLinkReel } from "../utils/extractReelID";
import { rotateCookies } from "../utils/rotateCookies";
import { userAgentPool } from "../utils/userAgentsPool";
// import { rotateProxies } from "../utils/rotateProxies";

import axios from "axios";

export async function downloadReel(link: string, cookie: string[]) {
  const id = isLinkReel(link);
  const url = `https://www.instagram.com/reel/${id}/?__a=1&__d=di`;

  const randomUserAgent = userAgentPool();

  const selectedCookie = rotateCookies(cookie);

  // const { agent } = rotateProxies();

  const headers = {
    "User-Agent": randomUserAgent,
    "Accept-Language": "en-US,en;q=0.9,ru;q=0.8",
    "Accept-Encoding": "gzip, deflate, br",
    Accept: "*/*",
    cookie: selectedCookie,
  };

  try {
    const videoData = await axios.get(url, {
      headers: headers,
    });
    // proxy: {
    //   protocol: "http",
    //   host: "",
    //   port: ,
    //   auth: {
    //     username: "",
    //     password: "",
    //   },
    // },

    const videoDataJson = await videoData.data;
    const { graphql, items } = videoDataJson;

    if (graphql?.shortcode_media?.video_url) {
      return graphql.shortcode_media.video_url;
    }

    if (items?.[0]?.video_versions?.[0]?.url) {
      return items[0].video_versions[0].url;
    }
  } catch (err) {
    return { error: `Error fetching video ${err}` };
  }
}
