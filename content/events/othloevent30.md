+++
slug = "othloevent30"
event_tags = ["ピクシブ","LT"]
date = "2018-05-27"
title = "【学生限定】画像配信勉強会@ピクシブ OthloEvent#30"
banner = "/images/banners/events/othlo-event30.png"
+++

{{< image src="/images/banners/events/othlo-event30.png" alt="イベントバナー" >}}

[しゅーぞー](https://twitter.com/shuzo_create)です。  
5/27に開催された[【学生限定】画像配信勉強会@ピクシブ OthloEvent#30](https://othlotech.connpass.com/event/85753/)のイベントレポートです。

今回のイベントはピクシブ株式会社さんにご協力いただき、画像配信サービスのバックグラウンドを支える技術[ImageFlux](https://www.sakura.ad.jp/services/imageflux/)についての勉強会を開催しました。

## タイムスケジュール
|時間|内容|
|:-----:|:-----|
|14:45|開場|
|15:00|イベント開始|
|15:15|会社説明(ピクシブ様)|
|15:30|ImageFluxについての講演|
|16:30|ImageFluxのハンズオン|
|17:00|懇親会 + LT|
|18:30|クロージング＆撤収|

## オープニング

### ピクシブ株式会社
ピクシブでは「社内のコミュニケーション」や「社員の成長」などを重視していて、その一環としてユニークな取り組みを多数実施しているそうです。  
・ 部屋を一周するようなユニークなデザインの机でチーム全員が同じ机で作業  
・ 社内勉強会の実施や、外部イベントでの登壇  
・ 交換留学として他社と期間限定でエンジニアのトレード  ...etc

また、特定の企画部が存在せず、エンジニア一人ひとりの裁量が大きく、ボトムアップ型で事業アイデアが生まれて行くそうです。

#### サマーインターンについて
ピクシブでは[サマーインターン](https://recruit.pixiv.net/intern/tech/)を日程8月22日（水）～ 8月28日（火）と9月05日（水）～ 9月11日（火）の２つの期間で募集しているそうです。コースや期間が合わない場合は要相談のもと柔軟に対応してくださるとのことです！

<!-- ツイート埋め込み -->
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">ピクシブでは通常のインターン期間以外も、受け入れのご相談可能です！<br>また、基本どのサービスチームでも受け入れは調整可能なので、私までご連絡下さい！ImageFluxも勿論相談可能です！<br>私のtwitter宛でDM飛ばして下さい～！<br>（メテオさん、教えてくれてありがとうございます） <a href="https://t.co/vaAJ1ITTuQ">https://t.co/vaAJ1ITTuQ</a></p>&mdash; kamikoは2018年もピクシブの人事 (@kamiko_jinji) <a href="https://twitter.com/kamiko_jinji/status/1001359071356764160?ref_src=twsrc%5Etfw">2018年5月29日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## ImageFluxについて
[IamgeFlux](https://www.sakura.ad.jp/services/imageflux/)はピクシブ株式会社とさくらインターネット株式会社によって共同開発と運営販売されている、画像圧縮&加工サービスです。  
主に使用されているサービスとして、ピクシブが提供しているサービスはもちろんのこと、[メルカリ](https://www.mercari.com/jp/)や[STORES](https://stores.jp/)などが挙げられます。

画像配信の裏では、  
・ 画像の表示速度を一定にするために、一度オリジナル画像から  1200px*1200pxの「マスタ画像」を生成し、そこからサムネイルの生成  
・ HDDより高速なSSD(sata)によるキャッシュストレージ  
・ より効率的なファイル分散を実現するために、ハッシュテーブルの再配置が最小限に済む、コンシステントハッシュ法の採用  
・ ユーザー保護のため、DBに入れる前にEXIFのGPS情報を削除し、JPGに変換  
・ 高速なアセンブラ（に近いC）のリソースを活かすためにcgoの採用  

等の数多くの技術的な工夫がなされています。

### ハンズオン

実際にImageFluxで画像圧縮&加工を体験してみます。
ImageFluxは左上から順にピクセルを読み込んでいくの画像の反転、回転には弱く時間がかかるとのこと。

また、実際のGoのソースも見せていただきました。みんな、ここぞとばかりに食い入るように見ています...。
<!-- ツイート埋め込み -->
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">ソースコード公開...!! <a href="https://t.co/5CwCHEX2sJ">pic.twitter.com/5CwCHEX2sJ</a></p>&mdash; OthloTech (@OthloTech) <a href="https://twitter.com/OthloTech/status/1000641133465161729?ref_src=twsrc%5Etfw">2018年5月27日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## 懇親会 + LT
お酒とpizzaとSushiを手に（というか口に）LTを聞く、ゆるいスタイル。
<!-- ツイート埋め込み -->
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">かんぱーい🍻🍻<a href="https://twitter.com/hashtag/OthloTech?src=hash&amp;ref_src=twsrc%5Etfw">#OthloTech</a> <a href="https://twitter.com/hashtag/pixiv_ngy?src=hash&amp;ref_src=twsrc%5Etfw">#pixiv_ngy</a> <a href="https://t.co/cCKGWmdJSd">pic.twitter.com/cCKGWmdJSd</a></p>&mdash; OthloTech (@OthloTech) <a href="https://twitter.com/OthloTech/status/1000652135317495808?ref_src=twsrc%5Etfw">2018年5月27日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">hiwwさんの「リソースの無駄遣いをしてみた」<a href="https://twitter.com/hashtag/OthloTech?src=hash&amp;ref_src=twsrc%5Etfw">#OthloTech</a> <a href="https://twitter.com/hashtag/pixiv_ngy?src=hash&amp;ref_src=twsrc%5Etfw">#pixiv_ngy</a> <a href="https://t.co/22VIShNzSM">pic.twitter.com/22VIShNzSM</a></p>&mdash; OthloTech (@OthloTech) <a href="https://twitter.com/OthloTech/status/1000653056713809922?ref_src=twsrc%5Etfw">2018年5月27日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">キャッシャブルにかこう<a href="https://twitter.com/hashtag/OthloTech?src=hash&amp;ref_src=twsrc%5Etfw">#OthloTech</a> <a href="https://twitter.com/hashtag/pixiv_ngy?src=hash&amp;ref_src=twsrc%5Etfw">#pixiv_ngy</a> <a href="https://t.co/aMbZ0seQI4">pic.twitter.com/aMbZ0seQI4</a></p>&mdash; OthloTech (@OthloTech) <a href="https://twitter.com/OthloTech/status/1000653700971483136?ref_src=twsrc%5Etfw">2018年5月27日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/KageShiron?ref_src=twsrc%5Etfw">@KageShiron</a> さんの「Re:WSLで始める快適Linux生活」！<a href="https://twitter.com/hashtag/OthloTech?src=hash&amp;ref_src=twsrc%5Etfw">#OthloTech</a> <a href="https://twitter.com/hashtag/pixiv_ngy?src=hash&amp;ref_src=twsrc%5Etfw">#pixiv_ngy</a> <a href="https://t.co/3r4kyC5Yqm">pic.twitter.com/3r4kyC5Yqm</a></p>&mdash; OthloTech (@OthloTech) <a href="https://twitter.com/OthloTech/status/1000654763397070853?ref_src=twsrc%5Etfw">2018年5月27日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">BOOTHで合同技術同人誌を販売してみた <a href="https://twitter.com/Fumiya_Kume?ref_src=twsrc%5Etfw">@Fumiya_Kume</a> <a href="https://t.co/EZfNjnBKTn">pic.twitter.com/EZfNjnBKTn</a></p>&mdash; OthloTech (@OthloTech) <a href="https://twitter.com/OthloTech/status/1000656551403651073?ref_src=twsrc%5Etfw">2018年5月27日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">ライブ資料作成LT💻<a href="https://twitter.com/hashtag/OthloTech?src=hash&amp;ref_src=twsrc%5Etfw">#OthloTech</a> <a href="https://twitter.com/hashtag/pixiv_ngy?src=hash&amp;ref_src=twsrc%5Etfw">#pixiv_ngy</a> <a href="https://t.co/1UyE53lOaT">pic.twitter.com/1UyE53lOaT</a></p>&mdash; OthloTech (@OthloTech) <a href="https://twitter.com/OthloTech/status/1000659953365889025?ref_src=twsrc%5Etfw">2018年5月27日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## おわりに

恒例の記念撮影

今回イベントを開催して頂いたピクシブ株式会社さま、本当にありがとうございました！  
非常に良い雰囲気でイベントを開催することできました。今後ともOthloTechをよろしくお願いします。

## 今後の OthloEventについて

[【学生限定】Webインフラ入門 @クックパッド OthloEvent#31](https://othlotech.connpass.com/event/87047/)
次回のイベントは....再びインフラ系です！  
今回は[OthloEvent#22](http://www.othlo.tech/events/othloevent22-cookpad/)同様、CTO 成田一生さんをお迎えしてのイベントとなります！


[【学生限定】UXデザイン講座（第2回）@アクアリング OthloEvent#32](https://othlotech.connpass.com/event/88836/)
[前回](http://www.othlo.tech/events/othloevent25-ux/)の第二回になります。
今回はの[UXデザインの教科書](https://www.amazon.co.jp/UX%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-%E5%AE%89%E8%97%A4-%E6%98%8C%E4%B9%9F/dp/4621300377)の著者、千葉工大教授 安藤 昌也をお呼びします。<b>「第二回」となってはいますが、内容自体は独立している</b>ので、第一回に参加していなくても大丈夫ですので、奮ってご参加ください！









