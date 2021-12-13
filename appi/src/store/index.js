import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    /*Creamos dos arrays el primero nos servira para obtener todos los personajes el 2 lo usaremos para las busquedas evitamos asi hacer 2 peticiones al server */

    personajes: [],
    personajesFilter: [],
   
    page: 1,
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
    async getPersonajes({ commit },page) {
      try {
        let response = await axios.get(
          "https://rickandmortyapi.com/api/character/",
          {
            params: {
              page: page,
            },
          }
        );
    
        this.personajes = response.data;
        // Al iniciar la app me va a rrelenar las dos variables la de filter la usaremos para busquedas por lo que se ira modificcando muchas veces es por eso que en el commit usamos los resultados de personajes
        commit("setPersonajes", this.personajes.results);
        commit("setPersonajesFilter", this.personajes.results);
      } catch (error) {
        console.err(error);
      }
    },
    async SearchByName({ commit, state }, pbuscar) {
      const formatName = pbuscar.toLowerCase();

      const results = state.personajes.filter((personaje) => {
        const personajeName = personaje.name.toLowerCase();

        if (personajeName.includes(formatName)) {
          return personaje;
        }
      });

      commit("setPersonajesFilter", results);
    },

   


  },

  modules: {},
});
