import axios from "axios";
import { API_BASE_URL } from "../config";

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  headers: { "X-Requested-With": "XMLHttpRequest" }
});


export default client;