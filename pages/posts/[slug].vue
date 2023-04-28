<template>
    <Page :title='page.title' :featuredImage='page.featuredImage' :blocks='page.blocks' />
</template>


<script setup>
    const route = useRoute();
    //const currentUrl = route.path;
    const slug = route.params.slug ? route.params.slug : '/';
    //get the page data
    const page  = await getPostProps(slug);
</script>

<style scoped>

</style>