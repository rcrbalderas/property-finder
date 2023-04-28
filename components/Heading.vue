<template>
    <component :is="tag"
            :style="{ ...textColorStyle }"
            :class="[
               'font-heading',
               'max-w-5xl',
               'mx-auto',
               'mb-5',
               'leading-tight',
               'font-family-aboreto',
               getFontSizeForHeading(level),
               getTextAlign(textAlign)
             ]">
        {{ content }}
    </component>
</template>

<script setup>
    const { textAlign, content, level, classes, textColor } = defineProps({
    textAlign: String,
    content: String,
    level: Number,
    classes: String,
    textColor: String
    });
    const tag = computed(() => `h${level}`);

    const textColorStyle = computed(() => textColor ? { color: textColor } : {});
</script>

<style lang="scss" scoped>

</style>