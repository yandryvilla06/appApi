<template>
  <div id="Home">
    <navbar />
    <card />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Card,
  },
};
</script>

<style scoped></style>
