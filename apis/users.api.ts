import { urls } from "./urls"
import { generateClient } from "./client"

interface ILogin{
  username: string
  password: string
}
interface ISignUp extends ILogin{
  email: string
}

export const login= async (body: ILogin) =>{
  const client= generateClient();
  const response= await client.post(urls.account.login, body);
  return response.data;
}
export const signUp= async (body: ISignUp) =>{
  const client= generateClient();
  const response= await client.post(urls.account.signup, body);
  return response.data;
}
export const refreshToken= async (body: string) =>{
  const client= generateClient();
  const response= await client.post(urls.account.refresh, { refresh: body });
  return response.data;
}