<template>
  <div class="container">
    <div class="menu-button">
      <button class="menu-button__main" @click="onClick">
        <font-awesome-icon icon="fa-solid fa-bars" size="2x" class="menu-button__main-icon" />
      </button>
      <div class="menu-button__sub-buttons">
        <button v-for="(n, index) in 5" :key="index" class="menu-button__sub-button">{{ n }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
/* @ts-ignore */
import anime from '../../../../node_modules/animejs/lib/anime.es.js'

const isMenuOpen = ref(false)
const isBusy = ref(false)
const transformRadius = 70
const transformDuration = 300

const openMenu = () => {
  if (isBusy.value) return
  isBusy.value = true
  anime({
    targets: '.menu-button__sub-button',
    duration: transformDuration,
    easing: 'easeOutBack',
    translateX: (el: any, i: number, l: number) => {
      return transformRadius * Math.sin(-(Math.PI / 2 - Math.PI / (l - 1) * i))
    },
    translateY: (el: any, i: number, l: number) => {
      return transformRadius * Math.cos(Math.PI / 2 + Math.PI / (l - 1) * i)
    },
    delay: anime.stagger(100),
    complete: () => {
      isMenuOpen.value = true
      isBusy.value = false
    },
  })
}

const closeMenu = () => {
  if (isBusy.value) return
  isBusy.value = true
  anime({
    targets: '.menu-button__sub-button',
    duration: transformDuration,
    easing: 'easeInBack',
    translateX: 0,
    translateY: 0,
    delay: anime.stagger(100),
    complete: () => {
      isMenuOpen.value = false
      isBusy.value = false
    },
  })
}

const onClick = () => {
  if (isMenuOpen.value) {
    closeMenu()
  } else {
    openMenu()
  }
}
</script>

<style lang="scss" scoped>
$BLOCK_NAME: '.menu-button';

// 変数

// レイアウト用
.container {
  position: relative;
  width: 300px;
  height: 300px;
}

#{ $BLOCK_NAME } {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 56px;
  height: 56px;

  &__main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    border: none;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    background: #000;
    color: #fff;
  }

  &__sub-buttons {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    width: 48px;
    height: 48px;
    z-index: 1;
  }

  &__sub-button {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    background: #000;
    color: #fff;
  }
}
</style>