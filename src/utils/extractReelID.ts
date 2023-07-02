export function isLinkReel(link: string): string {
  const isLink = link.startsWith("https://www.instagram.com/reel/");

  if (isLink) {
    const split = link.split("/");
    return split[4];
  } else {
    return link;
  }
}
