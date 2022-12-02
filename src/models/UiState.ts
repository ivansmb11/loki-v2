import Route from "./Route";

interface UiState {
  alert: {
    message: string,
    show: boolean,
    type: string
  };
  loading: boolean;
  routeTo: Route;
}

export default UiState;