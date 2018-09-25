<template>
    <div>
        <h3>Name:</h3>
        <text-input
            v-model="item.name">
        </text-input>

        <h3>Note:</h3>
        <textarea
            v-model="item.description">
        </textarea>
        <div class="clearfix">
            <outline-button
                @click="onDelete"
                title="Delete Shopping Item"
                classes="float-right bg-transparent hover:bg-red text-red-dark font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent rounded">
            </outline-button>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>

import { db } from '../firebase';

export default {
    data() {
        return {
            item: {},
        };
    },
    name: 'ViewItem',
    props: {
        msg: String
    },
    methods: {
        onDelete() {
            db.ref('shopping-list').child(this.item['.key']).remove()
            this.$router.push({ path: `/` })
        }
    },
    firebase() {
        return {
            shoppingList: {
                source: db.ref('shopping-list').child(this.$route.params.id),
                asObject: true,
                cancelCallback: function () {

                },
                readyCallback: function () {
                    this.item = this.shoppingList;
                }
            }
        }
    },
}
</script>
