#!/bin/sh

COMMENT=$1

if [ -z ${COMMENT} ]; then # commentのサイズが0であれば真
  echo "Usage: ./deploy.sh [comment statement(required)]"
  exit
fi

COMMIT_HASH=`git log -1 --format=%h`i
GITHUB_USER=`git config user.name`

# pagesフォルダの ., .., .git 以外を消去
ls -la pages | grep -v -E '.|.git$' | xargs rm -rf

# deploy用のファイルを生成
hugo -d pages

# deploy
cd pages
git add .
git commit -m "COMMENT: ($COMMENT)" -m "updated by ($GITHUB_USER)" -m "HASH: ($COMMIT_HASH)" 
git push origin gh-pages

