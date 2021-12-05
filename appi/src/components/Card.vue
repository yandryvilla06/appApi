<template>
  <h1>{{personajes}}</h1>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
export default {
  setup() {
    const store = useStore();
    const personajes = computed(() => {
      return store.state.personajes;
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
