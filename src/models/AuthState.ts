import User from "./User";

interface AuthState {
  user:         User    | null;  
  accessToken:  string  | null;
  refreshToken: string  | null;
  status:       string;
}

export default AuthState;