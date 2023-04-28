export const getsiteInfo = async () => {
    const query = gql`
        query SiteInfoQuery {
            generalSettings {
                title
                description
            }
        }`
    const { data } = await useAsyncQuery(query);
    
   return {
        site_title: data.value.generalSettings.title,
        site_description: data.value.generalSettings.description
   }

}

export const getPostCategories = async () => {
    const query = gql`
        query SiteCatQuery {
            categories(where: { exclude: 1 }) {
                nodes {
                    id
                    name
                    slug
                    count
                }
            }
        }`
    const { data } = await useAsyncQuery(query);
    
    return {
        categories: data.value?.categories?.nodes
    }
}

export const getAllPosts = async () => {
    const query = gql`
    query AllPosts {
        posts(where: {offsetPagination: {size: 4, offset: 0}}) {
            nodes {
            author {
                node {
                name
                }
            }
            content
            excerpt
            date
            id
            featuredImage {
                node {
                sourceUrl
                }
            }
            slug
            title
            }
            pageInfo {
            offsetPagination {
                total
            }
            }
        }
    }`

    const { data } = await useAsyncQuery(query);
    
    return {
        posts: data.value?.posts?.nodes,
        total: data.value?.posts?.pageInfo?.offsetPagination?.total
    }
}

export const paginatePosts = async (page) => {
    const query = gql`
        query QueryPosts($offset: Int!, $size: Int!) {
            posts(where: {offsetPagination: {size: $size, offset: $offset}}) {
                nodes {
                    author {
                        node {
                        name
                        }
                    }
                    content
                    excerpt
                    date
                    id
                    featuredImage {
                        node {
                        sourceUrl
                        }
                    }
                    slug
                    title
                    }
                    pageInfo {
                    offsetPagination {
                        total
                    }
                }
            }
        }`
        const variables = { 
            offset: ((page || 1) - 1) * 4,
            size: 4 
        }
        const { data } = await useAsyncQuery(query, variables);

        return {
            posts: data.value?.posts?.nodes,
            total: data.value?.posts?.pageInfo?.offsetPagination?.total
        }
}

export const paginateProperties = async (page_num = 1) => {
    const query = gql`
        query QueryProperties($offset: Int!, $size: Int!) {
              properties(where: {offsetPagination: {offset: $offset, size: $size}}) {
                nodes {
                    author {
                        node {
                            name
                        }
                    }
                    content
                    excerpt
                    date
                    id
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    slug
                    title
                    }
                    pageInfo {
                        offsetPagination {
                            total
                    }
                }
            }
        }`
        const variables = { 
            offset: ((page_num || 1) - 1) * 4,
            size: 4 
        }
        const { data } = await useAsyncQuery(query, variables);
        return {
            posts: data.value?.properties?.nodes,
            total: data.value?.properties?.pageInfo?.offsetPagination?.total
        }
}

export const pageinateCategoryPosts = async (slug, page) => {
    const query = gql`
        query NewQuery($categoryName: String!, $offset: Int!, $size: Int!) {
        posts(where: {offsetPagination: {offset: $offset, size: $size}, categoryName: $categoryName}){
                pageInfo {
                    offsetPagination {
                        total
                    }
                }
                nodes {
                author {
                    node {
                        name
                    }
                }
                content
                date
                excerpt
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                slug
                title
                id
                }
            }
        }`
        const variables = { 
            offset: ((page || 1) - 1) * 4,
            size: 4, 
            categoryName : slug
        }
        const { data } = await useAsyncQuery(query, variables);

        return {
            posts: data.value?.posts?.nodes,
            total: data.value?.posts?.pageInfo?.offsetPagination?.total
        }
}