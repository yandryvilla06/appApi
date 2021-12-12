<template>
  <div class="flex justify-center space-x-1">
    <button
      href="#"
      v-on:click="nextPage()"
      class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
    >
      Previous
    </button>

    <button
      href="#"
      :v-model="page"
      v-on:click="nextPage()"
      class="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
    >
      Next
    </button>
    <a>{{ page }}</a>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {computed} from "vue";

export default {
  name: "Pagination",

  setup() {
    const store = useStore();

    const page = computed(() => {
      // Pillamos la mutacion de personajes filter
      return store.state.page;
    });

    

    return {
      page,
    };
  },
};
</script>

<style></style>
