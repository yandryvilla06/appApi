<template id="Navbar">
  <div class="flex justify-around sm:justify-between items-center m-8 ml-6">
    <div class="flex-shrink-0 h-12 w-16 sm:w-20 m-6">
      <img src="../assets/logo/rick.png" />
    </div>
    <div class="invisible md:visible sm:text-3xl text-green-900">
      <h1 class="rick">Rick and Morty</h1>
    </div>

    <div class="flex flex-row font-mono gap-3 text-base sm:text-xl">
      <router-link to="/">Personajes</router-link>
      <router-link to="/episodios">Episodios</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "#Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");

.rick {
  font-family: "Bungee Shade", cursive;
}
</style>
