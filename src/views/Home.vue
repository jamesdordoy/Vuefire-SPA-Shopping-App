<template>
  <div>
    <shopping-list-items
      @createItem="createItem"
      :items="shoppingList">
    </shopping-list-items>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>

import ShoppingListItems from '../components/ShoppingItems';
import { db } from '../firebase';

export default {
  name: 'Home',
  components: {
    ShoppingListItems,
  },
  firebase: {
    shoppingList: db.ref('shopping-list')
  },
  methods: {
    createItem(payload) {
      db.ref('shopping-list').push(payload);

      this.$snotify.success(this.payload.name, 'Created', {
        timeout: 2000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true
      });
    }
  }
}
</script>
