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
    <site-footer>
    </site-footer>
  </div>
</template>

<script>

import Navigation from './components/Navigation';
import SiteFooter from './components/Footer';

export default {
  name: 'app',
  components: {
    Navigation,
    SiteFooter
  },
}
</script>
