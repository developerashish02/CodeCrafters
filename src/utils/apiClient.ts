import axios from "axios";

const API_BASE_URL = "";

const apiClient = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
});

// for the sign in user
export const signupUser = async (userData: any) => {
	console.log(userData, "User data from signup user api client file");
	try {
		const response = await apiClient.post("/api/users/signup", userData);
		console.log("User data from apiClient file", userData);
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

export const createBlog = async (userData: any) => {
	try {
		const response = await apiClient.post("/api/blogs", userData);
		return response.data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || "Failed to uplod blog.");
	}
};
