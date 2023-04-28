<template>
    <template v-for="block in blocks.blocks" :key="block.id">
        <template v-if="block.name === 'core/cover'">
            <Cover :block='block'>
                <BlockRenderer :blocks='block.innerBlocks' />
            </Cover>
        </template>
        <template v-else-if="block.name === 'core/heading'">
            <Heading
                :key='block.id'
                :level='parseInt(block.attributes?.level)'
                :content='block.attributes?.content'
                :textAlign='block.attributes?.textAlign'
                :classes='block.attributes?.className'
                :textColor="theme[block.attributes?.textColor] || block.attributes.style?.color?.text"
            />
        </template>
        <template v-else-if="block.name === 'lazyblock/cta-button'">
            <CTAButton
                :key='block.id' 
                :label='block.attributes?.button_label' 
                :link='block.attributes?.button_link' 
            />
        </template>
        <template v-else-if="block.name === 'core/paragraph'">
            <Paragraph
                :key='block.id' 
                :content='block.attributes?.content' 
                :textAlign='block.attributes.align'
                :textColor="theme[block.attributes?.textColor] || block.attributes.style?.color?.text"
            />
        </template>
        <template v-else-if="block.name === 'core/columns'">
            <Columns
                :key='block.id'
                :isStackedOnMobile='block.attributes?.isStackedOnMobile'
                :textColor='theme[block.attributes.textColor] || block.attributes.style?.color?.text'
                :backgroundColor='theme[block.attributes.backgroundColor] || block.attributes.style?.color?.background'
            >
            <BlockRenderer :blocks='block.innerBlocks' />
          </Columns>
        </template>
        <template v-else-if="block.name === 'core/column'">
            <Column
                :key='block.id'
                :width='block.attributes.width'
                :textColor='theme[block.attributes.textColor] || block.attributes.style?.color?.text'
                :backgroundColor='theme[block.attributes.backgroundColor] || block.attributes.style?.color?.background'
            >
            <BlockRenderer :blocks='block.innerBlocks' />
          </Column>
        </template>
        <template v-else-if="block.name === 'core/buttons'">
            <ButtonGroup 
                :key='block.id'
                :layoutType='block.attributes?.layout?.type' 
                :layoutPosition='block.attributes?.layout?.justifyContent' 
            >
                <BlockRenderer :blocks='block.innerBlocks' />
            </ButtonGroup>
        </template>
        <template v-else-if="block.name === 'core/button'">
            <Button 
                :key='block.id'
                :label='block.attributes?.text' 
                :link='block.attributes?.url' 
            />
        </template>
        <template v-else-if="block.name === 'core/image'">
            <div class="container mx-auto max-w-5xl">
            <nuxt-img 
                :key='block.id'
                :src='block.attributes.url'
                :height='block.attributes.height'
                :width='block.attributes.width'
                :alt='block.attributes.alt || ""'
                style="border-radius: 5px;"
            />
            </div>
        </template>
        <template v-else-if="block.name === 'core/list'">
            <List :blocks='block.innerBlocks' />
        </template>
        <template v-else-if="block.name === 'core/gallery'">
            <Gallery
                :key='block.id'
                :columns='block.attributes.columns || 3'
                :cropImages='block.attributes.imageCrop'
                :items='block.innerBlocks'
            />
        </template>


        <template v-else>
            404 Block not found
        </template>
    </template>
</template>

<script setup>
    import { theme } from "../theme";
    const blocks = defineProps({
        blocks: Object
    });
    //console.log("BLOCKS:", blocks.blocks);
</script>

<style scoped>

</style>