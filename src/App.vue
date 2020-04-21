<template >
  <v-app>
    <navbar></navbar>
    <v-content class="grey lighten-2">
      <router-view class="mx-12 mb-10"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "App",

  components: {
    navbar
  },

  data: () => ({
    //
  })
};
</script>
