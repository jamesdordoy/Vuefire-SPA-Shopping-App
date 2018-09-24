<template>
  <div>
      <shopping-list-items>
      </shopping-list-items>
  </div>
</template>

<script>

import ShoppingListItems from './components/ShoppingItems';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ShoppingListItems,
  }
}
</script>
