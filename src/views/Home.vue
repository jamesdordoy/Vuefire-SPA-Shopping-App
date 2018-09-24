<template>
  <div>
    <shopping-list-items>
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
  created: function() {
    
  },
  firebase: {
    shoppingList: shoppingListReference
  },
  methods: {
    create() {
      shoppingListReference.push({ 'hello': 'james' })
    }
  }
}
</script>
