<template>
    <li class="w-full border mb-4 p-6 rounded-sm relative">
        <router-link tag="h3" :to="'/' + item['.key']">
            <a
                href="#"
                class="no-underline inline-block leading-none border rounded text-grey border-white hover:border-transparent hover:text-blue hover:bg-white mt-4 lg:mt-0">{{ item.name }}</a>
        </router-link>

        <h3 class="mt-4">Description:</h3>
        <p>{{ item.description }}</p>

        <p class="mt-4">Price:</p>

        <outline-button
            title="Purchased"
            classes="absolute purchased-btn bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
        </outline-button>
    </li>
</template>

<script>

export default {
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    }
}

</script>