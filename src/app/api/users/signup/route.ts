import dbConnect from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		await dbConnect();

		const reqBody = await req.json();
		console.log(reqBody);

		const { username, email, password } = reqBody;

		if (!username || !email || !password) {
			return new NextResponse(
				JSON.stringify({ error: "All fields are required." }),
				{ status: 400 }
			);
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return new NextResponse(
				JSON.stringify({ error: "Email already in use." }),
				{ status: 400 }
			);
		}

		// Create a new user instance
		const user = new User({
			username,
			email,
			password,
		});

		// Save the user to the database
		await user.save();

		return new NextResponse(
			JSON.stringify({ message: "User registered successfully." }),
			{ status: 200 }
		);
	} catch (error: any) {
		console.error(error);
		return new NextResponse(
			JSON.stringify({ error: "Internal server error." }),
			{ status: 500 }
		);
	}
}
