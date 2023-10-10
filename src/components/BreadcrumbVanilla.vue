<template>
  <nav aria-label="パンくずリスト" class="breadcrumb">
    <ol class="breadcrumb__list">
      <li class="breadcrumb__item">
        <a class="breadcrumb__link" href="/">トップページ</a>
      </li>
      <li class="breadcrumb__item">
        <a class="breadcrumb__link" href="/">記事トップ</a>
      </li>
      <li class="breadcrumb__item">
        <a class="breadcrumb__link" href="/">記事カテゴリ</a>
      </li>
      <li class="breadcrumb__item">
        <a class="breadcrumb__link" aria-current="page" href="/"
          >記事ページ（現在のページ）</a
        >
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumb {
  &__list {
    display: flex;
    list-style: none;
    padding: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    &:nth-of-type(n + 2) {
      margin-left: 10px;
      &::before {
        content: '';
        display: inline-block;
        border-right: 1px solid #000000;
        margin-right: 10px;
        width: 0;
        height: 100%;
      }
    }
  }
}
</style>
