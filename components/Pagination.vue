<template>
   <div v-if="totalPages > 1" class="max-w-5xl mx-auto mb-10">
    <div class="mb-10 flex justify-center gap-2">
        <div 
            class="w-8 h-8 inline-flex items-center justify-center leading-tight text-white  border border-gray-300 bg-pink-600 hover:bg-pink-700  transition-all hover:text-white rounded-sm cursor-pointer"
            v-for="(item, index) in Array.from({ length: totalPages })"
            :key="index"
            @click.stop="emit('on-page-click', index + 1)"
        >
            {{ index + 1 }}
        </div>
    </div>

  </div>

</template>

<script setup>
    const emit = defineEmits(['on-page-click'])

    const { totalPages } = defineProps({
        totalPages: Number,
    });
</script>

<style scoped>

</style>