<script setup>
/**
 * vue script
 */
import { ref } from 'vue';
const isActive = ref(false);
const buttonClick = () => {
  isActive.value = !isActive.value;
};

/**
 * vanilla script
 * addEventListenerは省略そのためelement取得もclick eventで取得
 */
const className = 'isActive';
const buttonClickVanilla = () => {
  const element = document.querySelector('#vanilla-button');
  const isActive = element.classList.contains(className);
  setAriaAttribute(element, !isActive);
};

const setAriaAttribute = (element, isActive) => {
  element.setAttribute('aria-pressed', isActive);
  element.setAttribute('aria-label', isActive ? 'オン' : 'オフ');
  if (isActive) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
};
</script>

<template>
  <div class="button">
    <button
      class="button__item"
      :class="isActive ? 'isActive' : ''"
      :aria-pressed="isActive"
      :aria-label="isActive ? 'オン' : 'オフ'"
      @click="buttonClick()"
    ></button>
    <button
      id="vanilla-button"
      class="button__item"
      aria-pressed="false"
      aria-label="オフ"
      @click="buttonClickVanilla()"
    ></button>
  </div>
</template>

<style lang="scss">
@use '/src/assets/styles/mixin' as mixin;
.button {
  &__item {
    @include mixin.button-style-reset;
    width: 30px;
    position: relative;

    &:nth-of-type(2) {
      margin-left: 20px;
    }

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 10px;
      background-color: rgba(189, 193, 198);
      border-radius: 10px;
      transition: background-color 80ms linear;
    }

    &::after {
      content: '';
      width: 18px;
      height: 18px;
      border-radius: 50%;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: #ffffff;
      transition-property: background-color, transform;
      transition-duration: 80ms;
      transition-timing-function: linear;
    }

    &.isActive {
      &::before {
        background-color: rgba(26, 115, 232);
        opacity: 0.5;
      }

      &::after {
        background-color: rgba(26, 115, 232);
        transform: translateX(12px) translateY(-50%);
      }
    }
  }
}
</style>
