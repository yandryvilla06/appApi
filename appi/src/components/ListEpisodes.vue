<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
      class="text-black text-2xl"
      v-for="episodio in episodios"
      :key="episodio.id"
    >
      <card-episode :episodio="episodio"  />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import CardEpisode from "../components/CardEpisode.vue";

export default {
  components: { CardEpisode },
  setup() {
    const store = useStore();
    const episodios = computed(() => {
      return store.state.episodiosFilter;
    });



    onMounted(() => {
      store.dispatch("getEpisodios");
    });

    return {
      episodios,
    
    };
  },
};
</script>

<style></style>
