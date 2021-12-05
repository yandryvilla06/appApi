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
    setPersonesFilter(state, payload) {
      state.personajesFilter = payload;
    },
  },
  actions: {
    async getPersonajes({ commit }) {
      try {
        let response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        this.personajes = response.data;
        commit("setPersonajes", this.personajes.results);
      } catch (error) {
        console.err(error);
      }
    },
  },
  modules: {},
});
