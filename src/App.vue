<template>
  <v-app>
    <Drawer v-if="$route.path !== '/signin'" />
    <v-app-bar app clipped-left color="accent">
      <v-toolbar-title class="headline text-uppercase">
        <router-link tag="span" to="/" class="main-logo">
          <v-img src="@/assets/sm.svg" class="d-inline-flex mt-1" width="84px" height="62px"></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <v-icon>search</v-icon>
      </span>

      <v-menu v-model="menu" :close-on-content-click="false" :nudge-bottom="50" offset-y>
        <template v-slot:activator="{ on }">
          <div v-show="$route.path !== '/signin'" class="ml-4 mr-2 profile-image" v-on="on">
            <span>R</span>
          </div>
        </template>

        <v-card width="280px">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title my-n3">John Leider</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider class="mx-3"></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-icon>message</v-icon>
              </v-list-item-action>
              <v-list-item-title>Messages</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-icon>assignment</v-icon>
              </v-list-item-action>
              <v-list-item-title>My Tasks</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon>people</v-icon>
              </v-list-item-action>
              <v-list-item-title>Team</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <span class="primary--text body-2 mr-2" text @click="handleSignOut">Sign out</span>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Drawer: () => import("./components/Drawer")
  },
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true
    };
  },
  methods: {
    handleSignOut() {
      this.menu = false;
      setTimeout(() => {
        this.$router.push("/signin");
      }, 300);
    }
  }
};
</script>
<style lang="scss">
.profile-image {
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #aaaaaa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: white;
  cursor: pointer;
}

.main-logo {
  cursor: pointer;
  color: white;
}
</style>
