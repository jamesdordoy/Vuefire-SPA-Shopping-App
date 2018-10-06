<template>
    <div>
        <form-group title="Name" for-id="name">
            <text-input
                v-model="item.name">
            </text-input>
        </form-group>

        <form-group title="Note" for-id="description">
            <textarea-input
                rows="5"
                v-model="item.description">
            </textarea-input>
        </form-group>
        <div class="clearfix">
            
            <outline-button
                @click="onDelete"
                title="Delete Shopping Item"
                classes="float-right bg-transparent hover:bg-red text-red-dark font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent rounded">
            </outline-button>

            <outline-button
                @click="onUpdate"
                title="Update Shopping Item"
                classes="float-left mr-4 bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
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
    methods: {
        onDelete() {
            this.$firebaseRefs.shoppingItem.remove();
            this.$router.push({ path: `/` });
        },
        onUpdate() {
            //Create copy and delete key
            const copy = {...this.item}
            delete copy['.key']

            this.$firebaseRefs.shoppingItem.set(copy);

            this.$router.push({ path: `/` });
        }
    },
    firebase() {
        return {
            shoppingItem: {
                source: db.ref('shopping-list').child(this.$route.params.id),
                asObject: true,
                cancelCallback: function () {

                },
                readyCallback: function () {
                    this.item = this.shoppingItem;
                }
            }
        }
    },
}
</script>
