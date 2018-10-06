<template>
    <card
        :img-src="item.files[1]"
        :item="item"
        :user="'James'">
    </card>
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