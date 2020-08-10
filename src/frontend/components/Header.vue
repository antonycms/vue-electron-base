<template>
  <v-app-bar app color="primary" dark>
    <ul class="nav-items">
      <router-link exact-active-class="btn-active" class="btn" tag="li" to="/">Home</router-link>
      <router-link exact-active-class="btn-active" class="btn" tag="li" to="/about">About</router-link>
    </ul>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.nav-items {
  list-style: none;
  display: flex;
}

.btn {
  cursor: pointer;
  color: white;
  margin: 0 10px;
  font-weight: bold;
}

.btn-active {
  color: rgb(0, 0, 0);
}
</style>
