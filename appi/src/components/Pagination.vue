<template>
  <div class="flex justify-center space-x-1">
    <button
      href="#"
      v-on:click="nextPage()"
      class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
    >
      Siguiente
    </button>
    <a>{{data.page}}</a>
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
import { reactive } from "vue";

export default {
  name: "Pagination",

  setup() {
    const store = useStore();

    const data = reactive({
      page: store.state.page,
     
    });

    const nextPage = () => {
      if (data.page <= 42) 
      data.page++ 
       
       console.log(data.page);
   store.dispatch("getPersonajes",data.page);
      };


    const prevPage = () => {
      if ( data.page>= 2)
       data.page--;
        
      store.dispatch("getPersonajes",data.page);
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
