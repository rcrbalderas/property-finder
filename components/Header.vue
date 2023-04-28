<template>
    <!-- Text Header -->
    <header class="w-full container mx-auto px-3 text-center">
        <div class="flex flex-col items-center py-12">
            <NuxtLink class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" to="/">
                <h1>{{ site_title }}</h1>
            </NuxtLink>
            <p class="text-lg text-gray-600 mt-1">
                {{ site_description }}
            </p>
        </div>
    </header>
</template>

<script setup>
    const { site_title, site_description } = await getsiteInfo();
</script>

<style scoped>

</style>