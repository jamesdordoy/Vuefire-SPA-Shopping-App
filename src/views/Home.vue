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
import { shoppingListReference } from '../firebase';

export default {
  name: 'Home',
  components: {
    ShoppingListItems,
  },
  firebase: {
    shoppingList: shoppingListReference
  },
  methods: {
    createItem(payload) {
      shoppingListReference.push(payload)
    }
  }
}
</script>
