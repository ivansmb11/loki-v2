<template>
  <div>
    <button class="mb-3 btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear cliente</button>
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
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Crear Cliente</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="text-start d-flex justify-content-center">
      <div class="w-md-75">
        <div class="row mb-4">
          <div class="col">
            <label for="firstName" class="form-label">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              v-model="newClient.firstName"
            >
          </div>
          <div class="col">
            <label for="lastName" class="form-label">Apellido</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              v-model="newClient.lastName"
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="email" class="form-label">Correo electrónico</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="newClient.email"
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="phone" class="form-label">Teléfono Móvil</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              v-model="newClient.mobilePhone"
            >
          </div>
          <div class="col">
            <label for="phone" class="form-label">Teléfono Casa</label>
            <input
              type="text"
              class="form-control"
              id="password"
              v-model="newClient.homePhone"
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="address" class="form-label">Dirección</label>
            <input
              type="text"
              class="form-control"
              id="address"
              v-model="newClient.address"
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="city" class="form-label">Ciudad</label>
            <input
              type="text"
              class="form-control"
              id="city"
              v-model="newClient.city"
            >
          </div>
          <div class="col">
            <label for="state" class="form-label">Estado</label>
            <input
              type="text"
              class="form-control"
              id="state"
              v-model="newClient.state"
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="city" class="form-label">zip</label>
            <input
              type="text"
              class="form-control"
              id="zip"
              v-model="newClient.zip"
            >
          </div>
          <div class="col">
            <label for="state" class="form-label">País</label>
            <input
              type="text"
              class="form-control"
              id="country"
              v-model="newClient.country"
            >
          </div>
        </div>
      </div>
    </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="createClient(newClient)">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import clientApi from '../../../api/clientApi';
import Client from '../../../models/Client';

export default {
  data() {
    return {
      clients: [] as Client[],
      newClient: {} as Client,
    }
  },
  methods: {
    async getClients() {
      const { data } = await clientApi.get('');
      this.clients = data;
    },
    async createClient(client: Client) {
      try {
        await clientApi.post('', client);
        return { ok: true, message: 'El cliente ya está disponible' }
      } catch ( error ) {
        if ( axios.isAxiosError( error ) ) {
          const { message } = error.response?.data as any || 'Ha ocurrido un error';
          return { ok: false, message };
        } else {
          return { ok: false, message: 'Ha ocurrido un error' };
        }
      }
      
    }
  },
  created() {
    this.getClients();
  },
}
</script>