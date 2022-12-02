import UiState from "../../models/UiState";

export const routeTo = ( state: UiState ) => {
  return state.routeTo;
}

export const getLoading = ( state: UiState ) => {
  return state.loading;
}

export const getAlert = ( state: UiState ) => {
  return state.alert;
}
