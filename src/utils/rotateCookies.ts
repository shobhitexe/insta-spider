export function rotateCookies(cookiesArr: string[]) {
  const randomIndex = Math.floor(Math.random() * cookiesArr.length);
  return cookiesArr[randomIndex];
}
