<template>
    <Page :title='page.title' :featuredImage='page.featuredImage' :blocks='page.blocks' />
    <div v-if="!isLoading" class="px-3">
        <PostsListing :posts="posts" />
        <Pagination :totalPages="totalPages" @on-page-click="handlePageClick" />
    </div>
</template>

<script setup>
    const router = useRouter();
    const route = useRoute();

    const currentUrl = route.path;
    //get the page data
    const page  = await getPageProps(currentUrl);

    const pageSize = 4;
    const isLoading = ref(true);
    const posts = ref([]);
    const totalPages = ref(0);

    const paginate = async (pageNumber = 1) => {
        const page = pageNumber;
        const {posts: fetchedPosts, total} = await paginatePosts(page);
        posts.value = fetchedPosts;
        const totalResults = total;
        totalPages.value = Math.ceil(totalResults/pageSize);
        isLoading.value = false;
    }

    const handlePageClick = async (pageNumber) => {
        await router.push({ path: '/news', query: { page: pageNumber } } , { shallow: true });
        await paginate(pageNumber);
    };

    watchEffect(() => {
        paginate();
    });
</script>

<style lang="scss" scoped>

</style>
