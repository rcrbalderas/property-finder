<template>
    <div class="px-2 py-5" :style="{ ...widthStyle, ...textColorStyle, ...backgroundColorStyle }">
        <slot></slot>
    </div>
</template>

<script setup>
    const { width, textColor, backgroundColor } = defineProps({
        width: String,
        textColor: String,
        backgroundColor: String,
    });

    const textColorStyle = computed(() => textColor ? { color: textColor } : {});
    const backgroundColorStyle = computed(() => backgroundColor ? { backgroundColor: backgroundColor } : {});
    const widthStyle = computed(() => width ? { minWidth: width, flexGrow: 1 } : { flexGrow: 1, flexBasis: 0 });
</script>

<style lang="scss" scoped>

</style>