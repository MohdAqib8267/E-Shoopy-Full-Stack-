import axios from "axios";


const BASE_URL = "http://localhost:4000/api/"

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;(maan lo delted hai)


export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    // headers:{Authorization:`Bearar ${TOKEN}`}
})


// import axios from "axios";


// const BASE_URL = "http://localhost:4000/api/";

// const getToken = () => {
//   const localStorageData = JSON.parse(localStorage.getItem("persist:root"));
//   const user = localStorageData && JSON.parse(localStorageData).user;

//   if (!user) {
//     return null;
//   }

//   const token = user.currentUser.token;

//   if (!token) {
//     return null;
//   }

//   return token;
// };

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = (navigate) => {
//   const token = getToken();
// console.log(token);
//   if (!token) {
//     navigate("/login");
//   }

//   return axios.create({
//     baseURL: BASE_URL,
//     headers: { token: `Bearer ${token}` },
//   });
// };