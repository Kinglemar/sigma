import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminDetails: {},
    token: '',
    detailFromStorage: JSON.parse(localStorage.getItem('admin_informations'))
  }
  ,
  getters: {

    // get admin informations to display on navbar
    adminName: state => {
      return state.detailFromStorage.firstname
    },
    adminAvatar: state => {
      return state.detailFromStorage.profile_img_url
    }
  },
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
          localStorage.setItem('admin_informations', JSON.stringify(response))
          commit('SET_DETAILS', response)
          commit('SET_TOKEN', response.token)
        }

        return query.status

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
