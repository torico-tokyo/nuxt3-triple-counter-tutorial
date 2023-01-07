<script lang="ts" setup>
const parentCount = ref<number>(0)
const parentDoubledCount = computed<number>(() => parentCount.value * 2)
</script>

<template>
  <div>
    <h1>Triple Counter</h1>
    <div v-for="i in 3" :key="i">
      <CounterComponent
        :counter-id="i"
        :prop-count="parentCount"
        :prop-doubled-count="parentDoubledCount"
        @emit-increment="parentCount++"
      />
    </div>
  </div>
</template>
