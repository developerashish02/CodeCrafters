"use client";
import React from "react";
import AuthForm from "@/components/AuthForm";
import { validationSchema, initialFormValues } from "@/utils/formValidation";

const SignupPage = () => {
	const handleSubmit = async (values: any) => {
		try {
			// Handle your API call here for signup
			console.log("signup successfully", values);
		} catch (error) {
			console.log("signup failed", error.message);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-gradient-to-r from-blue-500 to-purple-500 text-black">
			<div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
				<h2 className="text-3xl font-bold text-center mb-4 ">Sign Up</h2>
				<AuthForm
					initialValues={initialFormValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
					submitButtonText="Sign Up"
				/>
			</div>
		</div>
	);
};

export default SignupPage;
