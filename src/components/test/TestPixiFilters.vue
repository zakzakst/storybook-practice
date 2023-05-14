<template>
  <canvas ref="canvasRef" @click="onClick"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import * as PIXI from "pixi.js"
import { ShockwaveFilter } from "pixi-filters"
/* @ts-ignore */
import anime from '../../../node_modules/animejs/lib/anime.es.js'

const canvasRef = ref()
const shockwaveFilter = ref<any>()

onMounted(() => {
  const app = new PIXI.Application({
    view: canvasRef.value,
    width: window.innerWidth,
    height: window.innerHeight,
    background: 0x000000,
  })

  const img = PIXI.Sprite.from("https://picsum.photos/id/237/600/600")
  img.x = app.screen.width / 2
  img.y = app.screen.height / 2

  img.anchor.x = 0.5
  img.anchor.y = 0.5

  img.scale.x = 1
  img.scale.y = 1

  app.stage.addChild(img)

  shockwaveFilter.value = new ShockwaveFilter(
    [300, 300],
    {
      amplitude: 20,
      wavelength: 0, // 初期表示時点で小さい白い点が出てしまうことへの対応
      brightness: 2,
      radius: 400,
    },
    0
  )

  img.filters = [shockwaveFilter.value]
})


const onClick = () => {
  shockwaveFilter.value.wavelength = 10
  anime({
    targets: shockwaveFilter.value,
    time: 1,
    duration: 600,
    easing: "easeOutQuad",
    // easing: 'linear',
    complete: () => {
      shockwaveFilter.value.time = 0
      shockwaveFilter.value.wavelength = 0
    },
  })
}
</script>