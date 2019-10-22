<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-toolbar color="accent" dark flat>
            <v-toolbar-title class="black--text headline font-weight-bold">Login</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-icon right color="black">person</v-icon>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              prepend-icon="mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              name="password"
              prepend-icon="lock"
              :rules="passRules"
              label="Password"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn
              :disabled="!valid"
              color="black"
              class="mr-2 px-3 white--text headline font-weight-black"
              height="44"
              @click="validate"
              ripple
            >Confirm</v-btn>
            <v-btn color="#fafafa" class="mr-2 headline px-3" height="44" @click="reset">Cancel</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      valid: false,
      password: "",
      passRules: [
        v => !!v || "password is required",
        v => (v && v.length >= 10) || "password must be at least 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$router.push("/");
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      //in case of force reset validation
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  font-family: "Fira Sans", sans-serif !important;
}
.v-card__actions {
  font-family: "Fira Sans", sans-serif;
  button {
    text-transform: capitalize !important;
  }
}
</style>