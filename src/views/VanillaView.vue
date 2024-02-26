<script setup>
import BreadcrumbVanilla from '../components/BreadcrumbVanilla.vue';
import AccordionVanilla from '../components/AccordionVanilla.vue';
import ModalVanilla from '../components/ModalVanilla.vue';
</script>

<template>
  <main class="contents">
    <section class="contents__section">
      <BreadcrumbVanilla />
    </section>
    <section class="contents__section">
      <AccordionVanilla />
    </section>
    <section class="contents__section">
      <ModalVanilla />
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
