<template>
    <li class="w-full border mb-4 p-6 rounded-sm relative">
        <h3>{{ item.hello }}</h3>

        <h3>Note</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        <button class="absolute purchased-btn w-100 bg-grey-dark text-white p-2 rounded">
            Purchased <font-awesome-icon icon="coffee" />
        </button>
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