<template>
  <Events />
</template>

<script lang="ts">
import Events from "@/components/Events.vue";

export default {
  name: 'App',
  components: {
    Events
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  padding-top: 20px;
}
</style>
