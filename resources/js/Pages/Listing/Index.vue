<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Box v-for="listing in listings" :key="listing.id">
            <!-- Without composer ziggy -->
            <!-- <Link :href="`/listing/${listing.id}`"> -->

            <!-- with ziggy -->
            <!-- <Link :href="route('listing.show', [listing.id])"> -->
            <Link :href="route('listing.show', { listing: listing.id })">
            <Price :price="listing.price" class="text-2xl font-bold" />
            <ListingSpace :listing="listing" class="text-lg" />
            <ListingAddress :listing="listing" class="text-gray" />
            </Link>
            <div class="my-4">
                <Link :href="route('listing.edit', { listing: listing.id })" class="btn-primary">Edit</Link>&nbsp;
                <Link :href="route('listing.destroy', { listing: listing.id })" method="DELETE" class="btn-primary">Delete
                </Link>
            </div>
            <div>
            </div>
        </Box>
    </div>

</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import ListingAddress from '@/Components/ListingAddress.vue'
import Box from '@/Components/UI/Box.vue'
import ListingSpace from '@/Components/ListingSpace.vue';
import Price from '@/Components/Price.vue';

defineProps({
    listings: Array,
})
</script>