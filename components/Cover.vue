<template>
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center overflow-hidden">
        <template v-if='block.attributes.url || featuredImage'>
            <nuxt-img :src='block.attributes.url || featuredImage' fit="cover" class="mix-blend-soft-light" />
            <div class="max-w-5xl z-10 absolute">
                <slot/>
            </div>
        </template>
    </div>
</template>

<script setup>
    const {block} = defineProps({
        block: Object
    });
    const { featuredImage } = inject('pageData');
</script>

<style scoped>

</style>
