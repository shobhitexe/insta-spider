import { userAgents } from "../data/user-agents";

export function userAgentPool() {
  const randomIndex = Math.floor(Math.random() * userAgents.length);
  return userAgents[randomIndex];
}
