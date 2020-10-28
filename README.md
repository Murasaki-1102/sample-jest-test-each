# sample-jest-test-each

テストデータをテーブル記法で書くと、Jestがそれをもとに引数や期待値を取り替えながら、全部テストしてくれる仕組みについて解説している、以下の記事に対応するサンプルプロジェクトです。  
https://zenn.dev/suzukalight/articles/jest-test-each

## 技術スタック

- Node.js + TypeScript (w/[gts](https://github.com/google/gts))
- [Jest w/ts-jest](https://github.com/kulshekhar/ts-jest)
- date-fns

# 実践

## setup

```
yarn
```

## testing

```
yarn test
```

# そのほかの実装について

ほかの `test.each` 実装については、このサンプルの元になっている以下のリポジトリをご覧ください；  
https://github.com/suzukalight/clean-architecture-nodejs-graphql-codegen
