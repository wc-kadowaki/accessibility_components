<script setup>
import BreadcrumbVue from '../components/BreadcrumbVue.vue';
import InteractiveElement from '../components/InteractiveElement.vue';
import AccordionVue from '../components/AccordionVue.vue';
import ModalVue from '../components/ModalVue.vue';

const breadcrumbs = [
  {
    text: 'トップページ',
    path: '/',
    current: false,
  },
  {
    text: '記事トップ',
    path: '/',
    current: false,
  },
  {
    text: '記事カテゴリ',
    path: '/',
    current: false,
  },
  {
    text: '記事ページ（現在のページ）',
    path: '/',
    current: true,
  },
];
</script>

<template>
  <main class="contents">
    <section class="contents__section">
      <BreadcrumbVue :breadcrumbs="breadcrumbs" />
    </section>
    <section class="contents__section">
      <InteractiveElement />
    </section>
    <section class="contents__section">
      <AccordionVue />
    </section>
    <section class="contents__section">
      <ModalVue />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.contents {
  &__section {
    margin-top: 20px;
  }
}
</style>
