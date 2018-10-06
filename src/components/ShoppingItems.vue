<template>
  <div class="w-auto">

    <div class="clearfix mb-4">

      <h2 class="mb-16 float-left">Shopping List</h2>

      <outline-button
        @click="showModal = true"
        title="Create Shopping Item"
        classes="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded float-right">
      </outline-button>
    </div>
   
    <ul class="flex list-reset">
      <shopping-list-item v-for="item in items" :key="item['.key']" :item="item">
      </shopping-list-item>
    </ul>

    <modal :show="showModal" @close="showModal = false">
      <h1 slot="header">Create a Shopping Item</h1>
      <div slot="body">
        <form @submit.prevent="createItem">
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
          <div v-for="name in fileNames" :key="name">
            <p>{{ name }}</p>
          </div>
          <form-group title="Files" for-id="files">
            <label for="files" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Files
            </label>
            <input type="file" @change="filesChanged" class="hidden" id="files" multiple>
          </form-group>
          <button
            type="submit"
            :class="{ 'opacity-50 cursor-not-allowed': $v.$invalid }"
            :disabled="$v.$invalid"
            class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </form>
      </div>
      <span slot="footer"></span>
    </modal>
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
        files: [],
      },
      files: [],
      fileNames: []
    };
  },
  components: {
    ShoppingListItem,
    Modal,
  },
  props: {
    items: Array,
    default: () => ([])
  },
  methods: {
    createItem() {
      this.showModal = false;

      for (let i = 0; i < this.files.length; i++) {
        let uploadFile = this.files[i];
        this.payload.files.push({
          name: uploadFile.name
        });
      }

      this.$emit("createItem", this.payload, this.files);

      this.payload.files = [];

      this.payload.name = '';
      this.payload.description = '';
      this.payload.files = [];
    },
    filesChanged(e) {
      this.files = e.target.files;

      for (let i = 0; i < this.files.length; i++) {
        let uploadFile = this.files[i];
        this.fileNames.push(uploadFile.name);
      }
    },
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
}
</script>