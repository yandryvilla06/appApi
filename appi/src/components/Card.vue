<template>

 
  <div class="p-10">  
    <!--Card 1-->
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="personaje.image" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-center text-red-500">{{personaje.name}}</div>
        <div class=" flex justify-around font-bold text-base mb-2 gap-4">
         
          <div><p>{{personaje.species}}</p></div>
         
          <div><p>{{personaje.gender}}</p></div>
           <div><p>{{personaje.status}}</p></div>
        </div>

        <div class=" flex justify-start font-bold text-base mb-2 gap-4">
          <div><h2>Origen:</h2></div>
          <div><p>{{personaje.origin.name}}</p></div>
        </div>

        <div class=" flex justify-start font-bold text-base mb-2 gap-4">
          <div><h2>Ultima vez visto:</h2></div>
          <div><p>{{personaje.location.name}}</p></div>
        </div>
        

      </div>
     
    </div>
  </div>

</template>

<script>
export default {


 props:['personaje']
}
</script>

<style>

</style>
