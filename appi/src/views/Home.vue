<template>
  <div id="Home">
    <navbar />
    <search />
    <list-characters />
    <pagination />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import ListCharacters from "../components/ListCharacters.vue";
import Search from "../components/Search.vue";
import Pagination from "../components/Pagination.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    ListCharacters,
    Search,
    Pagination,
  },
};
</script>

<style scoped></style>
