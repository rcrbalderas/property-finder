<template>
    <div :class="[
        'flex',
        layoutPositionStyle
    ]">
        <slot />
    </div>
</template>

<script setup>
    const { layoutType, layoutPosition } = defineProps({
        layoutType: String,
        layoutPosition: String
    });

    const layoutPositionStyle = computed(() => {
    if (layoutPosition === 'center') {
        return 'justify-center';
    } else if (layoutPosition === 'right') {
        return 'justify-end';
    } else {
        return 'justify-start';
    }
    });
</script>

<style lang="scss" scoped>

</style>