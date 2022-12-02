<script setup lang="ts">
import { useStore } from 'vuex';
import { useAuth } from '../../../hooks/useAuth';
import router from '../../../router/index';
const store = useStore();
const { logout } = useAuth();
const onLogout = () => {
  store.dispatch('ui/setRouteTo', null);
  logout();
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Espacio Bello</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link :to="{ name: 'Clients' }" class="nav-link">Clientes</router-link>
        <router-link :to="{ name: 'Cotizacion' }" class="nav-link">Crear Cotización</router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
a {
  color: white;
}
</style>