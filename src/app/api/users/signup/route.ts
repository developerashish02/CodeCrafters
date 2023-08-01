import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
	console.log(request, "Request from backend");
	try {
		const reqBody = await request.json();

		const { username, email, password } = reqBody;

		console.log(reqBody, "Req body from backend route file");

		// Checking if user already exists
		const user = await User.findOne({ email });

		if (user) {
			return NextResponse.json(
				{ error: "User already exists" },
				{ status: 400 }
			);
		}

		const newUser = new User({
			username,
			email,
			password,
		});

		const savedUser = await newUser.save();
		console.log(savedUser);

		return NextResponse.json({
			message: "User created successfully",
			success: true,
			savedUser,
		});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
