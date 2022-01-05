#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf dist

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO> 推荐这个  
# vue.config.js 需要更改  publicPath: "/<REPO>", 而且路由只能用hash模式
git push -f git@github.com:liumouren666/vueBlog.git master:gh-pages

cd -
