<template>
  <div>
    <LoginNav />
    <Sidebar />

    <div class="pt-4 mt-5 bg">
      <b-alert :show="success" class="alert" dismissible variant="primary">
        {{ message }}
      </b-alert>
      <div>
        <h2>Marketing Consultants</h2>
      </div>
      <div class="d-flex justify-content-end">
        <router-link to="/Newmarketer">
          <span
            class="iconify pb-1"
            data-icon="akar-icons:plus"
            style="color: white"
            data-width="24"
            data-height="24"
            data-rotate="90deg"
          ></span>
          Add New Marketing Consultants
        </router-link>
      </div>
      <b-card class="mt-5 p-0 border shadow">
        <div class="d-flex justify-content-end">
          <input placeholder="Search" type="search" />
          <span
            class="iconify lens"
            data-icon="ant-design:search-outlined"
            style="color: #5d5d5d"
            data-width="24"
            data-height="24"
          ></span>
        </div>
        <div class="header">
          <div class="row bold-head">
            <div class="col-sm-3 px-3 py-3">Name</div>
            <div class="col-sm-3 px-3 py-3">Email</div>
            <div class="col-sm-2 px-3 py-3">Phone</div>
            <div class="col-sm-2 px-3 py-3">Username</div>
            <div class="col-sm-1 px-3 py-3"></div>
            <div class="col-sm-1 px-3 py-3"></div>
          </div>

          <div
            v-for="data in datas"
            :key="data.index"
            class="body row click py-4 line mx-3"
            @click="getUserDetails(data.marketing_consultant_id)"
          >
            <div class="col-sm-3">{{ data.firstname }} {{ data.lastname }}</div>
            <div class="col-sm-3">{{ data.email }}</div>
            <div class="col-sm-2">{{ data.phonenumber }}</div>
            <div class="col-sm-2">{{ data.username }}</div>
            <div @click="deleteMarketer(data.username)" class="col-sm-1 point">
              <span
                class="iconify"
                data-icon="bxs:trash-alt"
                style="color: #ff4f4d"
                data-width="20"
                data-height="20"
              ></span>
            </div>
            <div class="col-sm-1">
              <span
                class="iconify"
                data-icon="ic:outline-navigate-next"
                style="color: #b16a68"
                data-width="24"
                data-height="24"
              ></span>
            </div>
          </div>
        </div>

        <div
          class="pagination d-flex align-items-center justify-content-end mt-4"
        >
          <div class="px-3">
            <p>Rows per page:</p>
          </div>
          <div class="d-flex">
            <select class="options pb-1" name="" id="">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <span class="caret">
              <span
                class="iconify"
                data-icon="ant-design:caret-down-filled"
                data-width="18"
                data-height="18"
              ></span>
            </span>
          </div>
          <div class="px-3">
            <p>1-3 of 3</p>
          </div>
          <div>
            <span class="px-3">
              <span
                class="iconify"
                data-icon="ic:baseline-navigate-next"
                style="color: #5d5d5d"
                data-width="24"
                data-height="24"
                data-rotate="180deg"
              ></span>
              <span
                class="iconify"
                data-icon="ic:outline-navigate-next"
                style="color: #5d5d5d"
                data-width="24"
                data-height="24"
              ></span>
            </span>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import LoginNav from "@/components/LoginNav.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    LoginNav,
    Sidebar,
  },

  mounted() {
    this.getAllUsers();
  },
  data() {
    return {
      datas: [],
      message: "",
      success: false,
    };
  },

  methods: {
    ...mapActions["getUser"],
    async getUserDetails(marketing_consultant_id) {
      console.log(marketing_consultant_id);

      try {
        const query = await axios.get(`/marketers/${marketing_consultant_id}`, {
          headers: {
            Authorization: localStorage.getItem("Sigma_Admin_Token"),
          },
        });
        let response = query.data.marketer;

        sessionStorage.setItem("userDetails", JSON.stringify(response));
        this.$router.push(`/marketerpage`);
      } catch (error) {
        if (error) {
          return error.message;
        }
        if (error.request) {
          return error.request;
        }
      }
    },
    async getAllUsers() {
      try {
        const query = await axios.get("/marketers", {
          headers: {
            Authorization: localStorage.getItem("Sigma_Admin_Token"),
          },
        });
        let response = query.data.marketers;

        this.datas = response;
      } catch (error) {
        if (error.response) {
          return error.response.data;
        }
        if (error.request) {
          return error.request;
        }
      }
    },

    async deleteMarketer(id) {
      try {
        let response = await axios.delete(`/marketers/${id}`, {
          headers: {
            Authorization: localStorage.getItem("Sigma_Admin_Token"),
          },
        });
        if (response.status === 200) {
          this.message = response;
          console.log(response.data);
          this.message = response.message;
          this.success = true;
          this.getAllUsers();
        }
      } catch (error) {
        this.message = error.message;
      }
    },
  },
};
</script>

<style scoped>
.bg {
  background: #ecffeb;
  height: 92vh;
  padding-left: 18rem;
  padding-right: 5rem;
}
.line {
  border-bottom: 1px solid #dfdfdf;
  /* margin: 0.7rem 1rem; */
}

.header .row {
  margin: 0 1rem;
  border-bottom: 1px solid #dfdfdf;
  color: #5d5d5d;
}

.click {
  cursor: pointer;
}
a {
  border: none;
  background: #039226;
  color: #fff;
  text-align: center;
  border-radius: 14px;
  text-decoration: none;
  width: 280px;
  padding: 4px 3px;
}

input {
  width: 32rem;
  height: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid #5d5d5d;
  outline: none;
}

.lens {
  position: relative;
  top: 5px;
  right: 20px;
  color: #5d5d5d;
}

.point {
  cursor: pointer;
}

.pagination p {
  font-size: 14px;
  margin: 0;
  text-align: center;
}

.options {
  width: 55px;
  outline: none;
  border: none;
  border-bottom: 1px solid #5d5d5d;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.btn-secondary {
  color: #fff;
  background-color: none;
  border-color: none;
}

.caret {
  position: relative;
  right: 20px;
  bottom: 2px;
}

.line .col {
  font-size: 14px;
}

.out {
  font-size: 14px;
}

.bold-head {
  font-weight: 600;
}

.alert {
  width: 300px;
  height: 3rem;
  position: absolute;
  top: 65px;
  margin: 0;
  left: 1040px;
}
</style>