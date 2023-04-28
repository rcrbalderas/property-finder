<template>
    <div class="container mx-auto max-w-5xl">
        <ul>
            <li :key="block.id" v-for="block in blocks">
                <i class="fa fa-check-circle"></i>
                <p v-html='block.attributes?.content'>
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup>
    const {} = defineProps({
        blocks: Array
    });
</script>

<style scoped>
    ul li {
        margin-bottom: 20px;
        position: relative;
        padding-left: 55px;
    }

    ul li i {
        color: green;
        font-size: 20px;
        position: absolute;
        top: 15px;
        left: 15px
    }
</style>