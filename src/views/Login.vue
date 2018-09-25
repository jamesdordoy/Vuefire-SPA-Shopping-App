<template>
  <div class="mx-auto">
    <login-form>
    </login-form>
  </div>
</template>

<script>

import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Login',
  props: {
    msg: String
  },
  components: {
    LoginForm,
  }
}
</script>
