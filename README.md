# Insta-Spider

Insta-Spider is a powerful npm library built with TypeScript that allows you to download Instagram Reels with ease. With its simple and intuitive interface, you can seamlessly integrate it into your Node.js projects and start scraping Instagram Reels effortlessly.

[![npm version](https://img.shields.io/npm/v/insta-spider.svg?style=flat-square)](https://www.npmjs.com/package/insta-spider)
[![npm downloads](https://img.shields.io/npm/dm/insta-spider.svg?style=flat-square)](https://www.npmjs.com/package/insta-spider)

## Features
- Download Instagram Reels programmatically.
- Built-in TypeScript support for enhanced development experience.
- Asynchronous and non-blocking operations for improved performance.
- Lightweight and easy to use.
- Cross-platform compatibility (Windows, macOS, Linux).

## Installation
```
npm install insta-spider
```

## Usage
To use Insta-Spider in your Node.js application, follow these steps:
```
import { instaSpider } from "insta-spider";

(async () => {
  const spider = await instaSpider("Cookies.....");

  const downloadUrl = await spider.downloadReel(
    "https://www.instagram.com/reel/xxxxxxxxxxx/"
  );

  console.log(downloadUrl);
})();

```

Please ensure that you replace 'https://www.instagram.com/reel/xxxxxxxxxxxxx/' with the actual URL of the Instagram Reel you intend to download.
Additionally, replace 'Cookies......' with your Instagram cookies. While the library can work without cookies, it is recommended to provide them for enhanced safety and reliability.

## API
### instaSpider(cookies: string)
The instaSpider function initializes the Insta-Spider module by providing Instagram cookies as a parameter.

### downloadReel(url: string)
The downloadReel function, available on the instaSpider object, downloads the Instagram Reel from the specified URL. It returns a promise that resolves to the file path of the downloaded reel.

## Contributing
Contributions are welcome! If you encounter any issues, have suggestions, or want to contribute new features or improvements, please create an issue or submit a pull request on [GitHub](https://github.com/shobhitexe/insta-spider).

Before submitting a pull request, make sure to:

- Write clear and concise commit messages.
- Add relevant tests for the new feature or fix.
- Update the documentation if necessary.

Give Insta-Spider a try and start effortlessly downloading Instagram Reels in your Node.js applications. If you find it useful, don't forget to star the project on [GitHub](https://github.com/shobhitexe/insta-spider). Feel free to reach out with any questions or feedback.

Happy coding! 🚀
