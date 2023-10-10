<script setup>
import ToggleButton from './ToggleButton.vue';
import LinkElement from './LinkElement.vue';
</script>

<template>
  <div class="interactive">
    <div class="interactive__item">
      <LinkElement />
    </div>
    <button>ボタン</button>
    <div class="interactive__item">
      <ToggleButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.interactive {
  &__item {
    margin-top: 30px;
  }
}
</style>
