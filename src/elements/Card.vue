<template>
  <div class="relative lg:flex border-r border-b border-l border-t border-grey-light mr-8">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
      <img :src="imgSrc">
    </div>
    <outline-button
      title="Purchased"
      classes="purchased-btn bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent">
    </outline-button>

    <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <router-link tag="h3" :to="'/' + item['.key']">
            <a
                href="#"
                class="no-underline inline-block leading-none border rounded text-grey border-white hover:border-transparent hover:text-blue hover:bg-white mt-4 lg:mt-0">
                {{ item.name }}
            </a>
        </router-link>
        <p class="text-grey-darker text-base">{{ item.description }}</p>
      </div>
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink">
        <div class="text-sm">
          <p class="text-black leading-none">{{ user }}</p>
          <p class="text-grey-dark">Price: </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
    },
    item: {
      type: Object,
      default: () => ({
        name: '',
        description: '',
        files: []
      })
    },
    user: {
      type: String,
    },
    
  }
}
</script>
