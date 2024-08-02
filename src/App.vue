<template>
  <button @click="visible.changeImage()">Change Image Visibility</button>
  <button @click="visible.changeCounter()">Change Counter Visibility</button>
  <div>
    <div style="margin: 1rem 0" v-if="visible.isImageVisible === true">
      <PiniaLogo />
    </div>
    <Counter v-if="visible.isCounterVisible === true" />
  </div>
</template>

<script setup lang="ts">
import { useVisible } from './stores/visibleComponent'
import PiniaLogo from './components/PiniaLogo.vue'
import Counter from './components/Counter.vue'
const visible = useVisible()
</script>

<style scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
