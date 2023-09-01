<script setup>
let { slug } = useRoute().params;

const url = slug && slug.length > 0 ? slug.join("/") : "home";

const story = await useAsyncStoryblok(url.replace(/\/$/, ""), {
  version: "draft",
});
</script>

<template>
  <StoryblokComponent v-if="story" :story="story" :blok="story.content" />
</template>
