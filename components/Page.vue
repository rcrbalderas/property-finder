<template>
    <PageWrapper :title='title' :featuredImage='featuredImage'>
        <HeaderTitle />
        
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