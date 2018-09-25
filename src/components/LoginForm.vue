<template>
  <div>
    <div class="w-full m-auto max-w-xs">
      <h2 class="mb-10 text-center">Login to Simple Shopping</h2>
      <form class="rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <form-group title="Username" for-id="username">
            <text-input v-model="payload.username">
            </text-input>
          </form-group>
        </div>
         <div class="mb-4">
          <form-group title="Password" for-id="password">
            <text-input v-model="payload.password">
            </text-input>
          </form-group>
        </div>
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          <p class="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-grey text-xs">
        ©2018 James Dordoy
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        username: '',
        password: '',
      }
    };
  },
  name: 'LoginForm',
  props: {
    
  }
}
</script>
