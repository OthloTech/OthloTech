#!/bin/sh

# pagesフォルダの ., .., .git 以外を消去
ls -la pages | grep -v -E '.|.git$' | xargs rm -rf

# deploy用のファイルを生成
hugo -d pages

# deploy
cd pages
git add .
git commit -m 'updated by deploy.sh'
git push origin gh-pages
