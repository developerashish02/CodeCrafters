"use client";
import React from "react";
import CreateBlog from "@/components/CreateBlog";

const CreateBlogPage: React.FC = () => {
	return (
		<div className="p-4">
			<h1 className="text-3xl font-semibold mb-4 text-center">
				Create a New Blog
			</h1>

			<CreateBlog />
		</div>
	);
};

export default CreateBlogPage;
