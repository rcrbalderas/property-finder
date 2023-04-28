<template>
    <div class="flex flex-row justify-center items-center">
        <NuxtLink  :to="link" class=" bg-pink-600 hover:bg-pink-700 transition-all text-white font-bold py-4 px-5 rounded text-lg mt-5">
            {{ label }}
        </NuxtLink >
    </div>
</template>

<script setup>
    const { label, link } = defineProps({
        label: String,
        link: String
    });
</script>

<style lang="scss" scoped>

</style>