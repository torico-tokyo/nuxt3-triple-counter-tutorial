<script lang="ts" setup>
// 親の状態を使う
const props = defineProps<{
  counterId: string,
  propCount: number,
  propDoubledCount: number,
}>()
const emits = defineEmits(['emitIncrement'])

// ローカルカウンター
const localCounter = ref<number>(0)
const doubledLocalCounter = computed<number>(() => localCounter.value * 2)

// グローバルカウンター
const globalCounter = useGlobalCounterComposable()
</script>

<template>
  <fieldset>
    <legend>Counter {{ counterId }}</legend>

    <!-- コンポーネント変数を使うカウンター -->
    <button @click.prevent="localCounter++" class="me-1">
      Local: {{ localCounter }} * 2 = {{ doubledLocalCounter }}
    </button>

    <!-- コンポジション内の状態を使うカウンター -->
    <button @click.prevent="globalCounter.increment" class="me-1">
      Global: {{ globalCounter.count }} * 2 = {{ globalCounter.doubledCount }}
    </button>

    <!-- 親の状態を使うカウンター -->
    <button @click.prevent="emits('emitIncrement')">
      Parent: {{ props.propCount }} * 2 = {{ props.propDoubledCount }}
    </button>
  </fieldset>
</template>

<style scoped>
button.me-1 {
  margin-right: 1rem;
}
</style>
