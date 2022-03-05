<template>
  <div class="">
    <b-navbar
      toggleable="lg"
      class="d-flex navbar justify-content-between align-items-center"
    >
      <div class="d-flex marginal">
        <span
          class="iconify mr-3 pipe"
          data-icon="octicon:three-bars-16"
          data-width="26"
          data-height="26"
          style="color: #af5e5d"
        ></span>
        <h5 class="m-0 pl-3">PEER COVER</h5>
      </div>
      <div class="d-flex">
        <div class="d-flex">
          <span
            class="iconify bell"
            data-icon="ant-design:bell-filled"
            data-width="22"
            data-height="24"
            style="color: #5d5d5d"
          ></span>
          <p class="red-dot m-0">0</p>
          <div class="profimgfull">
            <img :src="adminAvatar" alt="" />
          </div>
        </div>
        <p class="m-0 pt-1 profile-name">Hi, {{ adminName }}</p>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LoginNav",
  computed: {
    ...mapGetters(["adminName", "adminAvatar"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  position: absolute;
  z-index: 50;
  top: 0;
  /* background-color: rgb(105, 241, 230); */
  background: #fff;
  width: 100%;
  height: 60px;
}

.red-dot {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: #ee2b0f;
  text-align: center;
  text-justify: auto;
  position: relative;
  bottom: 5px;
  right: 13px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

h5 {
  color: #1c7e29;
  cursor: default;
  font-weight: 600;
}
p {
  text-align: center;
}
.profimgfull img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  right: 6px;
  cursor: pointer;
}

.marginal {
  margin-left: 14rem;
}
.bell {
  position: relative;
  top: 5px;
}
.pipe {
  cursor: pointer;
}
.profile-name {
  cursor: default;
}
</style>
