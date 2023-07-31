import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const apiClient = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
});

// for the sign in user
export const signupUser = async (userData: any) => {
	try {
		const response = await apiClient.post("/api/users/signup", userData);
		return response.data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || "Failed to sign up.");
	}
};

// for the login in user
export const loginUser = async (userData: any) => {
	try {
		const response = await apiClient.post("/api/users/login", userData);
		return response.data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || "Failed to login.");
	}
};
