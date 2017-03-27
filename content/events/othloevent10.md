+++
slug = "othloevent10-ateam"
event_tags = ["エイチーム", "WEB開発", "LT会", "勉強会"]
date = "2017-02-22"
title = "OthloEvent@エイチーム #10 WEB LT大会"
banner = "images/banners/events/othlo-event10.png"
+++

# OthloEvent@エイチーム #10

{{< image src="/images/events/2017-02-22/banner.png" alt="イベントバナー" >}}

こんにちは、OthloTech運営代表の[ぽこひで](https://twitter.com/hyde141421356)です。

2/22(水)に株式会社エイチームで社内Web開発勉強会のLT大会が行われました。本来はクローズドな勉強会でしたが、OthloTech枠を設けていただき、特別に学生も参加することができました。

イベントページ: https://othlotech.connpass.com/event/50407/

## タイムテープル

{{% table %}}

|時間|内容|
|:-----:|:-----|
|19:15|開場|
|19:30|開会のあいさつ|
|19:35|LT|
|20:15|LT終了, 懇親会準備|
|20:20|懇親会開始|
|21:20|結果発表 + 表彰|
|21:30|閉会のあいさつ|

{{% /table %}}

## オープニング

{{< image src="/images/events/2017-02-22/opening.jpg" alt="オープニング" >}}

"Ateam Developer's Dojo"とは通称"ADD"と呼ばれるエイチームのWeb系の社内勉強会のコミュニティです。オープニングでは、ADDとOthloTechの紹介がありました。

また、Macに貼るとエイチームロゴが光るステッカーとADDのステッカーをいただきました＼(^o^)／

OthloTechのステッカーも今回のイベントで初めて配りました（笑）まだ世の中に10枚ほどしか出回っていない超レアステッカーです！今後もイベントの参加者を限定に、配る予定ですので欲しい方は是非参加してくださいね😁

{{< image src="/images/events/2017-02-22/sticker.jpg" alt="ステッカー" >}}

## LT大会

今回のイベントは週に一度ADDが行っている勉強会の四半期に一度の締めの勉強会で社員LT枠6つ、参加学生からLT枠を1つ設けてLT大会が行われました。

1. React.jsについて
2. プログレッシブウェブアプリについて
3. HTTP/2導入してみた
4. ブラウザとフレンズになろう
5. Webサービス救急救命の技術
6. バッチ管理のすすめ
7. アラートを"オオカミ少年化"させないプロジェクト

{{< image src="/images/events/2017-02-22/viewer.jpg" alt="観覧者" >}}

ちなみに、学生と社員あわせて約70名もいて大盛況でした！

### React.jsについて

`React.js`とは何か、導入するメリットについてのお話でした。

最近、発表されたRails5.1(beta)でも、railsアプリ作成時にwebpackを簡単に導入できたり、jQueryデフォルトで使われなくなってるなど、JSと共存しやすい感じになってきたりして時代の流れを感じますね。

### プログレッシブウェブアプリについて

ウェブとアプリの両方の利点をもったプログレッシブウェブアプリについてのお話でした。

ウェブだけどアプリのようにオフラインでも使えたり、プッシュ通知を送れたり、ネイティブっぽい動作をするWebアプリを構築する技術ですね。

実装例には

- [Flipkart](https://www.flipkart.com/)
- [pokedex](https://www.pokedex.org/)
- [SUUMO](http://suumo.jp/)

などがあるそうです。

最後に、Webプッシュ通知を実演。

{{< image src="/images/events/2017-02-22/progressive.jpg" alt="プログレッシブウェブアプリ" >}}

このように、ウェブでもアプリのようにプッシュ通知を実現出来ていることがわかりますね。

記事を書いてる時に見つけたGoogleの提唱するプログレッシブウェブアプリについての記事があったので、よければ見てみてください。面白いです！

https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/?hl=ja

### HTTP/2導入してみた

国内最大級の自転車通販サイト「[cyma](https://cyclemarket.jp/)」を例にその問題点と解決策を話してくれました。

cymaは自転車の通販サイトで、スマホでもTOPページで大量の画像を表示していました。既存のHTTP/1.1だと画像をリクエストが返ってくるまで、次のリクエストが送れないので、ユーザの待機時間が長かったそうです。

{{< image src="/images/events/2017-02-22/http1.jpg" alt="HTTP/1.1" >}}

それに加えて、同時に通信するとサーバの負荷が大きくなってしまい、CM放映時にサイトが重くなるという問題もあったそうです。そこで、レスポンスを待たずにリクエストを送れるHTTP/2を導入して、ユーザ体験をすること改善することにしました。

{{< image src="/images/events/2017-02-22/http2.jpg" alt="HTTP/2" >}}

導入手順はNginxをバージョンアップして、設定ファイルを少し書き換えるだけらしいので、困っている方は是非試してみてわ！

当初の目的のCM放映時にサイトが重くなる問題も解消されたそうです＼(^o^)／

### ブラウザとフレンズになろう

はい。僕(この記事を書いているぽこひで)です。

{{< image src="/images/events/2017-02-22/browser.jpg" alt="ブラウザを仲良くなろう" >}}

ちょっと受けました。やっぱり時代の流れに乗るのは大事ですね。出落ちでしたが

普段使ってるブラウザ(Chrome, Firefox, Safari)の内部について話しました！

Webブラウザはどうやって、HTML, StyleSheetを解析して、UIを構築しているか。

その内部仕様を知ると、JS, CSSを書く上でパフォーマンス的に気をつけなければいけないことが見えてくるので面白いです！

また、後日ブログに書こうと思います！

### Webサービス救急救命の技術

{{< image src="/images/events/2017-02-22/cure.jpg" alt="プログレッシブウェブアプリ" >}}

社員は8時間しか働いてはいけないのに、サービスは24時間稼働している...万が一の障害とうまく付き合わなくてわ！というお話。

サービス救急救命の3本柱

- 検知
- 対応
- 障害を減らす

エラーが発生した時に通知する仕組みはもちろん必須ですが、それに素早く気づかなければ意味はないので、通知を受け取る受信デバイスを増やすことで対応するそうです。登壇者は常に6,7個のデバイスを持ち歩いているとのこと！

障害を検知しても対応できなくてはいけないので、SSHとインターネットだけは常備しましょう。
[Chromebook](https://www.google.co.jp/chrome/business/devices/features.html)はSSHクライアントとしては十分機能するのでオススメらしいです！

最後に一番大事なのは、心理的負担や健康を意識しよう！とのこと。
障害やエラーはないのが一番なのですが、サービスが稼働している以上、必ず起きます。

「変に気負わないようにしたり、過度な飲酒は控えましょう」

エラーが発生した時にそれを通知したのにもかかわらず、泥酔しすぎてSSHのログインパスが入力できなかったと登壇者が熱弁していました！

### バッチ管理のすすめ

{{< image src="/images/events/2017-02-22/rundeck.jpg" alt="バッチ処理" >}}

どのサーバでどのバッチが動いているのか把握できなかったり、異常終了しても気づかなかったりしていませんか？

[RUNDECK](http://rundeck.org/)でバッチ処理を一元管理しましょう！

DBやサーバーをロードバランサで冗長化しても、サーバが止まってしまっては、そこで動いていたバッチ処理は止まってしまいます。

[RUNDECK](http://rundeck.org/)ならロードバランサー経由でバッチを動かせるので大丈夫！さらに、RUNDECK自体も冗長化できるのでSPOFを解消できる！

### アラートを"オオカミ少年化"させないプロジェクト

[引越し侍](https://hikkoshizamurai.jp/)では、エラーをchatworkに通知することで気づきやすくなったけれど、大量に通知が来て
本当に重要なエラー通知が流れてしまう問題がある。

なので、エラー通知がオオカミ少年にならないようにこういうのを開発しよう！

- エラー通知のヤバさを段階に分ける
- 本日のエラーみたいにまとめる

#### 構成
- AWS Lambda & API Gateway でエラー通知
- Amazon DynamoDB で通知内容を保存
- AWS Lambda & CloudWatch で定期的にChatWorkに通知

実際に、AWSにエラーログを収集して、ChatWorkに通知する仕組みまでは出来たそうでした！
今後は、アラート内容のヤバさを判定する仕組みが必要なので、頑張っていくそうです！

## 懇親会！

LT大会の後は、懇親会!!

{{< image src="/images/events/2017-02-22/dinner1.jpg" alt="豪華な食事" >}}

みなさん楽しそうでした！

{{< image src="/images/events/2017-02-22/dinner2.jpg" alt="楽しそうな光景" >}}

## さいごに

懇親会で社員さんや学生さんと話していて、どちらも「楽しかった！」、「今後もやりたい！」と言ってくれていたのが印象的で嬉しかったです。
東海はやはりこういった学生と社会人の接点の場が少なかったり、そもそもこういった勉強会やイベントが少なかったりするので、
みんなで東海盛り上げていきましょう！！

{{< image src="/images/events/2017-02-22/gather.jpg" alt="集合写真" >}}