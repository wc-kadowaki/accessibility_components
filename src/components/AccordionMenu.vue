<script setup>
/**
 * vue script
 */
import { onMounted, ref } from 'vue';
const isActive = ref(false);
const buttonClick = () => {
  isActive.value = !isActive.value;
};

/**
 * vanilla script
 */

class Accordion {
  constructor(buttonId, contentId, addClassName, initialDisplay) {
    this.buttonElement = document.getElementById(buttonId);
    this.contentElement = document.getElementById(contentId);
    this.status = initialDisplay;
    this.className = addClassName;
    this.init();
  }
  init() {
    this.buttonElement.addEventListener('click', () => {
      this.status = this.buttonElement.classList.contains(this.className);
      this.toggleClass();
      this.toggleAria();
    });
  }
  toggleClass() {
    const setClass = (element) => {
      if (this.status) {
        element.classList.remove(this.className);
      } else {
        element.classList.add(this.className);
      }
    };
    setClass(this.buttonElement);
    setClass(this.contentElement);
  }
  toggleAria() {
    this.buttonElement.setAttribute('aria-expanded', this.status);
  }
}

onMounted(() => {
  new Accordion(
    'vanilla-accordion-button',
    'vanilla-accordion',
    'isActive',
    false
  );
});
</script>

<template>
  <div class="accordion">
    <div class="accordion__item">
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
    <div class="accordion__item">
      <h3 class="accordion__title">
        <button
          id="vanilla-accordion-button"
          class="accordion__button"
          aria-expanded="false"
          aria-controls="vanilla-accordion"
        >
          果物リスト
        </button>
      </h3>
      <div class="accordion__panel" id="vanilla-accordion">
        <ul class="accordion__list">
          <li class="accordion__list-item">
            <a href="#vanilla-accordion1">リンゴ</a>
          </li>
          <li class="accordion__list-item">
            <a href="#vanilla-accordion1">ブドウ</a>
          </li>
          <li class="accordion__list-item">
            <a href="#vanilla-accordion1">バナナ</a>
          </li>
          <li class="accordion__list-item">
            <a href="#vanilla-accordion1">スイカ</a>
          </li>
          <li class="accordion__list-item">
            <a href="#vanilla-accordion1">メロン</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/mixin' as mixin;
.accordion {
  margin-top: 30px;
  &__item {
    &:nth-of-type(n + 2) {
      margin-top: 20px;
    }
  }
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
