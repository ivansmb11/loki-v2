import { computed } from 'vue';
import { useStore } from 'vuex';

import UserLogin from '../models/UserLogin';

export const useAuth = () => {

  const store = useStore();
  
  const checkAuth = async() => {
    const resp = await store.dispatch( 'auth/checkAuth' );
    return resp;
  }

  const loginUser = async( user: UserLogin ) => {
    return await store.dispatch('auth/loginUser', user);
  }

  const logout = () => {
    store.commit( 'auth/logout' );
  }

  return {
    checkAuth,
    loginUser,
    logout,
    loggedUserId: computed(()=>store.getters['auth/loggedUserId']),
    loggedUserOwnerId: computed(()=>store.getters['auth/loggedUserOwnerId']),
  }

}