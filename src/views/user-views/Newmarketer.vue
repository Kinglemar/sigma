<template>
  <div>
    <LoginNav />
    <Sidebar />
    <b-alert :show="fail" class="alert" dismissible variant="danger">
      {{ message }}
    </b-alert>
    <b-alert :show="success" class="alert" dismissible variant="primary">
      {{ message }}
    </b-alert>
    <div class="pt-5 mt-5 bg">
      <h3>Register Marketing Consultant</h3>
      <div>
        <!-- event handler to create new user -->
        <form @submit.prevent="createNewUser" class="form-width">
          <b-overlay
            :show="show"
            rounded="lg"
            opacity="0.91"
            variant="transparent"
            spinner-variant="success"
          >
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Firstname</p>
              <input
                placeholder="Adeleke"
                v-model="formData.firstname"
                type="text"
                required
              />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Lastname</p>
              <input
                placeholder="Abiodun"
                v-model="formData.lastname"
                type="text"
                required
              />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Username</p>
              <input
                placeholder="Jendel"
                v-model="formData.username"
                type="text"
                required
              />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Phone No</p>
              <input
                placeholder="08100000000"
                v-model="formData.phonenumber"
                type="text"
                required
              />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Email</p>
              <input
                placeholder="jendel@gmail.com"
                v-model="formData.email"
                type="email"
                required
              />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Gender</p>
              <!-- <input type="text" /> -->
              <select name="" v-model="formData.gender" id="" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div class="d-flex pt-3 justify-content-between">
              <p class="pt-2">Address</p>
              <textarea
                p-4
                placeholder="Enter Address"
                v-model="formData.address"
                rows="4"
                cols="35"
                required
              >
              </textarea>
            </div>

            <div class="d-flex justify-content-end mt-5">
              <button>CREATE MARKETER</button>
            </div>
          </b-overlay>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoginNav from "../../components/LoginNav.vue";
import Sidebar from "../../components/Sidebar.vue";
export default {
  name: "Newmarketer",
  components: {
    LoginNav,
    Sidebar,
  },
  data() {
    return {
      formData: {
        addedBy: "admin",
        firstname: "",
        lastname: "",
        username: "",
        phonenumber: "",
        email: "",
        gender: "",
        address: "",
      },
      show: false,
      fail: false,
      success: false,
      message: "",
    };
  },

  methods: {
    //logic to make request and create a new user
    async createNewUser() {
      this.show = true;
      try {
        let response = await axios.post("/marketers", this.formData, {
          headers: {
            Authorization: localStorage.getItem("Sigma_Admin_Token"),
          },
        });

        //successful request
        if (response.status === 201) {
          this.message = response.data.message;
          this.success = true;
        }

        //catch error
      } catch (error) {
        if (error.status === 400) {
          this.message = error.message;
          this.fail = true;
        }
        if (error.status === 503) {
          this.message = error.message;
          this.fail = true;
        }
      } finally {
        this.formData = {};
        this.show = false;
      }
    },
  },
};
</script>

<style scoped>
.bg {
  background: #ecffeb;
  min-height: 59.5rem;
  padding-left: 22rem;
  padding-right: 5rem;
}

h3 {
  color: #34b13c;
}

p {
  text-align: center;
}
.form-width {
  max-width: 500px;
}

.form-width input {
  width: 303px;
  height: 35px;
  border: none;
  outline: none;
  padding: 0 0.8rem;
  color: #5d5d5d;
}
select {
  width: 303px;
  height: 35px;
  border: none;
  outline: none;
  padding: 0 0.8rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: #5d5d5d;
  background-color: #fff;
}

option {
  position: absolute;
  background-color: #fff;
  border: none;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  outline: none;
  color: #5d5d5d;
}

textarea {
  width: 303px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: #fff;
  border: none;
  outline: none;
  padding: 1rem;
  color: #5d5d5d;
}

button {
  width: 303px;
  height: 35px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  border: none;
  background-color: #00932b;
  border-radius: 3px;
  border: 1px solid none;
}

.alert {
  width: 300px;
  height: 3rem;
  position: absolute;
  top: 80px;
  margin: 0;
  left: 1020px;
}
</style>