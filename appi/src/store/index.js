import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    personajes: [],
    personajesFilter: [],
  },
  mutations: {
    setPersonajes(state, payload) {
      state.personajes = payload;
    },
    setPersonajesFilter(state, payload) {
      state.personajesFilter = payload;
    },
  },
  actions: {
    async getPersonajes({ commit }) {
      try {
        let response = await axios.get(
          "https://rickandmortyapi.com/api/character/?page='${i}'"
        );
        this.personajes = response.data;
        // Al iniciar la app me va a rrelenar las dos variables la de filter la usaremos para busquedas
        commit("setPersonajes", this.personajes.results);
        commit("setPersonajesFilter", this.personajes.results);
      } catch (error) {
        console.err(error);
      }
    },
  },

  modules: {},
});
