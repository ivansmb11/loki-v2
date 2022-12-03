import axios from "axios";

export default {
  getClients() {
    return axios.get('http://localhost:3001/api/v1/client');
  }
}