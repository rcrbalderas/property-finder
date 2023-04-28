<template>
    <div class="my-7" :style="{ ...textColorStyle, ...backgroundColorStyle }" data-test="testz">
        <div :class="`max-w-5xl mx-auto py-5 ${isStackedOnMobile ? 'block md:flex' : 'flex'}` ">
        <slot></slot>
        </div>
    </div>
</template>

<script setup>
const { isStackedOnMobile, textColor, backgroundColor } = defineProps({
  isStackedOnMobile: Boolean,
  textColor: String,
  backgroundColor: String,
});

const textColorStyle = computed(() => textColor ? { color: textColor } : {});
const backgroundColorStyle = computed(() => backgroundColor ? { backgroundColor: backgroundColor } : {});

</script>

<style lang="scss" scoped>

</style>

