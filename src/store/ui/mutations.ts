import Route from '../../models/Route';
import UiState from '../../models/UiState';

export const setRouteTo = ( state: UiState, routeTo: Route ) => {
  state.routeTo = routeTo;
}

export const setLoading = ( state: UiState, loading: boolean ) => {
  state.loading = loading;
}

export const setAlertMessage = ( state: UiState, { message = '', type = '' }) => {
  state.alert = {
    show: true,
    message,
    type
  }
  setTimeout(() => {
    state.alert = {
      show: false,
      message: '',
      type: ''
    }
  }, 3000);
}
