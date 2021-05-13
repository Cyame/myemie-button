# ひつじちゃんボタン - 么耶咩咩咩のボイスボタン

![Version](https://img.shields.io/github/package-json/v/Cyame/myemie-button?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/Cyame/myemie-button?style=flat-square)
![Starts](https://img.shields.io/github/stars/Cyame/myemie-button?style=flat-square)

README: [中文](https://github.com/Cyame/myemie-button/blob/master/README.md) | **日本語** | [English](https://github.com/Cyame/myemie-button/blob/master/README.EN.md)

> このプロジェクトまだ建設中

## 計画中の機能

- 生放送や動画のカレンダーを表示
<!-- - フブキのスタンプ/ミーム -->
- YouTube/Bilibiliのデータを表示

## このプロジェクトへの貢献(コントリビュート)

GitHubの開発に直接参加する方法が分からない場合は、素材や意見を直接以下のメールアドレスに送信してください。([開発者メールへ](mailto:13626941473@qq.com))。またメールの中にタイトル、内容及びあなたのID（Bilibili、Twitterやその他）を記述してください。そうすることで私達は下のコントリビューターリストにあなたの名前を掲載することができます。

もしくは素材や意見をGitHubの[Issues](https://github.com/Cyame/myemie-button/issues) ページに送ることもできます。メールの場合と同じようにタイトルと内容を記述してください。

もしGitHubでの開発方法を知っている場合は、プロジェクトをフォークして変更してください。変更が完了したら、プルリクエストしてください。各項目の編集に関しては以下に記述されています。

### 音声の追加または修正

音声データはmp3のビットレート128Kbpsで統一し、`static/voices/`に保存してください。対応するURLは`/voices/`に入れてください。

すべての音声データのメタデータは`assets/voices.json`に追加または修正をしてください。

音声を変更する場合は変更後に変更前のファイルを削除してください。音声ファイルは，必ず過去を含め現在のファイル名と同じものであってはなりません。

### 翻訳

日本語と英語の翻訳が必要です！

ボタンなどのテキストの翻訳は `assets/locales/` 内に各言語に対応した3つの.jsonファイルがあります。

音声のタイトルテキストファイルは `aseets/voices.json` 内にあります。

## ローカルでのデプロイ

ローカル開発環境をデプロイする
このサイトはVue + NuxtJS + Vuetifyを使用して開発しています。

ローカル開発環境をデプロイするためには、まず最新版のNodeとYarnをインストールしてください。その後、以下の手順に従ってください。

 1. コードをforkしてクローンする。
 2. コードディレクトリに移動し、yarnを実行して依存関係をインストールする。
 3. `yarn dev`を実行し、`localhost:3000`でローカル開発サーバーを起動する。ローカル開発サーバーでは、変更した結果をすぐに反映させることが可能です。
 4. デプロイ用ファイルをコンパイルするためには、`yarn generae`を実行して`dist`ディレクトリを生成してください。このサイトは完全に静的なので、distディレクトリ全体を直接デプロイすることができます。

## コントリビューター


このリポジトリは[aqua-button](https://github.com/lonelyion/aqua-button)のフォークリポジトリです、元リポジトリの開発者の方々にお感謝をします。

二次開発と運営:

- GitHub [茶目](https://github.com/Cyame)

オーディオクリップ：

- Bilibili [茶目](https://space.bilibili.com/2265912)
- Bilibili [小岩井Kana](https://space.bilibili.com/549256426)

翻訳：

- Bilibili [小岩井Kana](https://space.bilibili.com/549256426)
- GitHub [茶目](https://github.com/Cyame)

そして、GitHubでこのリポジトリに参加した以下の方々

[![GitHub Contributors](https://contributors-img.web.app/image?repo=Cyame/myemie-button)](https://github.com/Cyame/myemie-button/graphs/contributors)

## LICENCE

プログラム： [GNU GPL-3.0](https://github.com/Cyame/myemie-button/blob/master/LICENSE)

<!-- 音声: [Hololive 二次创作条款](https://www.hololive.tv/terms) -->

このプロジェクトはファンによるもので、公式チャンネルと一切関係ありません

## サポート

GitHub公式がサポートするサービス[GitHub Pages](https://pages.github.com/)使用させていただきます。
