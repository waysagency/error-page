<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="text-center flex flex-col justify-center gap-8 h-screen">
    <p class="text-xl">
      {{ error?.statusCode }}
    </p>

    <h1 class="font-bold text-lg">
      {{ error?.message }}
    </h1>

    <button @click="handleError">Clear errors</button>
  </div>
</template>
