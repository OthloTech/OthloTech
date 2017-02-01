+++
slug = "othloevent07-yahoo"
title = "OthloEvent@ヤフー株式会社 #7"
date = "2016-11-26"
event_tags = ["ハンズオン", "ヤフー株式会社", "React.js"]
banner = "images/banners/events/othlo-event7.png"
+++

# OthloEvent@ヤフー株式会社 #7

{{< image src="/images/events/11-26/banner.png" alt="イベントバナー" >}}

はじめまして、[ライダー](https://twitter.com/mtmtkzm)です。

11月26日(土)にヤフー株式会社の名古屋オフィスにて、6代目JavaScript黒帯の穴井さんを招き、React.jsのハンズオンを開催しました！

[イベントページ](https://yj-meetup.connpass.com/event/44769/)

## タイムテーブル

{{% table %}}

|時間|内容|
|:----:|:-----|
|12:30|受付開始|
|13:00|会場案内|
|13:10|Introduction|
|13:20|React.jsハンズオン開始|
|17:00|React.jsハンズオン終了|
|17:00|懇親会|
|19:30|クロージング|

{{% /table %}}

### Introduction

{{< image src="/images/events/11-26/intro-yahoo.jpg" alt="Yahoo!Japan" >}}

Yahoo!Japanでは、秒間24,000アクセスをさばいているというお話にどよめく一同！（`24回/1ms` のアクセス。僕にはいまいちピンときませんでした。笑）

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">Yahooの秒間2万4千はやばい。この前のサイバーのアドテクの秒間2千すらさばくの大変だったのに(´･ω･`)<a href="https://twitter.com/hashtag/yjmu?src=hash">#yjmu</a> <a href="https://twitter.com/hashtag/OthloTech?src=hash">#OthloTech</a></p>&mdash; ヒデ (@hyde141421356) <a href="https://twitter.com/hyde141421356/status/802364083970273280">2016年11月26日</a></blockquote>



### React.jsハンズオン本編の開始！

講師は、JavaScript黒帯 穴井 宏幸さんです！
{{< image src="/images/events/11-26/anai.jpg" alt="JavaScript黒帯 穴井 宏幸さん" >}}

#### ハンズオン資料

このハンズオンにあたって、とーーっても濃い内容をGitHubにて公開してくださいましたので、なんらかの理由で参加できなかった方はこれでReact.jsに入門しましょう！

資料はこちら：https://github.com/pirosikick/react-hands-on-201611

資料もボリューミーで、とても丁寧でしたし、それに加え、メンターをしてくださった他のYahoo!の社員さんは4名と、充実したフルサポートな環境でReact.jsに挑むことができました！


#### React.jsとは？

React.js は、UI(MV*フレームワークでいうView)に特化した、Facebook製のJavaScriptライブラリです。  
HTMLをレンダリングする際、実際にDOMを構成せず**仮想DOM**を構成します。そのため、変更があった差分のみを再レンダリングすることができるようになり、表示パフォーマンスを向上させることができます。

また、React.jsではJSX呼ばれるXML風な記述をすることができ、非常に見通しがよくなります。

JSXでの実装部分を、資料から1行ずつ抜粋させていただくと、このような違いがあります！

```
// no JSX
React.createElement('h1', {}, "Hello, World!!"),
```

```
// JSX
<h1 className={className}>Hello, {name}!</h1>,
```

圧倒的に見た目がHTMLっぽく、見通しが良くなり、理解しやすいですよね！構造が複雑になればなるほど、JSXの良さが出てくるとおもわれます。  
React.jsもJSXの使用を推奨していますのでこの書き方を使ってハンズオンは進みます。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">hello, world!!やで<a href="https://twitter.com/hashtag/yjmu?src=hash">#yjmu</a> <a href="https://twitter.com/hashtag/OthloTech?src=hash">#OthloTech</a> <a href="https://t.co/4JaD5bL3bg">pic.twitter.com/4JaD5bL3bg</a></p>&mdash; よしかわ (@k16123kk) <a href="https://twitter.com/k16123kk/status/802384912653262849">2016年11月26日</a></blockquote>


#### もくもく作業！

{{< image src="/images/events/11-26/handson1.jpg" alt="この感じ、ハンズオンっぽい！" >}}

資料に沿って進む講義に参加者全員でコードを書いて理解を深めていきます。  
ただコードを書き写してモノを完成させるのではなく、あくまでReactを理解するという意味で、書いたコードに対する穴井さんの丁寧な説明に大満足のようです！

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">Yahooの黒帯の方の説明めっちゃ丁寧だし優しい喋り方で好感持てる。やはり技術力だけではダメですね。 <a href="https://twitter.com/hashtag/yjmu?src=hash">#yjmu</a> <a href="https://twitter.com/hashtag/OthloTech?src=hash">#OthloTech</a></p>&mdash; キンチキ (@garukujane) <a href="https://twitter.com/garukujane/status/802375281398812672">2016年11月26日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


{{< image src="/images/events/11-26/handson2.jpg" alt="この感じ、ハンズオンっぽい！" >}}

メンターの方のお力を、ここぞとばかりに頼り、周りの人からの応援も受け、支え合う姿が見られるハンズオンはとてもいいですね〜！終始温かい雰囲気でコーディングができました。

#### 作ったもの

今回は、ToDoアプリを作りました！定番ですね！

ToDoアプリには、Webアプリケーションを作る上で必須であり基本となる、要素の

- Create(生成)
- Read(読み出し)
- Update(更新)
- Delete(削除)

が揃っており、かつ、誰でも知っているということから、新しいライブラリや言語を始めるときには入門として作ることが、この界隈では慣習となっているのだと思われます！

また、講師の穴井さんは、様々なライブラリ・フレームワークで作られたToDoアプリだけをまとめたサイトも紹介してくださいました。  
http://todomvc.com/


### 懇親会

{{< image src="/images/events/11-26/foods.jpg" alt="懇親会豪華！" >}}

本編後は、とーーっても豪華なご飯とともに懇親会です！

静岡や岐阜..と、いつもより遠方から来てくださっている方が多くいて新鮮さがありましたね！

懇親会で繋がった人たちがまた何か新しいものをうみ出すことを期待しています。  
そういう意味で、OthloEventではイベント後必ず懇親会の時間をとっています。

（集合写真撮り忘れた....）

{{< image src="/images/events/11-26/member.jpg" alt="集合（している）写真" >}}


### クロージング...と見せかけて？

最後の最後に、残っていたメンバーだけで、オフィスをぐるっと一周、見学させていただくことができました！

それでは、最後になりましたが、  
参加してくださったみなさん、ヤフー株式会社のみなさん、ありがとうございました！！
