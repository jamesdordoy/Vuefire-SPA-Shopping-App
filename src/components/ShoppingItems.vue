<template>
  <div>
    <h2 class="mb-6">Shopping List</h2>
    <ul class="list-reset">
        <shopping-list-item>
        </shopping-list-item>
    </ul>
  </div>
</template>

<script>

import ShoppingListItem from './ShoppingItem';

export default {
  name: 'HelloWorld',
  components: {
      ShoppingListItem
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
