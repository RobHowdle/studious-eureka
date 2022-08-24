<script setup>
</script>

<template>
    <div class="nav">
        <div>
            <img src="/assets/logo.svg" class="logo" />
        </div>


        <div class="hidden w-full md:block md:w-auto">
            <ul class="list">
                <li>
                    <router-link to="/" class="link">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="link">About</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.nav {
    @apply w-full flex flex-wrap justify-between items-center mx-auto;
    @apply py-3 px-6;
    @apply bg-neutral-900;
}
.logo {
    @apply h-8;
}
.list {
    @apply flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium;
    @apply text-white;
}
.link {
    @apply block;
}
</style>
