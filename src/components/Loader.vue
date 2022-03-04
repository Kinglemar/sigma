<template>
  <div style="z-index: 1050 !important" v-if="show">
    <loader
      object="#ff9633"
      color1="#ffffff"
      color2="black"
      size="5"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="80"
      name="circular"
    ></loader>
  </div>
</template>
<script>
export default {
  name: "Preloader",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>