#!/usr/bin/env sh

set -e

npm run build

cd dist/

git init

git add -A

git commit -m 'latest build'

git push -f git@github.com:calmhand/portfolio.git master:gh-pages