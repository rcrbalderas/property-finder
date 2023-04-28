<template>
    <footer class="w-full bg-white pb-12 mt-10">
        <div class="w-full container mx-auto flex flex-col items-center">
            <div class="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
                <a href="#" class="uppercase px-3">About Us</a>
                <a href="#" class="uppercase px-3">Privacy Policy</a>
                <a href="#" class="uppercase px-3">Terms & Conditions</a>
                <a href="#" class="uppercase px-3">Contact Us</a>
            </div>
            <div class="uppercase pb-6">&copy; {{ site_title }} {{ currentYear }}</div>
        </div>
    </footer>
</template>

<script setup>
     const { site_title } = await getsiteInfo();

     const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>

</style>