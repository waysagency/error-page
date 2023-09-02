<template>
  <h1 class="font-bold text-4xl">
    {{ story.name }}
  </h1>

  <div class="flex gap-2">
    <NuxtLink to="/" class="underline"> Home </NuxtLink>

    <NuxtLink to="/about-us" class="underline"> About us </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  story: Object,
  blok: Object,
});
</script>
