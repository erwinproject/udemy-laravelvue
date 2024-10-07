<template>
    <Link href="/">Main Page</Link>&nbsp;
    <Link href="/hello">Show Page</Link>&nbsp;
    <Link href="/listing">Listing Page</Link>&nbsp;

    <div>The page with time {{ timer }}</div>
    
    <div v-if="flashSuccess" class="success">
        {{ flashSuccess }}
    </div>

    <slot> Default </slot>
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

<style scope>
.success {
    background-color: green;
    color: white;
}
</style>