import dbConnect from "@/dbConfig/dbConfig";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		const { title, content, imageUrl, videoUrl } = reqBody;

		if (!title || !content) {
			return new NextResponse(
				JSON.stringify({ error: "title or content fields are required." }),
				{ status: 400 }
			);
		}

		console.log(reqBody);

		const newBlog = new Blog({
			title,
			content,
			imageUrl,
			videoUrl,
		});

		await newBlog.save();

		return new NextResponse(
			JSON.stringify({ message: "Blog created successfully" }),
			{ status: 200 }
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

export async function GET() {
	try {
		const blogs = await Blog.find({}).sort({ createdAt: -1 });

		return NextResponse.json(blogs);
	} catch (error: any) {
		NextResponse.json(
			{
				error: "Internal server error.",
			},
			{ status: 500 }
		);
	}
}
