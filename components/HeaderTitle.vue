<template>
    <div  v-if='featuredImage' className="h-80 text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center overflow-hidden mb-10">
        <nuxt-img :src='featuredImage' fit="fill" class="mix-blend-soft-light w-full h-auto" />
        <div class="max-w-4xl z-10 absolute">
            <Heading textAlign="center" level=1 classes="test classz" :content="title" />
        </div>
    </div>
</template>

<script setup>
    const { title, featuredImage } = inject('pageData');
</script>

<style lang="scss" scoped>

</style>