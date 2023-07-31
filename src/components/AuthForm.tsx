"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface AuthFormProps {
	initialValues: any;
	validationSchema: any;
	onSubmit: (values: any) => void;
	submitButtonText: string;
	showUsernameField?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
	initialValues,
	validationSchema,
	onSubmit,
	submitButtonText,
	showUsernameField = true,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					{showUsernameField && (
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
					)}

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
						{submitButtonText}
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default AuthForm;
