# 咩咩按钮站 / MYEMIE-BUTTON

![Version](https://img.shields.io/github/package-json/v/Cyame/myemie-button?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/Cyame/myemie-button?style=flat-square)
![Stars](https://img.shields.io/github/stars/Cyame/myemie-button?style=flat-square)

README: **中文** | [日本語](https://github.com/Cyame/myemie-button/blob/master/README.JA.md) | [English](https://github.com/Cyame/myemie-button/blob/master/README.EN.md)

> 么耶咩咩咩的粉丝向声音按钮主页

### 目前仍在维护中，未添加或修改原仓库内容。在发布前会取得授权，敬请期待！


相关链接:

- [么耶咩咩咩 的 Bilibili频道](https://space.bilibili.com/2080163552)

- [么耶咩咩咩 的 新浪微博](https://weibo.com/u/7601707550)

- [么耶咩咩咩 的 Bilibili直播间](https://live.bilibili.com/23033773)

- [Sakula小舞 的 Bilibili频道](https://space.bilibili.com/264161)

- [Sakula小舞 的 新浪微博](https://weibo.com/sakulamai)

- [兰笛Saku 的 Bilibili频道](https://space.bilibili.com/381439252)

- [兰笛Saku 的 新浪微博](https://weibo.com/u/7599721451)

- [鱼一YY 的 Bilibili频道](https://space.bilibili.com/1308967115)

- [鱼一YY 的 新浪微博](https://weibo.com/u/1763659747)

- [小豆芽爱雪璃 的 Bilibili频道](https://space.bilibili.com/323153)

- [小豆芽爱雪璃 的 新浪微博](https://weibo.com/u/6332902309)

- [夏南柯Nicole 的 Bilibili频道](https://space.bilibili.com/1689182622)

- [夏南柯Nicole 的 新浪微博](https://weibo.com/u/7600515328)

- [Bambi🦌 的 YouTube频道](https://www.youtube.com/c/BambiChannel)

- [Bambi🦌 的 Twitter主页](https://twitter.com/bambi_0812)

## 参与完善本项目

如果您不知道如何直接参与GitHub开发，可以直接将素材或意见建议发送到[开发者邮箱](mailto:marlonxu1121@qq.com)，带上标题、内容以及您的ID（Bilibili.UID、微博ID等均可），贡献者名单将会有您的名字。

当然您也可以发在 [Issues](https://github.com/Cyame/myemie-button/issues) ，同样也请带上标题和内容。

如果您可以进行开发，那么请Fork本项目进行修改，完成修改后在本项目中发起一个Pull Request，详细说明如下：

### 添加或修改音频

音频文件为mp3格式，码率128Kbps，储存在`static/voices/`目录下，对应的URL为`/voices/`。

所有的音频信息都存储在`assets/voices.json`中，要添加或修改音频，你同样需要修改这个文件中对应的内容。

如果需要对现有音频进行修改，建议将原音频文件删除，重新命名一个新文件，这样可以避免浏览器缓存问题。

### 参与翻译

请帮助进行日语和英语的翻译！

网页的翻译在`assets/locales/`中的以三个语音命名的json文件中，音频信息的翻译在`assets/voices.json`中对应的字段。

### 参与网页开发

本项目使用Vue + NuxtJS + Vuetify框架进行开发，要部署本地开发环境，请先安装最新版的Node与Yarn包管理器。

1. Fork 并 Clone 代码到本地
2. 进入代码目录，运行`yarn`以安装依赖项目
3. 开启本地开发服务器，运行`yarn dev`，这将会在`localhost:3000`启动，在代码修改过程中，本地开发服务器可以即时反映修改的结果。
4. 要编译可供部署的文件，请运行`yarn generate`，这将会在`dist`目录下生成可以直接部署到静态网站托管（GitHub Pages等）的文件。

## 贡献者

本仓库Fork来自于[aqua-button](https://github.com/lonelyion/aqua-button)，感谢原仓库开发者们的贡献。

---

本仓库维护&开发：

- GitHub [茶目](https://github.com/Cyame)

音频剪辑：

- Bilibili [茶目](https://space.bilibili.com/2265912)
- Bilibili [小岩井Kana](https://space.bilibili.com/549256426)

翻译：

- Bilibili [小岩井Kana](https://space.bilibili.com/549256426)
- GitHub [茶目](https://github.com/Cyame)


特别感谢：

以下在GitHub参与过项目的各位

[![GitHub Contributors](https://contributors-img.web.app/image?repo=Cyame/myemie-button)](https://github.com/Cyame/myemie-button/graphs/contributors)

## 协议

本仓库遵循[GPU GPL-3.0](https://github.com/Cyame/myemie-button/blob/master/LICENSE)协议。

本项目仅为爱好者作品，如有侵权或其他不宜内容，请通过提交[Issues](https://github.com/Cyame/myemie-button/issues)联系删除或调整。

## 支持

本仓库使用[GitHub Pages](https://pages.github.com/)进行静态部署。