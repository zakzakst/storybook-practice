<template>
  <div class="change-content">
    <div class="content">
      <div v-if="isType1" class="item --1">コンテンツ1</div>
      <div v-else class="item --2">コンテンツ2</div>
    </div>
    <button v-if="isType1" class="button --2" @click="changeType2">2に変更</button>
    <button v-if="!isType1" class="button --1" @click="changeType1">1に変更</button>
    <div ref="overlayEl" class="overlay" :class="isType1 ? '--1' : '--2'">
      <div class="text">{{ isOverlayType1 ? '反撃！！' : '侵略！！' }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/* @ts-ignore */
import anime from '../../../node_modules/animejs/lib/anime.es.js'

const isType1 = ref(true)
const isOverlayType1 = ref(true)
const overlayEl = ref()

const changeType1 = () => {
  const tl = anime.timeline()
  tl.add({
    easing: 'easeInOutCirc',
    targets: overlayEl.value,
    rotate: ['-45deg', '-45deg'],
    translateX: ['-100%', '0'],
    duration: 1000,
    begin: () => {
      overlayEl.value.style.visibility = 'visible'
      isOverlayType1.value = true
    },
    complete: () => {
      isType1.value = true
    },
  })
  tl.add({
    easing: 'easeInOutCirc',
    delay: 1000,
    targets: overlayEl.value,
    rotate: ['-45deg', '-45deg'],
    translateX: ['0', '100%'],
    duration: 1000,
    complete: () => {
      overlayEl.value.style.visibility = 'visible'
    },
  })
}

const changeType2 = () => {
  const tl = anime.timeline()
  tl.add({
    easing: 'easeInOutCirc',
    targets: overlayEl.value,
    rotate: ['-45deg', '-45deg'],
    translateX: ['100%', '0'],
    duration: 1000,
    begin: () => {
      overlayEl.value.style.visibility = 'visible'
      isOverlayType1.value = false
    },
    complete: () => {
      isType1.value = false
    },
  })
  tl.add({
    easing: 'easeInOutCirc',
    delay: 1000,
    targets: overlayEl.value,
    rotate: ['-45deg', '-45deg'],
    translateX: ['0', '-100%'],
    duration: 1000,
    complete: () => {
      overlayEl.value.style.visibility = 'visible'
    },
  })
}
</script>

<style lang="scss" scoped>
$size: 300;
$root2: 1.42;
.change-content {
  width: #{$size}px;
  height: #{$size}px;
  background: #000;
  overflow: hidden;
  position: relative;

  > .content {
    width: 100%;
    height: 100%;
    > .item {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      &.--1 {
        background: #900;
      }
      &.--2 {
        background: #070;
      }
    }
  }
  .button {
    position: absolute;
    padding: 16px;
    background: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    &.--1 {
      bottom: 0;
      left: 0;
    }
    &.--2 {
      top: 0;
      right: 0;
    }
  }

  .overlay {
    top: calc(#{-$size}px * (#{$root2} - 1) / 2);
    left: calc(#{-$size}px * (#{$root2} - 1) / 2);
    position: absolute;
    width: #{$size * $root2}px;
    height: #{$size * $root2}px;
    background: #000;
    z-index: 1;
    visibility: hidden;
    > .text {
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      position: absolute;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 120px;
    }
  }
}
</style>