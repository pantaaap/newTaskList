<template>
  <nav>
    <v-snackbar v-model="snakbar" :timeout="3000" top color="success"
      ><span> New Project Aded! </span>
      <v-btn
        elevation="0"
        class="transparent white--text overline"
        @click="snakbar = false"
        small
        >close</v-btn
      >
    </v-snackbar>

    <v-app-bar flat app class="secondary">
      <v-app-bar-nav-icon dark @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">todo</span>
        <span class="font-weight-bold">list</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            elevation="0"
            color="gray"
            dark
            class="mx-3"
            v-on="on"
            fab
            small
          >
            <span class="overline">Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn elevation="0" dark class="grey--text" small>
        <span>leave!</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-row>
        <v-col align="center" class="mt-5">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="white">
              <img src="/lila.png" />
            </v-avatar>
            <div class="subtitle white--text mt-1">Turanga Leela</div>
          </v-responsive>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <!-- <v-btn>click me!</v-btn>-->
          <popup @projectAdded="snakbar = true"></popup>
        </v-col>
      </v-row>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import popup from "./popup.vue";
export default {
  components: {
    popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My tasks", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
      snakbar: false,
    };
  },
};
</script>
