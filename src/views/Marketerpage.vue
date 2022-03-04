<template>
  <div>
    <LoginNav />
    <Sidebar />
    <div class="pt-4 mt-5 background">
      <h3 class="w-50 mb-0">View Marketing Consultant</h3>
      <div class="d-flex justify-content-center w-75 ml-auto">
        <b-avatar size="8rem" variant="success" text="B.V" class=""></b-avatar>
      </div>

      <div>
        <router-link to="/Marketerpage">PROFILE</router-link>
      </div>
      <div class="bg">
        <form class="form-width">
          <div class="d-flex py-2 align-items-center justify-content-between">
            <p>Firstname</p>
            <input placeholder="Adeleke" v-model="firstname" type="text" />
          </div>
          <div class="d-flex py-2 align-items-center justify-content-between">
            <p>Lastname</p>
            <input placeholder="Abiodun" v-model="lastname" type="text" />
          </div>
          <div class="d-flex py-2 align-items-center justify-content-between">
            <p>Username</p>
            <input placeholder="Jendel" v-model="username" type="text" />
          </div>
          <div class="d-flex py-2 align-items-center justify-content-between">
            <p>Phone No</p>
            <input
              placeholder="08100000000"
              v-model="phonenumber"
              type="text"
            />
          </div>
          <div class="d-flex py-2 align-items-center justify-content-between">
            <p>Email</p>
            <input
              placeholder="jendel@gmail.com"
              v-model="email"
              type="email"
            />
          </div>
          <div class="d-flex py-2 align-items-center justify-content-between">
            <p>Gender</p>
            <!-- <input type="text" /> -->
            <select name="" v-model="gender" id="">
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
              v-model="address"
              rows="4"
              cols="35"
            >
            </textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginNav from "../components/LoginNav.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "Marketerpage",
  components: {
    LoginNav,
    Sidebar,
  },
};
</script>

<style scoped>
.bg {
  height: 92vh;
  padding-left: 35rem;
  /* padding-right: 5rem; */
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
  margin-left: 22rem;
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
</style>