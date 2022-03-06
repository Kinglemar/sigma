<template>
  <div>
    <LoginNav />
    <Sidebar />
    <b-alert :show="show" class="alert" dismissible variant="primary">
      {{ message }}
    </b-alert>
    <b-alert :show="fail" class="alert" dismissible variant="danger">
      {{ message }}
    </b-alert>
    <div class="pt-4 mt-5 background">
      <h3 class="w-50 mb-3">View Marketing Consultant</h3>
      <div class="d-flex justify-content-center w- ml75-4">
        <b-avatar
          size="6rem"
          variant="success"
          :text="initials"
          class=""
        ></b-avatar>
      </div>

      <div class="pb-3">
        <router-link to="/Marketerpage">PROFILE</router-link>
      </div>
      <div class="bg">
        <form @submit.prevent="updateUserRecords" class="form-width">
          <b-overlay
            :show="processing"
            rounded="lg"
            opacity="0.91"
            variant="transparent"
            spinner-variant="success"
          >
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Name</p>
              <input v-model="name" type="text" />
            </div>

            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Username</p>
              <input v-model="username" type="text" />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Email</p>
              <input v-model="email" type="email" />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Phone Number</p>
              <input v-model="phonenumber" type="text" />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Account Name</p>
              <input type="text" v-model="accountName" />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Account Number</p>
              <input type="text" v-model="accountNumber" />
            </div>
            <div class="d-flex py-2 align-items-center justify-content-between">
              <p>Bank Name</p>
              <input type="text" v-model="bankname" />
            </div>
            <div class="d-flex pt-3 justify-content-between">
              <p class="pt-2">Address</p>
              <textarea p-4 v-model="address" rows="4" cols="35"> </textarea>
            </div>

            <div class="d-flex justify-content-end mt-5">
              <button>UPDATE MARKETER</button>
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
  name: "Marketerpage",
  components: {
    LoginNav,
    Sidebar,
  },
  data() {
    return {
      name: "",
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      gender: "",
      phonenumber: "",
      accountName: "",
      accountNumber: "",
      bankname: "",
      address: "",
      marketingconsultantid: "",
      initials: "",
      bankcode: "",

      message: "Marketer Updated",
      fail: false,
      show: false,
      processing: false,
    };
  },

  methods: {
    getUserWithId() {
      let userBio = sessionStorage.getItem("userDetails");
      let alter = JSON.parse(userBio);

      // setting data properties to be used for v-model
      this.username = alter[0].username;
      this.name = alter[0].name;
      this.firstname = alter[0].firstname;
      this.lastname = alter[0].lastname;
      this.email = alter[0].email;
      this.gender = alter[0].gender;
      this.phonenumber = alter[0].phonenumber;
      this.accountName = alter[0].account_name;
      this.accountNumber = alter[0].account_number;
      this.bankname = alter[0].bankname;
      // this.bankcode = alter[0].bankcode;
      this.address = alter[0].address;
      this.marketingconsultantid = alter[0].marketing_consultant_id;
      console;
      // logic to display this.initials
      let icon = `${
        alter[0].firstname.charAt(0) + "." + alter[0].lastname.charAt(0)
      }`;
      this.initials = icon;
    },

    async updateUserRecords() {
      this.processing = true;
      try {
        let response = await axios.put(
          "/marketers",
          {
            firstname: this.firstname,
            lastname: this.lastname,
            phonenumber: this.phonenumber,
            email: this.email,
            gender: this.gender,
            address: this.address,
            marketingConsultantId: this.marketingconsultantid,
            bankname: this.bankname,
            bankcode: this.bankcode,
            accountNumber: this.accountNumber,
            accountName: this.accountName,
          },
          {
            headers: {
              Authorization: localStorage.getItem("Sigma_Admin_Token"),
            },
          }
        );

        if (response.status === 200) {
          this.getUserDetails();
          this.message = response.data.message;
          this.show = true;
        }
      } catch (error) {
        if (error) {
          this.message = error.message;
          this.fail = true;
        }
      } finally {
        this.processing = false;
      }
    },

    async getUserDetails() {
      try {
        const query = await axios.get(
          `/marketers/${this.marketingconsultantid}`,
          {
            headers: {
              Authorization: localStorage.getItem("Sigma_Admin_Token"),
            },
          }
        );
        let response = query.data.marketer;

        sessionStorage.setItem("userDetails", JSON.stringify(response));
      } catch (error) {
        if (error) {
          return error.message;
        }
        if (error.request) {
          return error.request;
        }
      }
    },
  },

  mounted() {
    this.getUserWithId();
  },
};
</script>

<style scoped>
.bg {
  min-height: 46.5rem;
  padding-left: 30rem;
}

.background {
  background: #ecffeb;
}

h3 {
  color: #34b13c;
  margin-left: 24rem;
}

p {
  text-align: center;
  font-size: 14px;
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

a {
  margin-left: 17rem;
  text-decoration: none;
  padding: 1rem;
  border-bottom: 2px solid #9a6b61;
  color: #000700;
}
a:hover {
  text-decoration: none;
  color: #000700;
}
a:active {
  border-bottom: 2px solid #9a6b61;
  color: #000700;
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
  width: 340px;
  height: 3rem;
  position: absolute;
  top: 80px;
  margin: 0;
  left: 1000px;
}
</style>