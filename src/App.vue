<template>
  <div id="app">
    <navigation>
    </navigation>
    <div class="container mx-auto pt-8">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>

import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation,
  }
}
</script>
