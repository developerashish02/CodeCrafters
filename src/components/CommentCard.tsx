
import React from "react";
import { CommentData } from "@/models/comment";

const CommentCard: React.FC<{ comment: CommentData }> = ({ comment }) => {
	return (
		<div className="bg-gray-100 rounded-lg p-2 mb-2">
			<p className="text-gray-600">{comment.text}</p>
			<p className="text-sm text-gray-400">{comment.createdAt.toISOString()}</p>
		</div>
	);
};

export default CommentCard;
