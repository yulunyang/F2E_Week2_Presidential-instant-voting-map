<template>
  <div id="main">
  </div>
</template>

<script>
import { ref } from 'vue'
import { onMounted } from 'vue'
export default {
  components: {
  },
  setup () {
    const isLoading = ref(true)
    const timer = ref(null)

    onMounted(() => {
      isLoading.value ? setTimeOut() : null
    })

    const setTimeOut = () => {
      if (isLoading.value) {
        const timeout = setTimeout(() => {
          isLoading.value = false
        }, 2000)
        clearTimeout(timeout.value)
      }
    }

    return {
      isLoading,
      timer,
      setTimeOut
    }
  }
}
</script>

<style scoped>
</style>
