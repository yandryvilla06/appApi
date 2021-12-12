<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
      class="text-black text-2xl"
      v-for="personaje in personajes"
      :key="personaje.id"
    >
      <!-- el que va entre comillas es el personaje del v-for el otro viene de props de card  con esto rrecorrecorremos todos los personajes-->
      <card :personaje="personaje" />
      <!--Con esto le pasamos el prop de card a ListCharacters-->
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },

  setup() {
    const store = useStore();
    const personajes = computed(() => {
      // Pillamos la mutacion de personajes filter
      return store.state.personajesFilter;
    });

    onMounted(() => {
      store.dispatch("getPersonajes");
    });

    return {
      personajes,
    };
  },
};
</script>

<style></style>
