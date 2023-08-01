import React from "react";
import { BlogData } from "@/models/blog";
import CommentCard from "@/components/CommentCard";
import Image from "next/image";
import dynamic from "next/dynamic";
import ReactPlayer from "react-player/lazy";
import Navbar from "@/components/Navbar";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
	ssr: false,
});

const BlogCard: React.FC<{ blog: BlogData }> = ({ blog }) => {
	return (
		<>
			
			<div className="bg-white rounded-lg shadow p-4">
				<h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
				<p className="text-gray-600 mb-4">{blog.content}</p>
				{blog?.imageUrl && (
					<div className="w-full mb-2">
						<img
							src={blog?.imageUrl}
							alt={blog?.title}
							className="w-full rounded-md"
							width={800}
							height={600}
						/>
					</div>
				)}
				{blog?.videoUrl && (
					<div className="aspect-w-16 aspect-h-9 mb-2">
						<ReactPlayer
							width="100%"
							height="300px"
							url={blog?.videoUrl}
							light="/static/normal-sarong-0007.jpg"
							playing={true}
							controls
							autoplay
						/>
					</div>
				)}
				{/* <h3 className="font-medium text-lg mb-2">Comments:</h3>
			{blog?.comments?.map((comment) => (
				<CommentCard key={comment._id} comment={comment} />
			))} */}
			</div>
		</>
	);
};

export default BlogCard;
