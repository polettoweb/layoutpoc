<template>
  <v-app>
    <v-app-bar-nav-icon
      v-if="$route.path !== '/signin' && $route.path !== '/eventlaunched'"
      class="ml-2 mt-2"
      color="white"
      style="z-index: 6"
      @click="sideNav = !sideNav"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-if="$route.path !== '/signin' && $route.path !== '/eventlaunched'"
      app
      clipped
      v-model="sideNav"
      class="navigation-drawer"
    >
      <template v-slot:prepend>
        <v-list-item>
          <img
            width="48px"
            height="48px"
            class="mb-5"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            style="border-radius: 50%"
          />
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title mb-3">
              Robin Fransz
              <v-icon class="ml-12 pl-6">arrow_drop_down</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>

      <v-list class="mt-7 mx-2" dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          tag="a"
          @click="handleLink(item)"
          color="info"
          exact-active-class="active"
          v-ripple="{ class: 'info--text' }"
        >
          <!--@click-->
          <v-list-item-icon>
            <v-icon width="18px">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="subtitle-2">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list class="mb-12 mx-2">
        <v-list-item>
          <span class="body-2" color="secondary">Settings</span>
        </v-list-item>
        <v-list-item
          v-for="item in itemsBottom"
          :key="item.title"
          tag="a"
          @click.prevent="handleLink(item)"
        >
          <!--@click-->
          <v-list-item-icon>
            <v-icon width="18px">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="subtitle-2">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template slot:append>
        <v-list class="mx-2">
          <v-list-item>
            <span class="body-2" color="secondary" @click="handleSignOut()">Signout</span>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      v-if="$route.path !== '/signin' && $route.path !== '/eventlaunched'"
      app
      clipped-left
      color="accent"
    >
      <v-spacer></v-spacer>
      <v-col cols="6">
        <v-tabs class="ml-12" background-color="transparent" slider-color="black" fixed-tabs>
          <v-tab>Workspace</v-tab>
          <v-tab>Events</v-tab>
          <v-tab>Contacts</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="6"></v-col>
      <template v-slot:extension>
        <v-tabs class="ml-12" background-color="transparent" slider-color="black">
          <v-tab to="/">Website</v-tab>
          <v-tab to="/form">Forms</v-tab>
          <v-tab to="/communication">E-mail</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <div
      v-if="$route.path !== '/signin' && $route.path !== '/eventlaunched'"
      class="progress--bar d-flex align-center"
    >
      <v-progress-linear color="#4fbf9f" v-model="progress"></v-progress-linear>
      <router-link :to="$route.path == '/communication' ? '/eventlaunched' : ''">
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
  name: 'App',
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      sideNav: false,
      items: [
        { title: 'Overview', icon: 'dashboard', link: 'Overview' },
        { title: 'Messages', icon: 'message', link: 'Messages' },
        { title: 'My Tasks', icon: 'assignment', link: 'My Tasks' },
        { title: 'Team', icon: 'people', link: 'Team' },
      ],
      itemsBottom: [
        { title: 'Main Settings', icon: 'settings', link: 'settings' },
        { title: 'Notifications', icon: 'notifications', link: 'notification' },
      ],
    }
  },
  computed: {
    progress() {
      if (this.$route.path === '/') {
        return 25
      } else if (this.$route.path == '/form') {
        return 75
      } else if (this.$route.path == '/communication') {
        return 100
      } else {
        return 0
      }
    },
  },
  methods: {
    handleSignOut() {
      this.menu = false
      setTimeout(() => {
        this.$router.push('/signin')
      }, 300)
    },
    handleLink(item) {
      alert(item.link)
    },
  },
}
</script>
<style lang="scss" scoped>
.navigation-drawer {
  padding-top: 60px;
  z-index: 4;
}

.v-list-item {
  &:hover {
    &:before {
      background-color: #2196f3;
    }
  }
}
.active {
  &:before {
    background-color: #2196f3;
  }
}
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

.scrollY-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}

.scrollY-leave-active {
  animation: going 1s;
}

.v-tab--active {
  color: black !important;
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
