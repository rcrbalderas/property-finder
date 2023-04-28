<template>
    <Page :title='page.title' :featuredImage='page.featuredImage' :blocks='page.blocks' />
</template>


<script setup>
    const route = useRoute();
    const currentUrl = route.path;
    const slug = route.params.slug ? route.params.slug.slice(-1)[0] : (currentUrl === '/' ? '/' : '');
    //get the page data
    const page  = await getPageProps(slug);
</script>

<style scoped>

</style>