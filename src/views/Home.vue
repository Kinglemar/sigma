<template>
  <div>
    <div class="home d-flex">
      <!-- green background -->
      <div class="first-half container p-5">
        <div class="p-5 my-5">
          <h4 class="pt-5 pb-4">PEERCOVER</h4>
          <div>
            <h4>Car</h4>
            <h4 class="pb-5">Insurance</h4>
          </div>
          <div>
            <h4>Prices from</h4>
            <h3>N10,000</h3>
          </div>
        </div>
      </div>

      <!-- login input fields -->
      <div class="second-half container pb-5 pt-4">
        <h3 class="pt-5 pb-4">WELCOME BACK</h3>
        <div class="px-5">
          <p class="px-5 py-4 ml-4">Input your details to proceed</p>
          <form @submit.prevent="loginHandler(login)" class="px-5">
            <!-- email address input field -->
            <div class="py-3 ml-4">
              <input
                type="email"
                v-model="login.email"
                required
                placeholder="Email Address"
                class="forminputs px-3"
              />
            </div>

            <!-- password input field -->

            <div class="pt-3 pb-2 ml-4">
              <input
                type="password"
                v-model="login.password"
                required
                placeholder="Password"
                class="forminputs px-3"
              />
            </div>
            <div class="d-flex justify-content-left">
              <router-link class="gap" to="/">Forgot Password?</router-link>
            </div>

            <!-- login button -->
            <div class="ml-4">
              <button>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// const axios = require("axios");

export default {
  name: "Home",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["loginAdmin"]),
    loginHandler: function (payload) {
      console.log(payload.email);
      this.loginAdmin(payload);
    },
  },
};
</script>

<style scoped>
.first-half {
  background-color: #00932b;
  height: 41.7rem;
  color: #fffbff;
}

.first-half h3,
h4 {
  margin: 0;
  font-weight: 600;
  letter-spacing: 2px;
}

.second-half h3 {
  color: #008f26;
  margin: 0;
  font-weight: 600;
  text-align: center;
}

.second-half p {
  color: 606060;
  font-size: 18px;
  margin: 0;
}

.forminputs {
  width: 30vw;
  height: 50px;
  font-family: "Roboto", sans-serif;
  border-radius: 3px;
  font-weight: 500;
  border: 2px solid #5d5d5d;
  color: #5d5d5d;
}

/* .forminputs::placeholder {
  font-family: "Roboto", sans-serif;
} */

button {
  background-color: #00932b;
  border-radius: 3px;
  border: 1px solid none;
  border: none;
  width: 30vw;
  height: 50px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  cursor: pointer;
  margin-top: 1.5rem;
}

a {
  color: #208444;
  text-align: end;
  font-weight: 500;
  width: 32vw;
  /* margin-bottom: 5rem; */
}
a:hover {
  text-decoration: none;
}
</style>
