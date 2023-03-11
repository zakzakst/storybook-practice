<template>
  <a class="button" href="#" @click="onClick">
    <span class="button__text">{{ label }}</span>
    <span class="button__arrow">
      <font-awesome-icon icon="fas fa-arrow-right" class="icon" />
    </span>
  </a>
</template>

<script setup lang="ts">
interface PropType {
  label: string
}
withDefaults(defineProps<PropType>(), {
  label: 'ボタン01',
})
type Emits = {
  (e: 'click'): void
}
const emit = defineEmits<Emits>()
const onClick = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>
$BLOCK_NAME: '.button';

// 変数
$color-primary: #fa0000;
$color-border: #e6e6e6;
$transition-border: 0.5s;
$transition-arrow: 0.5s;
$height-border: 2px;

#{ $BLOCK_NAME } {
  position: relative;
  display: flex;
  align-items: center;
  padding: 30px 0;
  border-bottom: $height-border solid $color-border;
  &::before,
  &::after {
    position: absolute;
    top: 100%;
    display: block;
    height: $height-border;
    content: '';
    background: $color-primary;
  }
  &::before {
    left: 0;
    width: 100%;
    transition: transform $transition-border;
    transform: scaleX(0);
    transform-origin: bottom right;
  }
  &::after {
    right: 0;
    width: 30px;
  }
  &__text {
    flex-grow: 1;
    font-weight: bold;
  }
  &__arrow {
    margin-right: 4px;
    overflow: hidden;
    color: $color-primary;
  }
  &:hover {
    &::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    #{ $BLOCK_NAME }__arrow {
      .icon {
        animation: button01ArrowSlide $transition-arrow forwards;
      }
    }
  }
}

@keyframes button01ArrowSlide {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 0;
    transform: translateX(50%);
  }
  51% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
