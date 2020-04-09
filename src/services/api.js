import Axios from "axios";

export default Axios.create({
  baseURL: process.env.VUE_APP_DEV_API_URL || process.env.VUE_APP_API_URL,
  timeout: 20000
});
