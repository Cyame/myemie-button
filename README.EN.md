# MyeMie-Button - Mye-Mie's Voice Button

![Version](https://img.shields.io/github/package-json/v/Cyame/myemie-button?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/Cyame/myemie-button?style=flat-square)
![Starts](https://img.shields.io/github/stars/Cyame/myemie-button?style=flat-square)

README: [中文](https://github.com/Cyame/myemie-button/blob/master/README.md) | [日本語](https://github.com/Cyame/myemie-button/blob/master/README.JA.md) | **English**

> Not released yet, still working on. The whole project will be permitted once it is launched.

## Contributing

If you don't know how to participate on GitHub, you can directly send voice clips or suggestions to [Developer Email](mailto:13626941473@qq.com) with title, content and your social ID(Twitter, Bilibili or so on). We will add your ID to the contributors list below.

Also you can submit [Issues](https://github.com/Cyame/myemie-button/issues) to upload audio clips.

If you can do some programming, just fork this repository and modify it. After you have done, just open a Pull Request. For detailed information, please read below.

### Add or modify voice

Voice is always in mp3 format with 128Kbps bitrate and stored in `static/voices/`. The corresponding URL is `/voices/`.

All voice meta data is stored in `assets/voices.json`. To add or modify these voices, you need to modify this file accordingly.

If you want to modify existed voice clips, I suggest deleting the origin file and name a new filename to avoid browers' cache problem.

### Participate in translation

Please help us translate to English and Japanese!

The language files for the main program are in three json files named the language name in `assets/locales/`.

The language files for voices are in `assets/voices.json`.

## Deploying a local development environment

This site is developed using Vue + NuxtJS + Vuetify.

To deploy a local development environment, first install the latest version of Node and Yarn. Then follow these steps:

1. Fork and clone the code.

2. Go to the code directory and run `yarn` to install dependencies.

3. Run `yarn dev` to start local developemnt server at `localhost:3000`. The local development server can immediately reflect the results of your modification.

4. To compile the files for deployment, run `yarn generate`, which will generate the `dist` directory. This site is completely static, you can directly deploy the entire `dist` directory.

## Contributors

This repository is forked from [aqua-button](https://github.com/lonelyion/aqua-button), thanks to the developers of the original project.

Fork-Development & Operation:

- [Cyame](https://github.com/Cyame)

Audio Editors:

- Bilibili [茶目](https://space.bilibili.com/2265912)
- Bilibili [小岩井Kana](https://space.bilibili.com/549256426)

Translation:

- Bilibili [小岩井Kana](https://space.bilibili.com/549256426)
- GitHub [茶目](https://github.com/Cyame)


Special Thanks to:

Those who contributed to this project on GitHub

[![GitHub Contributors](https://contributors-img.web.app/image?repo=Cyame/myemie-button)](https://github.com/Cyame/myemie-button/graphs/contributors)

## LICENCE

<!-- Audio: According to the [Hololive Secondary Creation Terms](https://www.hololive.tv/terms) (Japanese only). -->

Other parts: [GNU GPL-3.0](https://github.com/Cyame/myemie-button/blob/master/LICENSE)

This project is a work of enthusiasts and is not related to the official channel.

## 支持

This site is statically deployed using [GitHub Pages](https://pages.github.com/).
