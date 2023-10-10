<script setup>
import { ref } from 'vue';
const isActive = ref(false);
const buttonClick = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <div class="accordion">
    <h3 class="accordion__title">
      <button
        class="accordion__button"
        :class="isActive ? 'isActive' : ''"
        :aria-expanded="isActive"
        aria-controls="accordion"
        @click="buttonClick()"
      >
        動物リスト
      </button>
    </h3>
    <div
      class="accordion__panel"
      :class="isActive ? 'isActive' : ''"
      id="accordion"
    >
      <ul class="accordion__list">
        <li class="accordion__list-item">犬</li>
        <li class="accordion__list-item">猫</li>
        <li class="accordion__list-item">鳥</li>
        <li class="accordion__list-item">豚</li>
        <li class="accordion__list-item">牛</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/mixin' as mixin;
.accordion {
  &__title {
    margin: 0;
    border: 1px solid #dcdcdc;
  }
  &__button {
    @include mixin.button-style-reset;
    display: block;
    width: 100%;
    padding: 10px 0;
    position: relative;

    &::after {
      content: '';
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #000000 transparent;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%) rotate(-180deg);
    }

    &.isActive {
      &::after {
        transform: translateY(-50%) rotate(0);
      }
    }
  }

  &__panel {
    display: none;

    &.isActive {
      display: block;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    border: 1px solid #dcdcdc;
    list-style: none;
  }
}
</style>
