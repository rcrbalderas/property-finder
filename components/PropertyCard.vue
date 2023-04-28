<template>
    <div class="shadow mb-5 overflow-hidden rounded-md">
        <div class="relative h-0" style="padding-bottom: 56.25%;">
            <nuxt-img 
                v-if="post.featuredImage?.node?.sourceUrl"
                class="absolute top-0 left-0 w-full h-full object-cover"
                :src='post.featuredImage?.node?.sourceUrl'
                width="100%"
                height="270px"
                :alt="post.title"
            />
        </div>
        <div class="pt-5 pl-6 pr-6 pb-8">
            <h6 class=" text-lg mb-2">$120,000</h6>
            <h4 class=" text-2xl mb-1">{{ post.title }}</h4>
            <div v-html="post.excerpt" class="line-clamp-2"></div>
            <Button label="View Property" :link="`/property/${post.slug}`" />
        </div>
    </div>
</template>

<script setup>
    const { post } = defineProps({
        post: Object
    });
    //console.log(post);
</script>

<style lang="scss" scoped>

</style>