import axios from "axios";

axios.defaults.baseURL = "http://localhost:5050/api";
axios.defaults.headers = {
	"Content-Type": "application/json",
};

export const AuthService = {
	async login(email, password) {
		return axios.post("auth/login", { email, password });
	},

	async register(email, password) {
		return axios.post("auth/register", { email, password });
	},
};
