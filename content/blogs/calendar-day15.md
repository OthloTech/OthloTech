+++
slug = 'the-reason-of-usingsketch'
tags = ['AdventCalendar']
categories = ["デザイン"]
date = "2016-12-15"
title = "僕がSketchに一目惚れした4つの理由"
banner = 'images/banners/blogs/the_Reason_Of_UsingSketch.png'
+++

# 僕がSketchに一目惚れした4つの理由

この記事は[OthloTech Advent Calendar 2016](http://qiita.com/advent-calendar/2016/othlotech)の15日目の記事です。

昨日の記事は[Morinikki](http://qiita.com/Morinikki)さんの[ハースストーンの類似カードをDeep Learningで探してみた](http://qiita.com/Morinikki/items/66941b9e3e57b9224fd7)でした。<br />
ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー<br />
初めまして！OthloTechの運営メンバーの一人[にーさん(@ni_san2000)](https://twitter.com/ni_san2000)です！<br />
OthloTechブログは初投稿になりますのでお手柔らかにお願いします！

さて今回はアプリエンジニアなら知っておいて損はないUI制作アプリケーション「[Sketch](https://www.sketchapp.com/)」について話していきたいと思います！<br />
IllustratorやPhotoshopなどはたくさんの方が知っていますがSketchはまだあまり知れ渡っていないので書かせていただきました。<br />
(過去に[Othloevent@Misoca #3](http://www.othlo.tech/events/othloevent03-misoca/)に参加していただいた方はご存知かもしれませんが･･･！)

{{<image src="/images/blogs/20161215/SketchHeader.png"  alt="SketchHeader" >}}

## そもそもSketchとは？
SketchとはMac上で動作するUI制作アプリケーションです。公式ページは[こちら](https://www.sketchapp.com/)からどうぞ。

- Illustratorと同じようにベクターを扱うことができ、さらにターゲットをUIデザイン寄りにしたようなイメージ！
- 使い方を見ないでもなんとなく使いこなせる（特に説明書を読まないタイプの人にぴったり）
- 無料試用期間が30日、その後永久ライセンスが$99だが、 **学生なら$49で買うことができる**<br />
ライセンス購入には学生証のコピー(pdf)が必要なので、学生であるうちに買っちゃいましょう！
- **一目惚れします(笑)**

気になった方はまずインストールしてみてください！

## 僕がSketchに一目惚れした4つの理由

### ①iOSのUIテンプレートが標準装備
何と言っても、これ。すぐにiOSのレイアウトデザインができちゃうんです。<br />
{{<image src="/images/blogs/20161215/iOSTemplates.png"  alt="iOSTemplates" >}}
僕はこれを見た瞬間「コピーするだけじゃん！」って今まで紙で書いてきたことを後悔していた記憶があります。（もちろん紙のスケッチもいいとこあるけどね･･･！）<br />
{{<image src="/images/blogs/20161215/usingSketch.png"  alt="usingSketch" >}}
30分もあればこんな感じのネイティブアプリのUIデザイン、プロトタイプがすぐに作れます。

この他にもオンラインには様々なアプリケーションのUIの参考となるデザインが公開されており、見るだけでもワクワクしちゃいますね！<br />
[Puzzles - iOS 10](http://puzzles.design/)

いかがでしょう･･･？これだけでもSketchがiOSアプリのプロトタイプを作ることと相性がいいことが分かってきたでしょうか？

### ②Illustratorのようにシンボルも作成できる
Illustratorの機能の一つに「シンボル」があります。これは「繰り返し何度も使用するオブジェクトを効率よく配置できるようにしたもの」で、エンジニアに分かりやすい言葉で噛み砕くとオブジェクト指向におけるクラスのようなものです。この機能もちゃんとSketchは用意してあり、パラメーターの編集はより直感的に扱うことができます。
{{<image src="/images/blogs/20161215/symboladded.png"  alt="symboladded" >}}
このように幾つも生成、それぞれのパラメーターも変えることができます！自分のお好みのUIパーツも作れますね。

### ③スマホで常時プレビューが見られる！
Sketchには[Sketch Mirror](https://itunes.apple.com/jp/app/sketch-mirror/id677296955?mt=8)といったiOSアプリがあり、PC版のSketchとリンクをすると常時プレビューがスマホの画面に映し出されます！<br />これがものすごく便利で、「実際にスマホに表示させたらどんな印象になるだろう･･･」といったデバッグが一瞬で終わります。<br />しかも常時反映されるので自分自身でUXを確認しながらのデザインが出来ちゃいます！手元で即確認できる便利さは一度実感したらもう戻れません･･･！
{{<image src="/images/blogs/20161215/Sketchmirror.png"  alt="Sketchmirror" >}}

### ④Sketchのプラグインがイケてる
Sketchには様々な機能を拡張できるプラグインなるものがあります。有償無償ありますが有志の方が様々なプラグインを公開しており、自由に使うことができます。<br />
しかもダウンロード、インストールが超簡単。zipを展開して.sketchpluginファイルを実行するだけでインストールが完了します。<br />

- [Sketch Plugin](https://blog.prottapp.com/post/ja/sketch-integration)<br />
プロトタイプ作成サイトProttに作ったUIデザインやプロトタイプの画面を簡単に送信できるもの。1枚ずつ画像を出力してProttにアップロードするのは面倒だからね･･･！

- [RenameIt](https://github.com/rodi01/RenameIt)<br />
複数のレイヤーを連番でリネームできる優れもの。複数のアイコンや画像を動かすコレクションビューなどに最適。

- [CSSketch](https://github.com/JohnCoates/CSSketch)<br />
Sketchで作成した画像をCSSに変換、微調整が出来たりする。Webデザイナーにも使えるし常時反映してくれるからバックエンドのエンジニアにもぴったり。

などなど。調べてみればまだまだたくさんのプラグインが見つかります。

## おわりに
{{<image src="/images/blogs/20161215/iboughtsketch.png"  alt="iboughtsketch" >}}
30日ライセンスが終了したので購入しました。

SketchはUIデザインが初めての人も簡単に扱えることができ、エンジニアがデザインに簡単に触れられるアプリケーションだと思っています。<br />
また、デザインはIllustratorやPhotoshopが無いと出来ないといった先入観を取りはらってくれます！
どうか、この記事で新たなSketchユーザーが増えることを願っています。<br />

最後まで見ていただきありがとうございました！

次は16日目、[KosukeQiita](http://qiita.com/KosukeQiita)さんの記事になります。

[OthloTech Advent Calendar 2016](http://qiita.com/advent-calendar/2016/othlotech)はまだまだたくさんの方が投稿してくれます。
初めて見に来ていただい方、見逃してしまった方もぜひみなさんの投稿も見てくださいね！
