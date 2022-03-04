<template>
  <div>
    <b-alert :show="show" class="alert" dismissible variant="danger">
      {{ message }}
    </b-alert>

    <div>
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        {{ message }}
      </b-alert>
    </div>
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
          <form @submit.prevent="loginUser" class="px-5">
            <!-- email address input field -->
            <div class="py-3 ml-4">
              <input
                type="text"
                v-model.trim="loginInputs.username"
                required
                placeholder="Username"
                class="forminputs px-3"
              />
            </div>

            <!-- password input field -->

            <div class="pt-3 pb-2 ml-4">
              <input
                type="password"
                v-model="loginInputs.password"
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
              <button :disabled="busy">
                <span v-if="busy">
                  <b-spinner
                    label="loading"
                    variant="info"
                    style="width: 2.5rem; height: 2.5rem"
                    class="text-center"
                  >
                  </b-spinner>
                </span>
                <span v-else> Log In </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import Loader from "../components/Loader.vue";

export default {
  name: "Home",
  mounted() {
    this.showAlert;
  },
  data() {
    return {
      loginInputs: {
        username: "",
        password: "",
      },
      busy: false,
      message: "",
      show: false,
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },

  methods: {
    ...mapActions({
      loginAdmin: "loginAdmin",
    }),
    async loginUser() {
      console.log("yay");
      this.busy = true;
      try {
        // call login function
        await this.loginAdmin(this.loginInputs);
        // redirect user
        // this.$router.push("/Dashboard");
      } catch (error) {
        // show error
        if (error === 400) {
          this.message = error.message;
          this.show = true;
        } else if (error) {
          this.message = error.request;
        } else {
          this.message = error;
        }
      } finally {
        this.busy = false;
      }
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
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
  height: 53px;
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

.alert {
  width: 300px;
  height: 3rem;
  position: absolute;
  bottom: 8px;
  margin: 0;
  left: 1020px;
}

.close {
  height: 2rem;
  outline: none;
  border: none;
}
</style>
