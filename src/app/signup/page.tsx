"use client";
import React from "react";
import AuthForm from "@/components/AuthForm";
import { validationSchema, initialFormValues } from "@/utils/formValidation";
import useFormSubmit from "@/hooks/useFormSubmit";
import { signupUser } from "@/utils/apiClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupPage = () => {
	const router = useRouter();
	const { isSubmitting, handleSubmit } = useFormSubmit(
		async (values: any, formikHelpers: any) => {
			console.log(values, "Values from sign up page");
			try {
				const response = await signupUser(values);
				console.log("signup successfully", response);
				router.push("/login");
				formikHelpers.resetForm();
				// Handle successful signup, e.g., show success message, navigate to login page, etc.
			} catch (error: any) {
				console.log("signup failed", error.message);
				// Handle signup failure, e.g., show error message to the user, reset form, etc.
			}
		}
	);
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
				<p className="text-center mt-4 ">
					Already have an account?{" "}
					<Link href="/login">
						<span className="cursor-pointer">Login</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignupPage;
