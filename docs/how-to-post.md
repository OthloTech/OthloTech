# 記事の投稿方法

記事にはイベントレポート( `events` )とブログ記事( `blogs` )の二種類があります。

外部からの投稿を許可しているものはブログ記事(`blogs`)のみになります。

## リポジトリをダウンロード

```
git clone https://github.com/OthloTech/OthloTech.git
cd OthloTech
```

## 投稿手順

### 1) masterにいることを確認し、最新の状態に更新する

```
git branch --contains # 現在のブランチを確認する。masterでなければmasterにチェックアウトする。
git checkout master
git pull origin master
```

### 2) ブランチを切る

```
git checkout -b blogs/xxxx  # blogs/xxxxというブランチを作成して、そこへチェックアウト
# 例) git checkout -b blogs/machine-learning
```

#### 3) 記事を作成

```
hugo new blogs/xxxx.md  # content/blogsフォルダに xxxx.md というファイルを作成
# 例) hugo new blogs/machine-learning.md
```
（※ 直接`/content/blogs`に`xxxx.md`ファイルを作成してもよい）

#### 4) 記事を書く
`3)`で作成した記事にマークダウン記法で記事を書きます。
詳しくは[マークダウン記法](https://github.com/OthloTech/OthloTech/blob/master/docs/markdown.md)を参照してください。

`/content/blogs`内の他の記事を参考にするといいです。

#### 5) 執筆途中の記事をコミット
```
git branch  # 2)で移動したブランチにいるか確認
git add .
git commit -m '写真を追加'  # 簡単なコミットメッセージを付ける
```

#### 6) 記事をプッシュ
記事は `masterブランチ` にpushするのではなく、公開前のレビューをするために`2)`で切ったブランチにプッシュします。

```
git push origin blogs/xxxx
```

（※ `masterブランチ`は保護しているので、直接pushするとエラーになります。）

#### 7) GitHub上でプルリクを出す
プッシュしたのち、GitHub上で`Pull Request`を作成します。  
作業途中であれば`WIP`、レビューOKであれば`REVIEW`のラベルを付けて下さい。  
これをメンバーがレビューし、LGTMが2つ以上つけば、OthloTech運営チームがマージをし、一般向けに公開されます。

レビューで確認する点については[記事の執筆ルール](https://github.com/OthloTech/OthloTech/blob/master/docs/writing-rules.md)を参考にしてください。

#### 8) 個人情報の記入
投稿されたブログはそのビュー数, FacebookやTwitterでのシェア数をもとに、4半期ごとにランキングをつけます。その結果, 1位となった記事投稿者にOthloTech運営チームよりプレゼントを授与します。そのため、以下のフォームから連絡先等の個人情報の記入をよろしくお願いいたします。

https://goo.gl/forms/tExhrTp6B8Dcts0v1
