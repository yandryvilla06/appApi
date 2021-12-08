<template>
  <div id="Home">
    <navbar />
    <list-characters />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import ListCharacters from "../components/ListCharacters.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    ListCharacters,
  },
};
</script>

<style scoped></style>
