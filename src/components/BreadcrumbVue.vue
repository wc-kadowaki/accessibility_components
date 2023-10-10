<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <nav aria-label="パンくずリスト" class="breadcrumb">
    <ol class="breadcrumb__list">
      <li
        v-for="breadcrumb in props.breadcrumbs"
        :aria-current="breadcrumb.current ? 'page' : false"
        class="breadcrumb__item"
      >
        <a class="breadcrumb__link" :href="breadcrumb.path">{{
          breadcrumb.text
        }}</a>
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
