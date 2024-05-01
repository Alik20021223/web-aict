import axios from "axios";

const api = axios.create({
  baseURL: "http://ferma.ru.swtest.ru/api/"
});

export default api;