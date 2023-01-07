export const useGlobalCounterComposable = () => {
    const globalCounterState = useState<number>('globalCounter', () => 0)

    const doubledCount = computed<number>(() => globalCounterState.value * 2)

    const increment = () => {
        globalCounterState.value++
    }

    return {
        count: globalCounterState,
        doubledCount,
        increment
    }
}
