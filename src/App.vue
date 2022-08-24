<script setup>
import NavBar from "@/components/NavBar";
</script>

<template>
    <NavBar/>
    <div class="container mx-auto">
        <router-view></router-view>
    </div>
</template>

<style lang="postcss">
body {
    @apply bg-neutral-800 text-white;
}
</style>
