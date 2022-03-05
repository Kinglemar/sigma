import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminDetails: [],
    token: '',
    userDetails: []
  }
  ,
  mutations: {
    SET_DETAILS(state, response) {
      state.adminDetails = response
    },

    SET_TOKEN(state, token) {
      state.token = token
    },
  },
  actions: {
    async loginAdmin({ commit }, { username, password }) {
      try {
        let query = await axios.post('/consultant_auth', { "username": username, "password": password });
        const response = query.data
        if (query.status === 200) {
          localStorage.setItem('Sigma_Admin_Token', response.token)
          commit('SET_DETAILS', response)
          commit('SET_TOKEN', response.token)
        }

      } catch (error) {
        if (error.response) {
          return error.response.data;
        }
        else if (error.request) {
          return error.request;
        }
        return error
      }
    },

  },
  modules: {},
});
