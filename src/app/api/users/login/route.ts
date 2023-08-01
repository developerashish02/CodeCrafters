import dbConnect from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

dbConnect();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		const { email, password } = reqBody;
		console.log(reqBody);

		// check user is exist
		const user = await User.findOne({ email });
		
		if (!user) {
			return NextResponse.json(
				{ error: "user does not exist" },
				{ status: 401 }
			);
		}

		// compare the password
		const validPassword = await bcryptjs.compare(password, user.password);

		if (!validPassword) {
			return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
		}

		// create token data
		const tokenData = {
			id: user._id,
			username: user.username,
			email: user.email,
		};

		// create token
		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
			expiresIn: "1d",
		});

		const response = NextResponse.json({
			message: "Login Successful",
			success: true,
		});

		response.cookies.set("token", token, {
			httpOnly: true,
		});

		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
