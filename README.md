# cojt-chat

[筑波大学情報学群組み込み技術キャンパスOJT](http://www.cojt.or.jp/tkb/) ソフトウェアコースの課題（自由制作）のチャットアプリ

## Prereqisities

- Docker
- Node.js v10.15.3

## 使ったもの

- Docker
- Node.js
- Express
- socket.io
- MongoDB
- Vue
- Vuex
- Storybook
- Webpack
- ESLint
- Prettier

などなど...

## Setup

```
yarn install
docker-compose up
```

`localhost:8000`にWebpackでビルドされたフロントエンドが、`localhost:3000`にNode.jsのAPIサーバが立ち上がります。

## Storybook

VueコンポーネントはStorybookで管理しています。Storybookは次のコマンドで立ち上がります。

```
yarn storybook
```

## Format

ESLintおよびPrettierでコードフォーマットを管理します。リンターで検証および修正を行うにはそれぞれ

```
yarn lint
yarn lint:fix
```

を実行します。