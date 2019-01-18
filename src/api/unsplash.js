import axios from "axios";
// create Unsplash app, use Access Key
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID AccessKeyHere"
  }
});
