<template>
  <h2>Counter Store</h2>

  <p data-testid="counter-values">
    Counter: {{ counter.n }}. Double: {{ counter.double }}
  </p>

  <p>Increment the Store:</p>

  <button @click="counter.increment()" data-testid="increment">+1</button>
  <button @click="counter.increment(10)">+10</button>
  <button @click="counter.increment(100)">+100</button>

  <p>Other actions:</p>
  <button @click="counter.reset()">Reset to 0</button>
  <button @click="counter.decrementToZero()">Decrement to zero (async)</button>
</template>

<script setup lang="ts">
import { useCounter } from '../stores/counter'
const counter = useCounter()
</script>

<style scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
