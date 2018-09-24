<template>
  <div id="app">
    <shopping-list-items>
    </shopping-list-items>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue'
import ShoppingListItems from './components/ShoppingItems';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Form,
    ShoppingListItems
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
