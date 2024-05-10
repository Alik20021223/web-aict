import axios from "axios";

const api = axios.create({
  baseURL: "http://ferma.ru.swtest.ru/api/",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;