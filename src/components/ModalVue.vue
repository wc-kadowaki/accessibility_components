<script setup>
import { nextTick, ref } from 'vue';
const isActive = ref(false);
const openElement = ref();
const dialog = ref();
const firstTarget = ref();
const lastTarget = ref();
const bodyFix = (fixed) => {
  if (fixed) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const modalOpen = (target) => {
  // モーダルを開いた際のボタンをrefで管理しておく
  openElement.value = target;
  isActive.value = true;
  // DOM更新が入るためnextTickを使用
  nextTick(() => {
    firstTarget.value.focus();
  });
  bodyFix(true);
};
const modalClose = () => {
  isActive.value = false;
  // close時にフォーカスをもとのボタンに戻す
  openElement.value.focus();
  bodyFix(false);
};

const handleTab = (event) => {
  const { target, shiftKey } = event;
  if (!shiftKey && target === lastTarget.value) {
    event.preventDefault();
    firstTarget.value.focus();
  } else if (shiftKey && target === firstTarget.value) {
    event.preventDefault();
    lastTarget.value.focus();
  }
};

const execution = () => {
  modalClose();
  alert('実行');
};
const cancel = () => {
  modalClose();
};
</script>

<template>
  <div class="contents">
    <div class="contents__item">
      <button class="contents__button" @click="modalOpen($event.target)">
        モーダルを開く
      </button>
      <Transition>
        <div class="modal" v-show="isActive">
          <div
            ref="dialog"
            class="modal__container"
            id="dialog"
            role="dialog"
            aria-labelledby="dialog_label"
            aria-modal="true"
            @keyup.esc="modalClose()"
            @keydown.tab="handleTab($event)"
          >
            <div class="modal__inner">
              <h2 class="modal__title" id="dialog_label">実行しますか？</h2>
              <div class="modal__buttons">
                <button
                  ref="firstTarget"
                  class="modal__button"
                  @click="execution()"
                >
                  はい
                </button>
                <button
                  ref="lastTarget"
                  class="modal__button"
                  @click="cancel()"
                >
                  いいえ
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/assets/styles/variable' as variable;

.contents {
  &__button {
    &:focus:not(:focus-visible) {
      outline: 0;
    }
  }
}

.modal {
  background-color: #ffffff;
  z-index: map-get($map: variable.$layer, $key: modal);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(100, 100, 100, 0.8);

  &__inner {
    width: 460px;
    height: 300px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__title {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__buttons {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
  }

  &__button {
    background-color: lightcoral;
    width: 100px;
    &:nth-of-type(2) {
      margin-left: 20px;
      background-color: lightgray;
    }
    &:focus:not(:focus-visible) {
      outline: 0;
    }
  }
}
</style>
