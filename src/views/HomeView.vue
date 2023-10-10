<script setup>
import BreadcrumbVue from '../components/BreadcrumbVue.vue';
import InteractiveElement from '../components/InteractiveElement.vue';
import AccordionVue from '../components/AccordionVue.vue';

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
  <BreadcrumbVue :breadcrumbs="breadcrumbs" />
  <InteractiveElement />
  <AccordionVue />
</template>
