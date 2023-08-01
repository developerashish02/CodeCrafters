// components/BlogCard.js
import React from "react";
import CommentCard from "@/components/CommentCard";
import Image from "next/image";

const BlogCard = ({ blog }) => {
	return (
		<div className="bg-white rounded-lg shadow p-4">
			<h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
			<p className="text-gray-600 mb-4">{blog.content}</p>
			{blog.imageUrl && (
				<Image
					src={blog.imageUrl}
					alt={blog.title}
					className="w-full rounded-md mb-2"
				/>
			)}
			{blog.videoUrl && (
				<div className="aspect-w-16 aspect-h-9 mb-2">
					<iframe
						src={blog.videoUrl}
						title={blog.title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						frameBorder="0"
						allowFullScreen
					></iframe>
				</div>
			)}
			<h3 className="font-medium text-lg mb-2">Comments:</h3>
			{blog.comments.map((comment: any) => (
				<CommentCard key={comment._id} comment={comment} />
			))}
			{/* Add comment form here */}
		</div>
	);
};

export default BlogCard;
