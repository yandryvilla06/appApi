<template>
  <div class="flex items-center sm:justify-between justify-around mx-12">
    <div class="flex gap-2 text-sm e sm:text-xl font-mono font-medium">
      <div><button @click="filterStatus('Alive')">Vivos</button></div>
      <div><button @click="filterStatus('Dead')">Muertos</button></div>
      <div><button @click="filterStatus('Unknow')">Desconocidos</button></div>
    </div>
    <div class="flex border-2 rounded">
      <input
        type="text"
        v-model="pbuscar"
        @keyup="filter()"
        class="px-4 py-1 w-20 sm:w-60"
        placeholder="Buscar personaje.."
      />
      <button
        class="flex flex-col sm:flex-row items-center justify-center px-2 sm:px-4 border-l"
      >
        <svg
          class="flex w-3 h-3 sm:w-6 sm:h-6 text-gray-600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            class="flex"
            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const pbuscar = ref("");

    const filter = () => {
      store.dispatch("SearchByName", pbuscar.value);
    };

    const filterStatus = (status) => {
      store.dispatch("SearchByStatus", status);
    };

    return {
      pbuscar,
      filter,
      filterStatus,
    };
  },
};
</script>

<style></style>
