<template>
    <li class="w-full border mb-4 p-6 rounded-sm relative">
        <router-link tag="h3" :to="'/' + item['.key']">
            <a href="#">{{ item.name }}</a>
        </router-link>

        <h3>Note</h3>
        {{ item.description }}

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