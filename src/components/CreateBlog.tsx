import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createBlog } from "@/utils/apiClient";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ToastContainer";

const CreateBlogForm: React.FC = () => {
	const router = useRouter();
	const initialValues = {
		title: "",
		content: "",
		imageUrl: "",
		videoUrl: "",
	};

	const validationSchema = Yup.object({
		title: Yup.string().required("Title is required"),
		content: Yup.string().required("Content is required"),
		imageUrl: Yup.string()
			.url("Invalid image URL format")
			.required("Image URL is required"),
		videoUrl: Yup.string().url("Invalid video URL format").notRequired(),
	});

	const handleSubmit = async (values: any, { setSubmitting }: any) => {
		try {
			// Send the data to the backend API route to save the blog
			const response = await createBlog(values);
			console.log(response, "response");
			alert("Blog created successfully!");
			toast.success("Blog created successfully", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: true,
			});
			router.push("/");
		} catch (error: any) {
			toast.error(error.message, {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: true,
			});
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="p-4">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="max-w-lg mx-auto">
						<div className="mb-4">
							<label
								htmlFor="title"
								className="block text-sm font-medium text-gray-700"
							>
								Title:
							</label>
							<Field
								type="text"
								id="title"
								name="title"
								className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
							/>
							<ErrorMessage
								name="title"
								component="div"
								className="text-red-600 mt-1"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="content"
								className="block text-sm font-medium text-gray-700"
							>
								Content:
							</label>
							<Field
								as="textarea"
								id="content"
								name="content"
								className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
								rows={6}
							/>
							<ErrorMessage
								name="content"
								component="div"
								className="text-red-600 mt-1"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="imageUrl"
								className="block text-sm font-medium text-gray-700"
							>
								Image URL:
							</label>
							<Field
								type="text"
								id="imageUrl"
								name="imageUrl"
								className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
							/>
							<ErrorMessage
								name="imageUrl"
								component="div"
								className="text-red-600 mt-1"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="videoUrl"
								className="block text-sm font-medium text-gray-700"
							>
								Video URL:
							</label>
							<Field
								type="text"
								id="videoUrl"
								name="videoUrl"
								className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
							/>
							<ErrorMessage
								name="videoUrl"
								component="div"
								className="text-red-600 mt-1"
							/>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className={`mt-2 bg-blue-500 text-white px-4 py-2 rounded-md w-full ${
								isSubmitting
									? "opacity-50 cursor-not-allowed"
									: "hover:bg-blue-600"
							}`}
						>
							{isSubmitting ? "Creating Blog..." : "Create Blog"}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default CreateBlogForm;
