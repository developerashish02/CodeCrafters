"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { validationSchema, initialFormValues } from "@/utils/formValidation";
// import { useRouter } from "next/router";
import useFormSubmit from "@/hooks/useFormSubmit";
import { loginUser } from "@/utils/apiClient";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
const LoginPage = () => {
	const router = useRouter();
	const { isSubmitting, handleSubmit } = useFormSubmit(
		async (values: any, formikHelpers: any) => {
			console.log(values);
			try {
				const response = await loginUser(values);
				console.log("login successfully", response);
				toast.success("Login Success");
				router.push("/");
				// Handle successful signup, e.g., show success message, navigate to login page, etc.
				formikHelpers.resetForm();
			} catch (error: any) {
				console.log("Login failed", error.message);
				// Handle signup failure, e.g., show error message to the user, reset form, etc.
			}
		}
	);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-gradient-to-r from-blue-500 to-purple-500 text-black">
			<div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
				<h2 className="text-3xl font-bold text-center mb-4">Login</h2>
				<AuthForm
					initialValues={initialFormValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
					submitButtonText="Login"
					showUsernameField={false}
				/>

				<p className="text-center mt-4 ">
					Don't have an account?{" "}
					<Link href="/signup">
						<span className="cursor-pointer">Sign Up</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
