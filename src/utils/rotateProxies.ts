import { proxies } from "../data/proxies";
import { HttpsProxyAgent } from "https-proxy-agent";

export function rotateProxies() {
  const randomIndex = Math.floor(Math.random() * proxies.length);

  const { host, port } = proxies[randomIndex];

  const agent = new HttpsProxyAgent(`http://${host}:${port}`);

  return { agent };
}
