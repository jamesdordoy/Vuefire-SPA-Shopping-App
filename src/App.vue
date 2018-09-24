<template>
  <div id="app">
    <navigation>
    </navigation>
    <div class="container mx-auto pt-8">
      <shopping-list-items>
      </shopping-list-items>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue'
import ShoppingListItems from './components/ShoppingItems';
import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Form,
    ShoppingListItems,
    Navigation
  }
}
</script>
