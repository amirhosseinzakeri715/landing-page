import { login, signUp } from "./users.api"
import { useMutation } from "@tanstack/react-query"

export const useLogin= () =>{
  return useMutation({ mutationFn: login, mutationKey: ["login"] });
}
export const useSignUp= () =>{
  return useMutation({ mutationFn: signUp, mutationKey: ["signup"] });
}