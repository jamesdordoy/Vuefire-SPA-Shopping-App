<template>
  <div class="w-full">
    <div class="clearfix">
      <h2 class="mb-6 float-left">Shopping List</h2>

      <outline-button
        @click="showModal = true"
        title="Create Shopping Item"
        classes="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded float-right">
      </outline-button>
    </div>
   
    <ul class="w-full list-reset">
      <shopping-list-item v-for="item in items" :key="item['.key']" :item="item">
      </shopping-list-item>
    </ul>

    <modal :show="showModal" @close="showModal = false">
      <h1 slot="header">Create a Shopping Item</h1>
      <div slot="body">
        <form>
          <form-group title="Name" for-id="name">
            <text-input v-model="payload.name">
            </text-input>
            <p v-if="!$v.payload.name.required" class="text-red text-xs italic">Please enter a Name.</p>
            <p v-if="!$v.payload.name.minLength" class="text-red text-xs italic">Name is too short</p>
          </form-group>
          <form-group title="Description" for-id="description">
            <textarea-input
              rows="5"
              v-model="payload.description">
            </textarea-input>
            <p v-if="!$v.payload.description.required" class="text-red text-xs italic">Please enter a Description</p>
            <p v-if="!$v.payload.description.minLength" class="text-red text-xs italic">Description is too short</p>
          </form-group>
        </form>
      </div>
      <div slot="footer">
        <button
          @click="createItem"
          :class="{ 'opacity-50 cursor-not-allowed': $v.$invalid }"
          :disabled="$v.$invalid"
          class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </div>
    </modal>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>

import ShoppingListItem from './ShoppingItem';
import Modal from './Modal';
import { required, minLength } from 'vuelidate/lib/validators';

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

      this.$snotify.success(this.payload.name, 'Created', {
        timeout: 2000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true
      });
    },
    deleteItem() {
      this.showModal = false;
      this.$emit("createItem", this.payload);

      this.$snotify.success('Example body content', 'Example title', {
        timeout: 2000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true
      });
    },
  },
  components: {
    ShoppingListItem,
    Modal,
  },
  validations: {
    payload: {
      name: {
        required,
        minLength: minLength(4)
      },
      description: {
        required,
        minLength: minLength(4)
      }
    }
  },
  props: {
    items: Array,
    default: () => ([])
  }
}
</script>