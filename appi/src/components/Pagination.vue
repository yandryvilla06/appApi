<template>
   <div class="flex  justify-center space-x-1">
    <button href="#" v-on:click="nextPage()" class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
        Previous
    </button>

    <button href="#" v-on:click="nextPage()" class="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
        Next
    </button>
</div>

</template>

<script>

import { useStore } from "vuex";

export default {

  name:"Pagination",

  setup(){

      const store = useStore();

      const nextPage=()=>{
          store.dispatch("Pagination")
      }

      return{
          nextPage
      }
  }

}
</script>

<style>

</style>