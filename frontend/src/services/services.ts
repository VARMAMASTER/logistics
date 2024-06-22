import { http } from "./http";

export const Register = (data : any) => {
    return http.post(`/auth`, data);
  };