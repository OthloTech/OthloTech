# OthloTech

[OthloTechホームページ](www.othlo.tech)の開発リポジトリです。

[Hugo](https://gohugo.io/)というGO製の静的サイトジェネレーターを使用しています。

## Installation

1. リポジトリをクローンする

  ```
  git clone https://github.com/OthloTech/OthloTech.git
  cd OthloTech
  ```

1. `Hugo` のダウンロード

  `homebrew` 経由でダウンロードする場合は  

  ```
brew doctor        # homebrew のチェック
brew update        # homebrew を最新版に
brew install hugo  # hugo をインストール
```

1. 必要な物をインストール

  ```
bundle install  # install gem
npm install     # install node module
```

1. サーバーの立ち上げ

  ```
npm run watch   # scssファイルを監視
hugo server -w  # 変更を監視して自動リロード
#=> http://localhost:1313 でアクセス
#=> npm run start で代用可能
```

1. テスト

  ```
npm run test    # SCSS-lin
```


## Documentation

`./docs`の中に各ドキュメントがあります。
- [記事の投稿方法](https://github.com/OthloTech/OthloTech/blob/master/docs/new-post.md)
- [記事の執筆ルール](https://github.com/OthloTech/OthloTech/blob/master/docs/write-post.md)
- [マークダウン記法](https://github.com/OthloTech/OthloTech/blob/master/docs/markdown.md)

## 技術スタック

#### サーバーサイド

サーバは自前で用意せず、GitHubのホスティングサービスを使用
- [GitHub Pages](https://pages.github.com/)

#### フロントエンド

##### ジェネレーター
静的サイトジェネレーターにはHugoを使用。また、そのテーマとしてUniversal-Themeを使用。

- [Hugo](https://gohugo.io/)
- [Universal-Theme](https://github.com/devcows/hugo-universal-theme)

##### CSS
- [Bootstrap](http://getbootstrap.com/)

##### JS
- jQuery(2系)

##### タスクランナー
- [Gulp](http://gulpjs.com/)
