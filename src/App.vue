<template>
  <v-app>
    <Drawer />
    <v-app-bar app clipped-left color="accent">
      <v-toolbar-title class="headline text-uppercase">
        <span>MOMICE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <v-icon>search</v-icon>
      </span>
      <span class="ml-4 mr-2 profile-image"></span>
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
  data: () => ({
    //
  })
};
</script>
<style lang="scss">
.profile-image {
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #aaaaaa;
}
</style>
