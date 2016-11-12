# 記事の執筆ルール

ブログ、イベントレポートの記事全体で統制をとるために、以下の項目に添って記事を作成してください。

## 命名規則
基本的には既にある記事を真似してもらえればOK。

|項目|ファイル名|
|:---:|:---|
|ブログ記事|`/content/blogs/{小文字英数字}.md`|
|ブログ画像|`/static/images/blogs/{年月日}/{ファイル名}.jpg` <br> 年月日は公開日(例: 20161103) <br> ファイル名は分かりやすい名前でハイフン繋ぎ|
|ブログバナー画像|`/static/banners/blogs/{ブログ記事のファイル名}.jpg`|
|イベントレポ|`/content/events/othloevent{イベント番号}.md`|
|イベントレポ画像|`/static/images/events/{年月日}/{ファイル名}.jpg` <br> 年月日はイベント日(例: 20161103) <br> ファイル名は分かりやすい名前でハイフン繋ぎ|

## 記事の設定

作成した`xxxx.md`ファイルの先頭に各種設定を記述します。

|項目|説明|該当|
|:---:|:---|:---:|
|slug|URLになる部分（小文字英数字・ハイフン繋ぎ）|
|title|記事タイトル(xx字以下)|
|date|記事公開日(年月日のみ?)|
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

## 画像ファイル


## その他

