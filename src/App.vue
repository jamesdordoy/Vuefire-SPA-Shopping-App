<template>
  <div id="app" class="min-h-screen flex flex-col ">
    <navigation>
    </navigation>
    <div class="flex-grow p-8 font-sans">
      <div class="container mx-auto pt-8 flex-1">
        <router-view>
        </router-view>
      </div>
    </div>
    <div class="footer pin-b w-100 bg-blue-dark p-8">
      <div class="flex mb-4">
        <div class="w-1/3 bg-grey-light h-12"></div>
        <div class="w-1/3 bg-grey h-12"></div>
        <div class="w-1/3 bg-grey-light h-12"></div>
      </div>
    </div>
  </div>
</template>

<script>

import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation,
  },
}
</script>
