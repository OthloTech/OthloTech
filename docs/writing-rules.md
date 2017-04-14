# 記事の執筆ルール

ブログ、イベントレポートの記事全体で統制をとるために、以下の項目に添って記事を作成してください。  
(独断で作ったから意見ほしい！)

## 基本

- タグ・カテゴリ・タイトルなどは正式名称で記述する
  - 例: ~~Github~~ → GitHub
- 記事内では呼び方を統一する
  - 例: サーバー or サーバ
- タグは同種のものを複数付けない（できるだけ既存のタグ名を使う)
  - 例: 「ライトニングトーク」と「LT」
  - [ブログ記事のタグ一覧](http://www.othlo.tech/tags/), [イベント記事のタグ一覧](http://www.othlo.tech/event_tags/)
- 他のサイトを参考にしたら参照元を示す
- ショートコードがあるものは利用する
  - 参考: https://github.com/OthloTech/OthloTech/blob/master/docs/shortcodes.md

#### 見出しタグ

- 記事の頭にh1で副題的なのを入れる (タイトルは入れない)
- h1→h2→h3→h4と階層構造になることを意識する
  - 内容が少なければh1→h3でもOK
- 強調表現に見出しタグを使わない

#### イベントレポ

- **イベント翌日までには記事を公開する**
- タイトルはconnpassページのイベントタイトルと同じにする

## 画像ファイル

|項目|ルール|
|:---:|:---|
|容量|目安1ファイル100KB以下|
|サイズ|幅1200pxより大きい画像は1200pxにリサイズ|
|形式|イラストは`png` or `jpg`、写真は`jpg`|
|圧縮|[ImageOptim](https://imageoptim.com/mac)、[JPEGmini](http://www.jpegmini.com)、[TinyPNG](https://tinypng.com)などを使う|

----

以下は既にある記事を真似してもらえれば基本的にOK。

## 命名規則

|項目|ファイル名|
|:---:|:---|
|ブログ記事|`/content/blogs/{小文字英数字}.md`|
|ブログ画像|`/static/images/blogs/{年月日}/{ファイル名}.jpg` <br> 年月日は公開日(例: 20161103) <br> ファイル名は分かりやすい名前でハイフン繋ぎ|
|ブログバナー画像|`/static/banners/blogs/{ブログ記事のファイル名}.jpg`|
|イベントレポ|`/content/events/othloevent{イベント番号}.md`|
|イベントレポ画像|`/static/images/events/{年月日}/{ファイル名}.jpg` <br> 年月日はイベント日(例: 20161103) <br> ファイル名は分かりやすい名前でハイフン繋ぎ|
|イベントバナー画像|`/static/banners/events/{イベントレポのファイル名}.jpg`|

## 記事の設定

作成した`xxxx.md`ファイルの先頭に各種設定を記述します。

|項目|説明|
|:---:|:---|
|slug|URLになる部分（小文字英数字・ハイフン繋ぎ）|
|title|記事タイトル(xx字以下)|
|date|記事公開日 or イベント開催日|
|tags|目安5個以下|
|(tags_english)|タグの英語表記(未実装)|
|categories|1つのみ。イベントレポは指定しない。|
|banner|バナー画像のファイルパス|

ブログ記事の場合の例
```
+++
slug = "lightning-talks-technique"
title = "ライトニングトークを面白くするたった3つのテクニック"
date = "2016-11-03"
tags = ["LT", "ライトニングトーク", "プレゼンテーション", "PowerPoint", "Keynote", "資料作成"]
categories = ["プレゼン"]
banner = "images/banners/blogs/lightning_talk_banner.png"
+++
```
