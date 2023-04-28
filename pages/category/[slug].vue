<template>
    <div v-if="!isLoading" class="px-3 md:px-0">
        <PostsListing :posts="posts" />
        <Pagination :totalPages="totalPages" @on-page-click="handlePageClick" />
    </div>
</template>

<script setup>
    const router = useRouter();
    const route = useRoute();
    const pageSize = 4;
    const isLoading = ref(true);
    const posts = ref([]);
    const totalPages = ref(0);
    const current_cat = route.params.slug;

    const paginate = async (pageNumber = 1) => {
        const page = pageNumber;
        const {posts: fetchedPosts, total} = await pageinateCategoryPosts(current_cat, page);
        posts.value = fetchedPosts;
        const totalResults = total;
        totalPages.value = Math.ceil(totalResults/pageSize);
        isLoading.value = false;
    }

    const handlePageClick = async (pageNumber) => {
        await router.push({ path: `/category/${current_cat}`, query: { page: pageNumber } } , { shallow: true });
        await paginate(pageNumber);
    }; 

    watchEffect(() => {
        paginate();
    });
</script>

<style lang="scss" scoped>

</style>