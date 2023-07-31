import axios from "axios";

const API_BASE_URL = "https://localhost:3000";

const apiClient = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
});

// for the sign in
export const signupUser = async (userData: any) => {
	try {
		const response = await apiClient.post("/api/users/signup", userData);
		return response.data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || "Failed to sign up.");
	}
};
