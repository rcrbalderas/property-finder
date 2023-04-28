<template>
        <!-- Topic Nav -->
        <nav class="w-full py-4 border-t border-b bg-gray-100" >
        <div class="block sm:hidden">
            <a
                href="#"
                class="md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                @click="open = !open"
            >
                Topics <i :class="open ? 'fa-chevron-down': 'fa-chevron-up'" class="fas ml-2"></i>
            </a>
        </div>
        <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <NuxtLink v-for="category in categories" :key="category.name" :to="`/category/${category.slug}`" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">{{ category.name }}</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
    const { categories } = await getPostCategories();

    const open = ref(false);

</script>

<style scoped>
    .router-link-active.router-link-exact-active {
        background-color: rgb(156 163 175 / 1);
        background-color: rgb(156 163 175 / var(--tw-bg-opacity));
    }
</style>