<script setup>
import { onMounted } from 'vue';
class Modal {
  constructor(buttonId, contentId, closeClass, submitId, addClassName) {
    this.buttonElement = document.getElementById(buttonId);
    this.contentElement = document.getElementById(contentId);
    this.closeElements = document.getElementsByClassName(closeClass);
    this.submitElement = document.getElementById(submitId);
    this.className = addClassName;
    this.firstFocusableElement = undefined;
    this.lastFocusableElement = undefined;
    this.init();
  }
  init() {
    this.buttonElement.addEventListener('click', () => {
      this.open();
    });
    Array.from(this.closeElements).forEach((element) => {
      element.addEventListener('click', () => {
        this.close();
      });
    });
    this.submitElement.addEventListener('click', () => {
      this.submit();
    });
    this.contentElement.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
    const focusableElements = this.returnFocusableElements(this.contentElement);
    if (!focusableElements.length) {
      return;
    }
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];
    this.firstFocusableElement.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();
        this.lastFocusableElement.focus();
      }
    });
    this.lastFocusableElement.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        this.firstFocusableElement.focus();
      }
    });
  }
  open() {
    this.contentElement.classList.add(this.className);
    this.firstFocusableElement.focus();
  }
  close() {
    this.contentElement.classList.remove(this.className);
    this.buttonElement.focus();
  }
  submit() {
    alert('実行');
    this.close();
  }
  isFocusable(element) {
    if (element.tabIndex < 0) {
      return false;
    }
    if (element.disabled) {
      return false;
    }
    switch (element.nodeName) {
      case 'A':
        return !!element.href && element.rel != 'ignore';
      case 'INPUT':
        return element.type != 'hidden';
      case 'BUTTON':
      case 'SELECT':
      case 'TEXTAREA':
        return true;
      default:
        return false;
    }
  }
  returnFocusableElements(element) {
    const focusableElements = [];
    const focusDescendant = (element) => {
      for (let i = 0; i < element.childNodes.length; i++) {
        const child = element.childNodes[i];
        if (this.isFocusable(child)) {
          focusableElements.push(child);
        }
        focusDescendant(child);
      }
    };
    focusDescendant(element);
    return focusableElements;
  }
}

onMounted(() => {
  new Modal(
    'vanilla-modal-button',
    'vanilla-modal-content',
    'vanilla-modal-close',
    'vanilla-modal-submit',
    'isActive'
  );
});
</script>

<template>
  <div class="contents">
    <div class="contents__item">
      <button id="vanilla-modal-button" class="contents__button" type="button">
        モーダルを開く
      </button>
      <div id="vanilla-modal-content" class="modal">
        <div
          ref="dialog"
          class="modal__container"
          id="dialog"
          role="dialog"
          aria-labelledby="dialog_label"
          aria-modal="true"
        >
          <div class="modal__inner">
            <h2 class="modal__title" id="dialog_label">実行しますか？</h2>
            <div class="modal__buttons">
              <button id="vanilla-modal-submit" class="modal__button">
                はい
              </button>
              <button class="modal__button vanilla-modal-close">いいえ</button>
            </div>
          </div>
        </div>
      </div>
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
  display: none;

  &.isActive {
    display: block;
  }

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
