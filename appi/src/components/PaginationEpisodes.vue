<template>
  <div class="flex justify-center space-x-1">
    <button
      href="#"
      v-on:click="nextPage()"
      class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 hover:bg-blue-400 rounded-md"
    >
      Siguiente
    </button>
    <a class="rounded bg-red-500 px-4 py-1 text-xl">{{ data.page }}</a>
    <button
      href="#"
      v-on:click="prevPage()"
      class="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
    >
      Anterior
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, computed } from "vue";

export default {
  name: "Pagination",

  setup() {
    const store = useStore();

    const data = reactive({
      page: store.state.page,
    });

    const nextPage = () => {
      if (data.page <= pages.value) data.page++;

      store.dispatch("getEpisodios", data.page);
    };

    const pages = computed(() => {
      // Pillamos la mutacion de pages y la devolvemos
      return store.state.pages;
    });

    const prevPage = () => {
      if (data.page >= 2) data.page--;

      store.dispatch("getEpisodios", data.page);
    };

    return {
      data,
      nextPage,
      prevPage,
    };
  },
};
</script>

<style></style>