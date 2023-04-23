<template>
  <div class="change-content-2">
    <div class="container">
      <!-- ▼▼▼ type-1 ▼▼▼ -->
      <div class="content --type-1" :class="{ '--current': currentType === 'type-1' }">
        <div class="buttons" :class="{ '--hide': isButtonsHide }">
          <button class="button --1-2" @click="changeType('type-2')">2</button>
          <button class="button --1-3" @click="changeType('type-3')">3</button>
          <button class="detail-button --1" @click="isDetailShow = true">詳細1</button>
          <button class="detail-button --2" @click="isDetailShow = true">詳細2</button>
        </div>
        <div class="bg">
          <img class="img" src="https://picsum.photos/id/11/900/900" alt="">
        </div>
      </div>
      <!-- ▲▲▲ type-1 ▲▲▲ -->

      <!-- ▼▼▼ type-2 ▼▼▼ -->
      <div class="content --type-2" :class="{ '--current': currentType === 'type-2' }">
        <div class="buttons" :class="{ '--hide': isButtonsHide }">
          <button class="button --2-1" @click="changeType('type-1')">1</button>
          <button class="button --2-3" @click="changeType('type-3')">3</button>
          <button class="detail-button --3" @click="isDetailShow = true">詳細3</button>
          <button class="detail-button --4" @click="isDetailShow = true">詳細4</button>
        </div>
        <div class="bg">
          <img class="img" src="https://picsum.photos/id/17/900/900" alt="">
        </div>
      </div>
      <!-- ▲▲▲ type-2 ▲▲▲ -->

      <!-- ▼▼▼ type-3 ▼▼▼ -->
      <div class="content --type-3" :class="{ '--current': currentType === 'type-3' }">
        <div class="buttons" :class="{ '--hide': isButtonsHide }">
          <button class="button --3-1" @click="changeType('type-1')">1</button>
          <button class="button --3-2" @click="changeType('type-2')">2</button>
          <button class="detail-button --5" @click="isDetailShow = true">詳細5</button>
          <button class="detail-button --6" @click="isDetailShow = true">詳細6</button>
        </div>
        <div class="bg">
          <img class="img" src="https://picsum.photos/id/28/900/900" alt="">
        </div>
      </div>
      <!-- ▲▲▲ type-3 ▲▲▲ -->
    </div>
    <transition name="detail">
      <div v-if="isDetailShow" class="detail">
        <div class="inner">
          <h3>詳細名</h3>
          <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
          <button @click="isDetailShow = false">閉じる</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/* @ts-ignore */
import anime from '../../../node_modules/animejs/lib/anime.es.js'

const currentType = ref('type-1')
const isButtonsHide = ref(false)
const isDetailShow = ref(false)

const changeType = (type: string) => {
  const currentContentBgEl = document.querySelector('.content.--current .bg')
  const targetContentBgEl = document.querySelector(`.content.--${type} .bg`)
  isButtonsHide.value = true
  const tl = anime.timeline()
  tl.add({
    easing: 'easeInOutCirc',
    targets: currentContentBgEl,
    opacity: [1, 0],
    scale: [1, 1.1],
    duration: 1000,
  }, 500)
  tl.add({
    easing: 'easeInOutCirc',
    targets: targetContentBgEl,
    opacity: [0, 1],
    scale: [1.1, 1],
    duration: 1000,
    complete: () => {
      currentType.value = type
      isButtonsHide.value = false
    },
  }, 500)
}
</script>

<style lang="scss" scoped>
$size: 600;
.change-content-2 {
  position: relative;
  overflow: auto;
  width: #{$size}px;
  height: #{$size}px;
  > .container {
    position: relative;
    width: 100%;
    height: 100%;
    > .content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
      overflow: hidden;
      &.--current {
        z-index: 1;
        .bg {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
  }
  .buttons {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: 2;
    transition: all 0.5s;
    &.--hide {
      opacity: 0;
      transform: translateY(20px);
    }
    > .button {
      position: absolute;
      width: 90px;
      height: 90px;
      background: #900;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: bold;
      font-size: 24px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      &.--1-2 {
        top: 20%;
        left: 30%;
      }
      &.--1-3 {
        bottom: 30%;
        right: 40%;
      }
      &.--2-1 {
        top: 40%;
        left: 10%;
      }
      &.--2-3 {
        bottom: 20%;
        right: 20%;
      }
      &.--3-1 {
        top: 30%;
        left: 50%;
      }
      &.--3-2 {
        bottom: 60%;
        right: 60%;
      }
    }
    > .detail-button {
      position: absolute;
      width: 90px;
      height: 90px;
      background: #009;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: bold;
      font-size: 24px;
      border: none;
      cursor: pointer;
      &.--1 {
        top: 10%;
        right: 10%;
      }
      &.--2 {
        bottom: 20%;
        left: 10%;
      }
      &.--3 {
        top: 10%;
        left: 30%;
      }
      &.--4 {
        top: 20%;
        right: 10%;
      }
      &.--5 {
        bottom: 20%;
        right: 10%;
      }
      &.--6 {
        bottom: 10%;
        left: 10%;
      }
    }
  }
  .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transform: scale(1.1);
    opacity: 0;
    > .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: bottom;
    }
  }
  .detail {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    > .inner {
      width: 80%;
      background: #fff;
      padding: 24px;
      border-radius: 16px;
    }
  }
}

.detail-enter-active,
.detail-leave-active {
  transition: opacity 0.5s ease;
}

.detail-enter-from,
.detail-leave-to {
  opacity: 0;
}
</style>