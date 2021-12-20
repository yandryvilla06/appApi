<template>
  <div class="p-10">
    <!--Card 1-->
    <!--Estamos usando el prop de personaje que viene de listCharacter-->
    <div class="max-w-sm rounded overflow-hidden shadow-lg" id="card">
      <div class="px-6 py-4">
        <div  class="flex justify-center" v-for="imagen in imagenes" :key="imagen.id" >
            <img   class=" mb-3 w-9/12" v-if="imagen.name==episodio.name" :src="imagen.src" />
        </div>
        <div class="font-bold text-xl mb-2 text-center text-red-500">
          {{ episodio.name }}
        </div>
        <div class="flex  flex-col justify-end font-bold text-base mb-2 gap-4">
          <div>
            <p>Episodio:{{ episodio.episode }}</p>
          </div>

          <div>
            <p>Fecha:{{ episodio.air_date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datos from "../assets/json/imagenes.json";
import { computed } from "vue";

export default {
  name: "#card",
  props: ["episodio"],
  setup(){

    const imagenes = computed(() => {
      return datos.map((item) => {
        return item;
      });
    });

    return {
      imagenes
    }

  }
};
</script>

<style></style>
