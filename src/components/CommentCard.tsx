// components/CommentCard.js
import React from "react";

const CommentCard = ({ comment }) => {
	return (
		<div className="bg-gray-100 rounded-md p-2 mb-2">
			<p>{comment.text}</p>
		</div>
	);
};

export default CommentCard;
