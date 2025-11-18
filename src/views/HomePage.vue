<template>
  <section class="home">
    <h1>Welcome to the Lays Configurator</h1>
    <p>Create, customize and vote for your own Lays flavour.</p>

    <router-link class="btn" to="/vote">Start Voting</router-link>
  </section>
</template>

<script setup>
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 80px auto;
  text-align: center;
}

.btn {
  background: #ffcc00;
  padding: 12px 20px;
  border-radius: 8px;
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #333;
  font-weight: 700;
  transition: 0.2s;
}

.btn:hover {
  background: #ffdb4d;
}
</style>
