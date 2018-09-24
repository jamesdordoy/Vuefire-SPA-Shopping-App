<template>
  <div id="app">
    <navigation>
    </navigation>
    <div class="container mx-auto pt-8">
      <router-view>
      </router-view>
    <div>
      {{ names }}
    </div>
    </div>
  </div>
</template>

<script>

import Navigation from './components/Navigation';

import { namesRef } from './firebase';

export default {
  name: 'app',
  components: {
    Navigation,
  },
  created: function() {
    
  },
  firebase: {
    names: namesRef
  },
  methods: {
    create() {
      namesRef.push({ 'hello': 'james' })
    }
  }
}
</script>
