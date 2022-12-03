import axios from "axios";

export default {
  getClients() {
    return axios.get('locakhost:3001/api/v1/client');
  }
}