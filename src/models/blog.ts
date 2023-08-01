import mongoose, { Schema, Document } from "mongoose";

export interface BlogData extends Document {
	title: string;
	content: string;
	imageUrl?: string;
	videoUrl?: string;
	comments: any[];
	createdAt: Date;
}

const BlogSchema: Schema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	imageUrl: { type: String },
	videoUrl: { type: String },
	createdAt: { type: Date, default: Date.now },
});

const Blog =
	mongoose.models.Blog || mongoose.model<BlogData>("Blog", BlogSchema);

export default Blog;
