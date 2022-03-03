<template>
  <div class="dashboard pt-4">
    <div class="">
      <h1 class="head-text mb-0 pt-4">PC</h1>
      <div class="d-flex align-items-center mt-2 pt-5 px-4">
        <span
          class="iconify"
          data-icon="fluent:grid-20-filled"
          style="color: #c4575d"
          data-width="24"
          data-height="24"
        ></span>
        <p class="m-0 pl-5">DASHBOARD</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* eslint-disable */
.head-text {
  letter-spacing: -8px;
  text-align: center;
  font-weight: 600;
  color: #34b13c;
}
.dashboard {
  z-index: 80;
  box-shadow: 2px 1px #d4e0d4;
  background-color: #fff;
  position: absolute;
  top: 0;
  width: 260px;
  height: 100vh;
  color: #5d5d5d;
}
</style>
