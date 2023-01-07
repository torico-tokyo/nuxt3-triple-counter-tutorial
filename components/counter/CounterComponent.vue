<script lang="ts" setup>
const localCounter = ref<number>(0)
const doubledLocalCounter = computed<number>(() => localCounter.value * 2)

const globalCounter = useGlobalCounterComposable()
</script>

<template>
  <fieldset>
    <legend>Counter</legend>

    <button @click.prevent="localCounter++" class="me-1">
      Local: {{ localCounter }} * 2 = {{ doubledLocalCounter }}
    </button>

    <button @click.prevent="globalCounter.increment">
      Global: {{ globalCounter.count }} * 2 = {{ globalCounter.doubledCount }}
    </button>

  </fieldset>
</template>

<style scoped>
button.me-1 {
  margin-right: 1rem;
}
</style>
