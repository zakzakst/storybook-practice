<template>
  <div>
    <div class="modal__thumb" @click="changeIsModalOpen(true)">
      <img src="https://picsum.photos/id/1000/400/200" width="400" height="200" />
      <span class="modal__thumb-icon"></span>
    </div>
    <div class="modal" :class="{ 'is-active': isModalOpen }" :style="style">
      <div class="modal__content">
        <div class="modal__head">
          <div class="modal__heading">見出しが入ります</div>
        </div>
        <div class="modal__body">
          <div class="modal__text">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</div>
          <div class="modal__img"><img src="https://picsum.photos/id/1000/400/200" width="400" height="200" /></div>
        </div><a class="modal__close" @click="changeIsModalOpen(false)"></a>
      </div>
      <div class="modal__bg" @click="changeIsModalOpen(false)"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface PropType {
  speed: number
  translateY: number
  scale: number
}

const props = withDefaults(defineProps<PropType>(), {
  speed: 0.2,
  translateY: 50,
  scale: 0.9,
})

const style = computed(() => {
  return {
    '--speed': props.speed + 's',
    '--translateY': props.translateY + 'px',
    '--scale': props.scale,
  }
})

const isModalOpen = ref(false)

const changeIsModalOpen = (state: boolean) => {
  isModalOpen.value = state
}
</script>

<style lang="scss" scoped>
$BLOCK_NAME: '.modal';

// SASS変数
$color_primary: #43ceb2;
$color_white: #fff;
$color_gray: #ddd;
$scrollbar_width: 8px;

@mixin scrollbar() {
  padding-right: $scrollbar_width;
  margin-right: -$scrollbar_width;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $color_primary;
    border: 0;
    border-radius: calc($scrollbar_width / 2);
  }
  &::-webkit-scrollbar-track {
    background: $color_gray;
    border-radius: calc($scrollbar_width / 2);
  }
  &::-webkit-scrollbar:vertical {
    width: $scrollbar_width;
  }
}

#{ $BLOCK_NAME } {
  --speed: 0.2s;
  --translateY: 50px;
  --scale: 0.9;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic',
    'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', Meiryo, メイリオ,
    sans-serif;
  padding: 24px;
  visibility: hidden;
  &.is-active {
    visibility: visible;
  }

  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0);
    transition: background-color var(--speed);
    @at-root #{ $BLOCK_NAME }.is-active & {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    max-width: calc(100% - 24px);
    max-height: calc(100% - 24px);
    padding: 72px 72px 60px;
    background: $color_white;
    border-radius: 24px;
    transform: translateY(var(--translateY)) scale(var(--scale));
    opacity: 0;
    transition: all var(--speed);
    @at-root #{ $BLOCK_NAME }.is-active & {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  &__head {
    position: relative;
    flex-shrink: 0;
  }

  &__heading {
    font-size: 20px;
    font-weight: bold;
  }

  &__body {
    @include scrollbar();
    margin-top: 24px;
    overflow: auto;
  }

  &__img {
    margin: 36px auto 0;
    text-align: center;
  }

  &__close {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 28px;
    height: 28px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
    &::before,
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 3px;
      margin: auto;
      content: '';
      background: $color_primary;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }

  &__thumb {
    position: relative;
    width: 400px;
    cursor: pointer;
  }

  &__thumb-icon {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 120px;
    height: 120px;
    margin: auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    transition: transform 0.3s;
    @at-root #{ $BLOCK_NAME }__thumb:hover & {
      transform: scale(1.1);
    }
    &::before,
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      content: '';
      background: $color_primary;
      transition: transform 0.3s;
      @at-root #{ $BLOCK_NAME }__thumb:hover & {
        transform: rotate(180deg);
      }
    }
    &::before {
      width: 28px;
      height: 4px;
    }
    &::after {
      width: 4px;
      height: 28px;
    }
  }
}
</style>
