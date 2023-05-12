import axios from "axios"
// import dotenv from "dotenv-webpack"

// dotenv.config()
// console.log(process.env.REACT_APP_API_URL);
const config = axios.create({

    baseURL: `https://tiktok.fullstack.edu.vn/api/`
})
export default config
