<template>
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Email</th>
          <th scope="col">Teléfono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in clients">
          <td>{{ client.firstName }}</td>
          <td>{{ client.lastName }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.mobilePhone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import ClientService from '../services/ClientService';
import Client from '../../../models/Client';

export default {
  data() {
    return {
      clients: []
    }
  },
  methods: {
    async getClients() {
      ClientService.getClients().then((response) => {
        if (response.status === 200) {
          this.clients = response.data;
        }
      });
    }
  },
  created() {
    this.getClients();
  },
}
</script>