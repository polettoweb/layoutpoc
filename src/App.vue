<template>
  <v-app>
    <Drawer v-if="$route.path !== '/signin' && $route.path !== '/eventlaunched'" />
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
          <div
            v-show="$route.path !== '/signin' && $route.path !== '/eventlaunched'"
            class="ml-4 mr-2 profile-image"
            v-on="on"
          >
            <span>J</span>
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
    <div class="progress--bar d-flex align-center">
      <v-progress-linear color="#4fbf9f" v-model="progress"></v-progress-linear>
      <router-link :to="$route.path == '/contacts' ? '/eventlaunched' : ''">
        <v-img src="@/assets/launch.png"></v-img>
      </router-link>
    </div>
    <v-content>
      <v-container class="fill-height" fluid>
        <transition
          :name="$route.path == '/contacts' || $route.path == '/eventlaunched'? '': 'scrollY'"
        >
          <router-view />
        </transition>
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
  computed: {
    progress() {
      if (this.$route.path === "/") {
        return 25;
      } else if (this.$route.path == "/form") {
        return 50;
      } else if (this.$route.path == "/communication") {
        return 75;
      } else if (this.$route.path == "/contacts") {
        return 100;
      } else {
        return 0;
      }
    }
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

.progress--bar {
  position: absolute !important;
  width: 170px !important;
  right: 50px;
  bottom: 60px;
  z-index: 5;
}

.page {
  position: fixed;
  width: inherit;
}
// .scrollY {
//   transform: translateY(100%);
// }

// .scrollY-enter-active,
// .scrollY-leave-ative {
//   transition-property: all;
//   transition-duration: 1s;
//   transform: translateY(-100%);
// }

// .scrollY-enter,
// .scrollY-leave-active {
//   opacity: 0;
//   transform: translateY(0);
// }

.scrollY-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}

.scrollY-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
