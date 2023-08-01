
import mongoose, { Schema, Document } from "mongoose";

export interface CommentData extends Document {
	blogId: string;
	text: string;
	createdAt: Date;
}

const CommentSchema: Schema = new Schema({
	blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
	text: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

const Comment =
	mongoose.models.Comment ||
	mongoose.model<CommentData>("Comment", CommentSchema);

export default Comment;
