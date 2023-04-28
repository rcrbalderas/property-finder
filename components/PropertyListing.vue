<template>
    <div class="max-w-5xl mx-auto pb-5 pt-10 grid md:gap-5 md:grid-cols-2">
       <PropertyCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script setup>
    const { posts, total } = defineProps({
        posts: Array,
    });
    //console.log(total);
</script>

<style lang="scss" scoped>

</style>