export const getPageProps = async (uri) => {
    const query = gql`
    query NewQuery($uri: String!) {
        nodeByUri(uri: $uri) {
            ... on Page {
            title
            id
            blocksJSON
            blocks {
                dynamicContent
                name
                attributesJSON
                    innerBlocks {
                    name
                    attributesJSON
                    innerBlocks {
                        attributesJSON
                        name
                        innerBlocks {
                            attributesJSON
                            name
                        }
                    }
                }
            }
            featuredImage {
                node {
                sourceUrl
                }
            }
            }
        }
    }`
    const variables = { uri: uri }
    const {data} = await useAsyncQuery(query, variables);
    const blocks = cleanAndTransformBlocks(data.value?.nodeByUri?.blocks);

    return {
        title: data.value.nodeByUri.title,
        featuredImage: data.value.nodeByUri.featuredImage?.node?.sourceUrl || null,
        blocks
    }
}

export const getPostProps = async (uri) => {
    const query = gql`
    query NewQuery($uri: String!) {
        nodeByUri(uri: $uri) {
            ... on Post {
            title
            id
            blocksJSON
            blocks {
                dynamicContent
                name
                attributesJSON
                    innerBlocks {
                    name
                    attributesJSON
                    innerBlocks {
                        attributesJSON
                        name
                        innerBlocks {
                            attributesJSON
                            name
                        }
                    }
                }
            }
            featuredImage {
                node {
                sourceUrl
                }
            }
            }
        }
    }`
    const variables = { uri: uri }
    const {data} = await useAsyncQuery(query, variables);
    const blocks = cleanAndTransformBlocks(data.value?.nodeByUri?.blocks);

    return {
        title: data.value.nodeByUri.title,
        featuredImage: data.value.nodeByUri.featuredImage?.node?.sourceUrl || null,
        blocks
    }
}

export const getPropertyProps = async (uri) => {
    const query = gql`
    query PropertyQuery($uri: String!) {
        propertyBy(uri: $uri) {
            title
            id
            blocksJSON
            blocks {
                dynamicContent
                name
                attributesJSON
                    innerBlocks {
                    name
                    attributesJSON
                    innerBlocks {
                        attributesJSON
                        name
                        innerBlocks {
                            attributesJSON
                            name
                        }
                    }
                }
            }
            featuredImage {
                node {
                sourceUrl
                }
            }
        }
    }`
    const variables = { uri: uri }
    const {data} = await useAsyncQuery(query, variables);
    const blocks = cleanAndTransformBlocks(data.value?.propertyBy?.blocks);

    return {
        title: data.value.propertyBy.title,
        featuredImage: data.value.propertyBy.featuredImage?.node?.sourceUrl || null,
        blocks
    }
}