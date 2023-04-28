<template>
    <PageWrapper :title='title' :featuredImage='featuredImage'>
        <HeaderTitle />
        
        <div class="flex flex-wrap max-w-5xl mx-auto px-5 mb-5">
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 w-full" role="alert">
                <p class="font-bold text-xl mb-2">$120,000</p>
                <p class="text-sm">Introducing a stunning property that offers a perfect blend of modern luxury and serene tranquility. This beautifully designed home boasts breathtaking views and top-of-the-line amenities, creating an ideal oasis for relaxation and entertainment.</p>
            </div>
        </div>

       

        <div class="relative">
            <BlockRenderer :blocks='blocks' />
        </div>
    </PageWrapper>
</template>

<script setup>
    const {title, featuredImage, blocks} = defineProps({
        title: String,
        featuredImage: String,
        blocks: Array
    });
</script>

<style scoped>

</style>