<template>
    <div class="container mx-auto max-w-5xl">
        <p 
            v-html='content'
            :style="{ ...textColorStyle }"
            :class="[
               'my-3',
               'leading-normal',
               'text-lg',
               'font-family-karla',
                textAlignStyle
             ]">
        
        </p>
    </div>
</template>

<script setup>
    const { textAlign, content, textColor } = defineProps({
    content: String,
    textAlign: String,
    textColor: String
    });

    const textAlignStyle = computed(() => {
    if (textAlign === 'center') {
        return 'text-center';
    } else if (textAlign === 'right') {
        return 'text-right';
    } else {
        return 'text-left';
    }
    });

    const textColorStyle = computed(() => textColor ? { color: textColor } : {});
   
</script>

<style lang="scss" scoped>

</style>