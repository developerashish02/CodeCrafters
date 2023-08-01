import mongoose from "mongoose";

const connect = async () => {
	try {
		mongoose.connect(process.env.MONGO__URL!);
		const connection = mongoose.connection;

		connection.on("connected", () => {
			console.log("MongoDB connected successfully");
		});

		connection.on("error", (err) => {
			console.log(
				"mongoDB connection error . please make sure mongoDB is running" + err
			);

			process.exit();
		});
	} catch (error) {
		console.log("something goes wrong");
		console.log(error);
	}
};

export default connect;
