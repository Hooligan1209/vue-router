<template>
  <div>
    <h2>Home</h2>
    <p>Home route component!</p>
    <input type="text">
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news">News</router-link>
        </li>
        <li>
          <router-link to="/home/messages">Massages</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

    export default {

    }
</script>

<style>

</style>
