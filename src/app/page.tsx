"use client";

import React, { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import axios from "axios";

export default function Home() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetchBlogs();
	}, []);

	const fetchBlogs = async () => {
		try {
			const response = await axios.get("/api/blogs/fetch");
			setBlogs(response.data);
		} catch (error) {
			// Handle error
		}
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="container mx-auto py-4">
				<h1 className="text-2xl font-bold mb-4">Blogs</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{blogs.map((blog) => (
						<BlogCard key={blog._id} blog={blog} />
					))}
				</div>
			</div>
		</main>
	);
}
