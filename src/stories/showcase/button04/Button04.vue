<template>
  <!-- <a class="button" href="#" @click="onClick"> -->
  <a class="button" href="#">
    <span class="button__text">
      <span v-for="(c, index) in label" :key="index">{{ c }}</span>
    </span>
    <span class="button__arrow"></span>
  </a>
</template>

<script setup lang="ts">
interface PropType {
  label: string
}
withDefaults(defineProps<PropType>(), {
  label: 'Button04',
})
// type Emits = {
//   (e: 'click'): void
// }
// const emit = defineEmits<Emits>()
// const onClick = () => {
//   emit('click')
// }
</script>

<style lang="scss" scoped>
$BLOCK_NAME: '.button';

// 変数
$color_primary: #000;
$color_white: #fff;
$transition_default: 0.4s;
$transition_text: 0.5s;
$transition_slide_text: 0.18s;
$delay_slide_text: 0.05s;
$length_slide_text: 8px;
$length_slide_arrow: 8px;

#{ $BLOCK_NAME } {
  position: relative;
  display: block;
  width: 380px;
  padding: 35px;
  overflow: hidden;
  font-family: 'Source Serif Pro', serif;
  font-size: 24px;
  border-bottom: 1px solid $color_primary;
  transition: color $transition_default ease-out;
  &::after {
    position: absolute;
    top: 0;
    right: -5%;
    left: -5%;
    display: block;
    height: 420%;
    content: '';
    background: $color_primary;
    transition: transform $transition_default ease-out;
    transform: skewY(-30deg) scaleY(0);
    transform-origin: left bottom;
  }
  &__text {
    position: relative;
    z-index: 1;
    display: block;
    & > span {
      display: inline-block;
    }
  }
  &__arrow {
    position: absolute;
    top: 0;
    right: 25px;
    bottom: 0;
    z-index: 1;
    display: block;
    width: 34px;
    height: 11px;
    margin: auto 0;
    transition: transform $transition_default ease-out;
    &::before,
    &::after {
      position: absolute;
      display: block;
      content: '';
      transition: all $transition_default ease-out;
    }
    &::before {
      top: 50%;
      right: 0;
      left: 0;
      height: 1px;
      background: $color_primary;
      transform: translateY(-50%);
    }
    &::after {
      top: 0;
      right: 1px;
      bottom: 0;
      width: 9px;
      height: 9px;
      border: 1px solid transparent;
      border-top-color: $color_primary;
      border-right-color: $color_primary;
      transform: rotate(45deg);
    }
  }
  &:hover {
    color: $color_white;
    &::after {
      transform: skewY(-30deg) scaleY(1);
      transform-origin: left top;
    }
  }
  &:hover &__text {
    transition: transform $transition_text ease-out;
    transform: translateY($length_slide_text);
    & > span {
      transition: transform $transition_text ease;
      transform: translateY(-$length_slide_text);
      @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
          transition-delay: #{$i * $delay_slide_text};
        }
      }
    }
  }
  &:hover &__arrow {
    transform: translateX($length_slide_arrow);
    &::before {
      background: $color_white;
    }
    &::after {
      border-top-color: $color_white;
      border-right-color: $color_white;
    }
  }
}
</style>
