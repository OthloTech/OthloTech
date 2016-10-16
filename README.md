# OthloTech

[OthloTech](www.othlo.tech)の公式サイトの開発レポジトリです。

## セットアップ
[Hugo](https://gohugo.io/)というGO製の静的サイトジェネレーターを使用しています。

### レポジトリをクローンする

```
git clone https://github.com/OthloTech/OthloTech.git
cd OthloTech
```

### `Hugo` のダウンロード

`homebrew` 経由でダウンロードする場合は

```
brew doctor        # homebrew のチェック
brew update        # homebrew を最新版に
brew install hugo  # hugo をインストール
```

### サーバーの立ち上げ

```
hugo server -w  # 変更を監視して自動リロード
#=> http://localhost:1313 でアクセス
```

## 開発ドキュメント

### 記事の投稿方法
[記事の投稿FLOW](https://github.com/OthloTech/othlotech.github.io/blob/master/post.md) を参照してください。

### マークダウン
[マークダウン記法](https://github.com/OthloTech/othlotech.github.io/blob/master/markdown.md) を参照してください。

### 技術スタック

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

#### タスクランナー
現在は使用していない。
- [Gulp](http://gulpjs.com/)
