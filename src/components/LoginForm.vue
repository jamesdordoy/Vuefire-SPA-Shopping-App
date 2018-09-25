<template>
  <div>
    <div class="w-full m-auto max-w-xs">
      <h2 class="my-20 text-center">Login to Simple Shopping</h2>
      <form class="rounded px-8 pb-8 mb-4">
        <div class="mb-4">
          <form-group title="Username" for-id="username">
            <text-input id="username" v-model="payload.username">
            </text-input>
          </form-group>
        </div>
         <div class="mb-4">
          <form-group title="Password" for-id="password">
            <password-input id="password" v-model="payload.password">
            </password-input>
          </form-group>
        </div>
        <div class="flex items-center justify-between">
          <button @click="login" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-grey text-xs">
        &copy;2018 James Dordoy
      </p>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebase';

export default {
  data() {
    return {
      payload: {
        username: '',
        password: '',
      },
      user: {}
    };
  },
  name: 'LoginForm',
  props: {
    
  },
  created() {
    
  },
  methods: {
    login() {
      auth.signInWithEmailAndPassword(this.payload.username, this.payload.password)
      .then(response => {
        this.$router.go({ path: '/' });
      })
      .catch(error => {
        if (error.code == "auth/wrong-password") {
          alert("Incorrect Password");
        }
      });
    }
  }
}
</script>
