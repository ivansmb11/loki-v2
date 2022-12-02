import { computed } from 'vue';
import { useStore } from 'vuex';
export const useUi = () => {

  const store = useStore();

  const setLoading = ( loading: boolean ) => {
    store.dispatch( 'ui/setLoading', loading );
  }

  const setAlertMessage = ( message: string, type: string ) => {
    store.dispatch( 'ui/setAlertMessage', { message, type });
  }

  return {
    setAlertMessage,
    setLoading,
    alert: computed(() => store.getters['ui/getAlert']),
    loading: computed(() => store.getters['ui/getLoading']),
    routeTo: computed(() => store.getters['ui/routeTo'])
  }
}