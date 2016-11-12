+++
slug = 'othlotech_dev_cycle'
title = 'OthloTechでの開発サイクル'
date = "2016-11-12T02:45:17+09:00"
categories = ['Web']
tags = ['GitHub', 'wwOthlo']
banner = 'images/banners/blogs/hugo.png'
weight = 997
+++

# OthloTechでの開発サイクル
こんにちは∩(ﾟ∀ﾟ∩) [@ぽこひで](https://twitter.com/hyde141421356)です。

今日は **OthloTech** ではどのように開発をしているかをこの[OthloTech公式サイト](http://www.othlo.tech)を例に簡単に紹介できたらと思います。
以下、OthloTech内での通称wwOthlo(ダブダブオスロ)と呼ぶことにします！

## 目次

- wwOthloの開発環境
- wwOthloの開発サイクル
- wwOthloの投稿フロー

### wwOthloの開発環境

OthloTechのサイトはサーバー側は持たずに[GitHub Pages](https://github.com/blog/2228-simpler-github-pages-publishing)というGitHubの提供するホスティングサービスを用いてるので、基本的に静的なページ(HTML, CSS, JavaScript)などで構成されています。

といっても、毎回ブログ記事やイベントレポートを投稿するたびにHTMLで一から書いていては身が持たないので、そこはGo製の静的ページジェネレータ[Hugo](http://themes.gohugo.io/)を用いてマークダウンから静的な記事を生成しています。

この辺の理由とかはめちゃくちゃ簡単にですが、前々回のブログ記事[Hugo + GithubPages で公式サイトを作り直したお話](http://www.othlo.tech/blogs/hugo+github-pages/)で触れているのでまだ読んでない方は見てみてくださいー！

他に、さすがに`CSS`で書くのはだるいので、`SCSS`で書いていて`SCSS-Lint`で静的なチェックは行っています。ただ、現在はテンプレートを参考にサイトを作ったこともあってまだまだ負債を抱えているので、今後解消していけたらな！って感じです。

一応、wwOthloは[オープンソース](https://github.com/OthloTech/OthloTech)で開発をしているので、もしバグを見つけたらバグレポートをするでも、`fork`してプルリクを出していただいてもどちらかしていただけると、超喜びます

**∩(〃･ω･〃)∩ ばんじゃーい**

### wwOthloの開発サイクル

上記述べた感じで開発をしていて、今度はその開発サイクルについて紹介しますー！

OthloTechではGitHub Flowを採用していて、以下のようなブランチ命名規則でブランチを切って直接masterにPRを出してレビューするといった流れを撮っています。

```
新機能：feature
バグ修正：fix
リファクタ系：clean or refactor
記事とか：post or blog or event
```

この命名規則は最近決まったのでこれからメンバー内でも意識していこうといった感じです。

レビューはPRを立てた人が適当にメンバーにメンションを飛ばして、レビューをしてもらう形を採用していて、そのレビュー担当者が`LGTM`ならマージをしています。

`master`ブランチとデプロイ用の`gh-pages`ブランチはGitHubの機能で保護をしていて、`master`ブランチはPR経由でしか変更ができないようにしていて、`gh-pages`は特定の人にしかpush権限を与えていません。これによって、デプロイミスを極力防ごうとしています。

### wwOthloの投稿フロー

wwOthloでは現状、月に一度のペースで行われるイベントの[イベントレポート](http://www.othlo.tech/events)と[ブログ記事](http://www.othlo.tech/blogs)の二つを定期的に更新しています。そこでの投稿のフローを紹介していきまーす！

Hugoという静的ページジェネレーターを使っているので、記事を一からHTMLで書くのではなく、マークダウン記法で記事を書いています。投稿や校正にもPR形式で行っていて、エンジニアやデザイナーなど関係なしにみんなPRを立てて、メンバーで校正という名のレビューをして、`master`ブランチにマージ -> デプロイといった流れで投稿まで行っています。

### さいごに

簡単にOthloTechでの開発サイクルをwwOthloを例に説明してみました。OthloTechでは他にも開発をしていたりしているので、興味の持った学生はゆるふわに[Twitter](https://twitter.com/othlotech)か[お問い合わせフォーム](http://www.othlo.tech/contact/)にて気軽に聞いてくださいー！

11/26(土)にYahoo!さんとコラボして、[Reactハンズオン](http://yj-meetup.connpass.com/event/44769/)を開くのでもしよければ来てくださいな(\*´∀`\*)

{{<image src="https://connpass-tokyo.s3.amazonaws.com/thumbs/a1/89/a189d96b09f4d4958b199aa08cd6c138.png" title="OthloTech x Yahoo Reactハンズオン">}}
