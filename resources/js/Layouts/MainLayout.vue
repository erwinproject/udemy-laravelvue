<template>


    <!-- <div>The page with time {{ timer }}</div> -->

    <header class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full">
        <div class="container mx-auto">
            <nav class="p-4 flex items-center justify-between">
                <div class="text-lg font-medium">
                    <Link :href="route('listing.index')">Home</Link>
                </div>
                <div class="text-xl text-indigo-600 dark:text-indigo-300">
                    <Link :href="route('listing.index')">LaraUdemy</Link>
                </div>
                <div>
                    <Link :href="route('listing.create')" class="btn-primary">+ New Listing</Link>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto p-4">
        <div v-if="flashSuccess" class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2">
            {{ flashSuccess }}
        </div>
    <slot> Default </slot>

    </main>



</template>

<script setup>
import { ref, computed } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'

// const timer = ref('cogs')
const timer = ref(0)
setInterval(() => timer.value++, 1000)

// flash message
const page = usePage()
const flashSuccess = computed(
    () => usePage().props.flash.success,
)
</script>

<!-- without tailwind -->
<!-- <style scope>
.success {
    background-color: green;
    color: white;
}
</style> -->