import { createStore } from 'vuex';
import auth from '../modules/auth/store';
import ui from './ui';


const store = createStore({
  modules: {
    auth,
    ui
  }
});

export default store;