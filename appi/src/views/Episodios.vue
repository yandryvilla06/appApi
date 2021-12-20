<template>
  <div id="Episodios">
    <navbar />
    <list-episodes />
    <pagination-episodes/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ListEpisodes from "../components/ListEpisodes.vue";
import PaginationEpisodes from "../components/PaginationEpisodes.vue"
export default {
  name: "#Episodios",
  components: {
    Navbar,
    ListEpisodes,PaginationEpisodes
  },
};
</script>

<style></style>
