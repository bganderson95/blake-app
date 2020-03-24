import axios from "axios";

const instance = axios.create({
  baseURL: "https://blake-app-9e0ac.firebaseio.com/"
});

export default instance;
