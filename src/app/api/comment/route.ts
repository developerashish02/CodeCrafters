import dbConnect from "@/dbConfig/dbConfig";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/models/comment";

dbConnect();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		const { blogId, text } = reqBody;

		const newComment = new Comment({
			text,
			blogId,
		});

		await newComment.save();

		NextResponse.json(
			{
				message: "Comment added successfully.",
				success: true,
			},
			{ status: 201 }
		);
	} catch (error: any) {
		NextResponse.json(
			{
				error: "Internal server error.",
			},
			{ status: 500 }
		);
	}
}
