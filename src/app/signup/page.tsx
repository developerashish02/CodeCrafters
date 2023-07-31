"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupPage = () => {
	const validationSchema = Yup.object().shape({
		username: Yup.string().required("Username is required"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 6 characters long")
			.max(15, "Password must not exceed 15 characters")
			.matches(
				/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/,
				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
			)
			.matches(/^\S*$/, "Password must not contain spaces")
			.required("Password is required"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
	});

	const handleSubmit = (values: any, { setSubmitting }: any) => {
		console.log(values);
		setSubmitting(false);
	};

	const initialValues = { username: "", password: "", email: "" };

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-gradient-to-r from-blue-500 to-purple-500 text-black">
			<div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
				<h2 className="text-3xl font-bold text-center mb-4 ">Sign In</h2>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ isSubmitting }) => (
						<Form>
							<div className="mb-4">
								<label htmlFor="username" className="block text-gray-700 mb-2">
									Username
								</label>
								<Field
									type="text"
									id="username"
									name="username"
									className="w-full px-3 py-2 border rounded-lg"
								/>
								<ErrorMessage
									name="username"
									component="div"
									className="text-red-500"
								/>
							</div>

							<div className="mb-4">
								<label htmlFor="password" className="block text-gray-700 mb-2">
									Password
								</label>
								<Field
									type="password"
									id="password"
									name="password"
									className="w-full px-3 py-2 border rounded-lg"
								/>
								<ErrorMessage
									name="password"
									component="div"
									className="text-red-500"
								/>
							</div>

							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 mb-2">
									Email
								</label>
								<Field
									type="text"
									id="email"
									name="email"
									className="w-full px-3 py-2 border rounded-lg"
								/>
								<ErrorMessage
									name="email"
									component="div"
									className="text-red-500"
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
								disabled={isSubmitting}
							>
								Sign In
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default SignupPage;
