<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/vote">Vote</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  background: #f8f8f8;
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
}

ul {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 16px;
}

.router-link-active {
  color: #ffcc00;
}
</style>
