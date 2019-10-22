<template>
  <v-navigation-drawer app clipped permanent class="navigation-drawer">
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
          <v-list-item-title class="title mb-3">Event Name</v-list-item-title>
          <v-list-item-subtitle class="subtitle-2 black--text mb-2">Momice</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list class="mt-7">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        tag="a"
        :to="item.link"
        exact-active-class="active"
        v-ripple="{ class: 'accent--text' }"
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
    <template v-slot:append>
      <v-divider></v-divider>
      <v-list class="mb-12">
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
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Website", icon: "language", link: "/" },
        { title: "Form", icon: "playlist_add_check", link: "/form" },
        { title: "Communication", icon: "mail", link: "/communication" },
        { title: "Contacts", icon: "account_box", link: "/contacts" }
      ],
      itemsBottom: [
        { title: "Main Settings", icon: "settings", link: "settings" },
        { title: "Notifications", icon: "notifications", link: "notification" }
      ]
    };
  },
  methods: {
    handleLink(item) {
      alert(item.link);
    }
  }
};
</script>

<style scoped lang="scss">
.navigation-drawer {
  padding-top: 60px;
  z-index: 4;
}
/* .v-list-item--active {
  color: black !important;
} */
.v-list-item {
  &:hover {
    &:before {
      background-color: #ffc107;
    }
  }
}
.active {
  &:before {
    background-color: #ffc107;
  }
}
</style>