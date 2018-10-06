<template>
  <div>
    <shopping-list-items
      @createItem="createItem"
      :items="shoppingList">
    </shopping-list-items>
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
  created() {
    // console.log(this.$options.name)
  },
  methods: {
    createItem(payload) {
      db.ref('shopping-list').push(payload)
    }
  }
}
</script>
