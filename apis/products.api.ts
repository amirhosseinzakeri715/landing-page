import { urls } from "./urls"
import { generateClient } from "./client"

export const fetchProductsList= async (page: number, perPage: number) =>{
  const client= generateClient();
  const response= await client.get(urls.products.list(page, perPage));
  return response.data;
}