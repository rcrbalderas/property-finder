<template>
    <div class="flex flex-wrap max-w-5xl mx-auto">
      <div
        v-for="item in items"
        :key="item.id"
        :style="{ width: `${columnWidth}%` }"
        class="p-5 flex-grow"
      >
        <nuxt-img
          :src="item.attributes.url"
          alt="image"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </div>
    </div>
  </template>

<script setup>
    const props = defineProps({
        columns: Number,
        cropImages: Boolean,
        items: Array,
    });

    const maxHeight = ref(0);
    const maxWidth = ref(0);
    //console.log('item', props.items);
    if (props.cropImages) {
        props.items.forEach((item) => {
            
            if (item.attributes.height > maxHeight.value) {
                maxHeight.value = item.attributes.height;
            }
            if (item.attributes.width > maxWidth.value) {
                maxWidth.value = item.attributes.width;
            }
        });
    }

    const columnWidth = computed(() => 100 / props.columns);
</script>

<style lang="scss" scoped>

</style>