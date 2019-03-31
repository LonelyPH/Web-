<template>
  <div>
    <div>
      <h1>Router Basic -01</h1>
    </div>
    <router-link to="/about" class="list-group-item">About</router-link>
    <router-link to="/home" class="list-group-item">Home</router-link>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
