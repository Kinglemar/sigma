import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const axios = require('axios');
export default new Vuex.Store({
  state: {
    adminDetails: {
      id: null,
      consultant_id: "",
      firstname: "",
      lastname: "",
      phone_number: "",
      email: "",
      profile_img_url: "",
      gender: "",
      address: "",
      dob: "",
      added_by: "",
      is_Admin: 0,
      date_created: ""
    }
  },
  mutations: {
    loginAdmin(payload) {

      // var data = '{\r\n    "username":"admin",\r\n    "password":"xor1gyrd"\r\n}';
      var data = payload
      console.log(data)
      var config = {
        method: 'post',
        url: '{{URL}}/consultant_auth',
        headers: {},
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  actions: {

  },
  modules: {},
});
