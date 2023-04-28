<template>
    <slot />
</template>

<script setup>
    const props = defineProps({
        title: String,
        featuredImage: String
    })
    provide('pageData', props)
</script>

<style scoped>

</style>