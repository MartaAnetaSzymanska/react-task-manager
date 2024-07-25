import axios from "axios";

const client = axios.create({
  baseURL: "https://goit-task-manager.herokuapp.com/",
});

// Utility to add JWT
const setAuthHeader = (token) => {
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  client.defaults.headers.common.Authorization = "";
};

export { client, setAuthHeader, clearAuthHeader };
