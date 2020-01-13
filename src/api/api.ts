import axios from "axios";
import { API_KEY } from "./constants";

const api = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export { api };
