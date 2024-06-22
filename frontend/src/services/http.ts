import axios from "axios";


export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

// http.interceptors.request.use((config) => {
//   const token = Cookies.get("access_token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.message === "Network Error") {
      alert("Network Error");
    } else if (err.response.status === 401) {
      localStorage.clear();
      localStorage.clear();
      // window.location.href = "/signup";
    }
    return Promise.reject(err);
  }
);

// export const surePassHttp = axios.create({
//   baseURL: process.env.REACT_APP_SUREPASS_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json, text/plain, */*",
//     Authorization: `Bearer ${process.env.REACT_APP_SUREPASS_TOKEN}` || "",
//   },
// });
