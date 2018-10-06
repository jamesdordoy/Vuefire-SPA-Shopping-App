<template>
  <div>
    <shopping-list-items
      @createItem="createItem"
      :items="items">
    </shopping-list-items>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>

import ShoppingListItems from '../components/ShoppingItems';
import { db, storage } from '../firebase';

export default {
  data() {
    return {
      items: []
    };
  },
  name: 'Home',
  components: {
    ShoppingListItems,
  },
  firebase() {
    return {
      shoppingList: {
        source: db.ref('shopping-list'),
        cancelCallback: function () {
        },
        readyCallback: function () {

          this.items = this.shoppingList;

          this.items.forEach(item => {

            item.files.forEach(file => {
              storage.ref('images/' + item['.key'] + "/" + file.name)
              .getDownloadURL()
              .then(response => {

                console.log(response)
                item.files.push(response);
              });
            });
          });

          console.log(this.items);
        }
      }
      
    }
  },
  created() {
    //storage.ref('images/');

  },
  methods: {
    createItem(payload, files) {

      for (let i = 0; i < files.length; i++) {
        let uploadFile = files[i];
        payload.files.push({
          name: uploadFile.name
        });
      }

      db.ref('shopping-list')
      .push(payload)
      .then(response => {
        for (let i = 0; i < files.length; i++) {
          let uploadFile = files[i];
          storage.ref().child('images/' + response.key + '/' + uploadFile.name).put(uploadFile);
        }
      });

      this.$snotify.success(payload.name, 'Created', {
        timeout: 2000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true
      });
    }
  }
}
</script>
