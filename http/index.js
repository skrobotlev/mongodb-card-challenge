import axios from "axios";
// import { AuthResponse } from "../models/response/authResponse";

export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status == 401 && error.config && !error._isRetry) {
//       originalRequest._isRetry = true;
//       try {
//         const response =
//           (await axios.get) <
//           AuthResponse >
//           (`${API_URL}/refresh`,
//           {
//             withCredentials: true,
//           });
//         localStorage.setItem("token", response.data.accessToken);
//         return $api.request(originalRequest);
//       } catch (error) {
//         console.log(error, "NE AVTORIZOVAN");
//       }
//     }
//     throw error;
//   }
// );

export default $api;
