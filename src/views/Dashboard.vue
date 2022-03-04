<template>
  <div>
    <LoginNav />
    <Sidebar />

    <div class="pt-4 mt-5 bg">
      <div>
        <h2>Marketing Consultants</h2>
      </div>
      <div class="d-flex justify-content-end">
        <router-link to="/New-marketer">
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
            <div class="col px-3 py-3">Name</div>
            <div class="col px-3 py-3">Email</div>
            <div class="col px-3 py-3">Phone</div>
            <div class="col px-3 py-3">Username</div>
            <div class="col px-3 py-3"></div>
            <div class="col px-3 py-3"></div>
          </div>

          <div
            v-for="(data, index) in datas"
            :key="index"
            class="body row py-4 line mx-3"
          >
            <div class="col">Name</div>
            <div class="col">Email</div>
            <div class="col">Phone</div>
            <div class="col">Username</div>
            <div class="col">
              <span
                class="iconify"
                data-icon="bxs:trash-alt"
                style="color: #ff4f4d"
                data-width="20"
                data-height="20"
              ></span>
            </div>
            <div class="col">
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
import LoginNav from "@/components/LoginNav.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    LoginNav,
    Sidebar,
  },
  data() {
    return {
      datas: [1, 2, 3],
    };
  },
};
</script>

<style scoped>
.bg {
  background: #ecffeb;
  height: 92vh;
  padding-left: 20rem;
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
  width: 45vw;
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

.bold-head {
  font-weight: 600;
}
</style>