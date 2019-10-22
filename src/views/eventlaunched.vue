<template>
  <p class="text-center ma-auto headline">Your event has been successfully launched, congrats !!</p>
</template>

<script>
export default {
  name: "launchsuccess",
  mounted() {
    setTimeout(() => {
      this.$router.push("/");
    }, 2000);
  }
};
</script>

<style scoped>
@keyframes going {
}
@keyframes coming {
}
</style>