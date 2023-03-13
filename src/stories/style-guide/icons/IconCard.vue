<template>
  <div class="icon-card" @click="onClick">
    <div class="icon-card__icon">
      <slot></slot>
    </div>
    <p class="icon-card__text">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
interface PropType {
  label: string
  description: string
}
const props = withDefaults(defineProps<PropType>(), {
  label: 'アイコン名',
  description: 'アイコンの説明',
})
type Emits = {
  (e: 'click', description: string): void
}
const emit = defineEmits<Emits>()
const onClick = () => {
  emit('click', props.description)
}
</script>

<style lang="scss" scoped>
$BLOCK_NAME: '.icon-card';

$duration: 0.3s;
$hover-color: #d00;

#{ $BLOCK_NAME } {
  width: 80px;
  height: 80px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 8px;
  flex-direction: column;
  cursor: pointer;
  transition: border-color $duration;
  &:hover {
    border-color: $hover-color;
  }

  &__icon {
    width: 40px;
    height: 40px;
    fill: #000;
    transition: fill $duration;
    @at-root #{ $BLOCK_NAME }:hover & {
      fill: $hover-color;
    }
  }

  &__text {
    font-size: 12px;
    transition: color $duration;
    @at-root #{ $BLOCK_NAME }:hover & {
      color: $hover-color;
    }
  }
}
</style>
