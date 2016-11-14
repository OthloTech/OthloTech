# ショートコードの使い方

### 画像

```
{{< image src="{画像の相対パス}" >}}
```

オプションとして以下の引数を付けられます。

```
title="{タイトル}"
class="{クラス名}"
alt="{alt属性}"
caption="{キャプション文}"
attr="{引用元などのタイトル}"
attrlink="{引用元などのURL}"

例： {{< image src="/images/blogs/20161103/tanshi_dsub.png" title="VGA端子" >}}
```

#### クラス名について
`image`ショートコードのスタイルは[CSSgram](http://una.im/CSSgram/)を使用しているため、以下のクラス名が使えます。
- \_1977
- aden
- brannan
- brooklyn
- clarendon
...

詳細は上記のCSSgram参照

### YouTube

```
{{< youtube "{動画のID}" >}}
```
