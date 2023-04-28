<template>
    <Page :title='page.title' :featuredImage='page.featuredImage' :blocks='page.blocks' />
</template>


<script setup>
    const route = useRoute();
    const currentUrl = route.path;
    //get the page data
    const page  = await getPageProps(currentUrl);
    //console.log(page);
</script>

<style scoped>

</style>