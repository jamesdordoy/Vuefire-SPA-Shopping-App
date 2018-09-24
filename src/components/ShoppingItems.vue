<template>
  <div class="w-full">
    <div class="clearfix">
      <h2 class="mb-6 float-left">Shopping List</h2>

      <outline-button
        @click="showModal = true"
        title="Create Shopping Item"
        classes="float-right">
      </outline-button>
    </div>
   
    <ul class="w-full list-reset">
      <shopping-list-item v-for="item in items" :key="item['.key']" :item="item">
      </shopping-list-item>
    </ul>

    <modal :show="showModal" @submit="createItem" @close="showModal = false">
      <h1 slot="header">Create a Shopping Item</h1>
      <div slot="body">
        <form>
          <form-group title="Name" for-id="name">
            <text-input v-model="payload.name">
            </text-input>
          </form-group>
          <form-group title="Description" for-id="description">
            <text-input v-model="payload.description">
            </text-input>
          </form-group>
        </form>
      </div>
    </modal>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>

import ShoppingListItem from './ShoppingItem';
import Modal from './Modal';

export default {
  name: 'ShoppingList',
  data: function() {
    return {
      showModal: false,
      payload: {
        name: '',
        description: '',
      }
    };
  },
  methods: {
    createItem() {
      this.showModal = false;
      this.$emit("createItem", this.payload);

      this.$snotify.success('Example body content', 'Example title', {
        timeout: 2000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true
      });
    }
  },
  components: {
    ShoppingListItem,
    Modal,
  },
  props: {
    items: Array,
    default: () => ([])
  }
}
</script>