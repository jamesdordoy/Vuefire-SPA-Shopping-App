<template>
  <div>
    <create-form>
    </create-form>
  </div>
</template>

<script>

import CreateForm from './components/Form.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    CreateForm,
  }
}
</script>
