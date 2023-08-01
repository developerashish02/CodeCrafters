import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { createBlog } from "@/utils/apiClient";

const CreateBlogForm: React.FC = () => {
	const initialValues = {
		title: "",
		content: "",
		image: "",
		video: "",
	};

	const validationSchema = Yup.object({
		title: Yup.string().required("Title is required"),
		content: Yup.string().required("Content is required"),
		image: Yup.mixed().required("Image is required"),
		video: Yup.mixed().test("is-video", "Invalid video format", (value) => {
			if (value) {
				return ["video/mp4", "video/quicktime"].includes(value.type);
			}
			return true;
		}),
	});

	const handleSubmit = async (values: any, { setSubmitting }: any) => {
		console.log(values.image, "Values..");
		try {
			const formData = new FormData();
			formData.append("title", values.title);
			formData.append("content", values.content);
			formData.append("image", values.image);
			formData.append("video", values.video);

			// Send the data to the backend API route to save the blog
			const response = await createBlog(formData);

			console.log(response, "response");
			alert("Blog created successfully!");
			// You can redirect the user to the blogs page or clear the form after successful submission.
		} catch (error) {
			console.error("Failed to create blog", error);
			alert("Failed to create blog. Please try again.");
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
				{({ isSubmitting, setFieldValue }) => (
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
								htmlFor="image"
								className="block text-sm font-medium text-gray-700"
							>
								Image:
							</label>
							<input
								type="file"
								id="image"
								name="image"
								accept="image/*"
								onChange={(event) =>
									setFieldValue("image", event.currentTarget.files?.[0])
								}
								className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
							/>
							<ErrorMessage
								name="image"
								component="div"
								className="text-red-600 mt-1"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="video"
								className="block text-sm font-medium text-gray-700"
							>
								Video:
							</label>
							<input
								type="file"
								id="video"
								name="video"
								accept="video/mp4, video/quicktime"
								onChange={(event) =>
									setFieldValue("video", event.currentTarget.files?.[0])
								}
								className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
							/>
							<ErrorMessage
								name="video"
								component="div"
								className="text-red-600 mt-1"
							/>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className={`mt-2 bg-blue-500 text-white px-4 py-2 rounded-md ${
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
