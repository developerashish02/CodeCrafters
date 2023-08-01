import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ToastContainer";

const Navbar = () => {
	// const { isLoggedIn, logout } = useAuth();
	const router = useRouter();
	const isLoggedIn = true;
	const logout = async () => {
		try {
			await axios.get("api/users/logout");
			toast.success("logout successfully", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: true,
			});
			router.push("/login");
		} catch (error: any) {
			toast.error(error.message, {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: true,
			});
			console.log(error, "error while logout");
		}
	};
	return (
		<nav className="bg-gray-800 p-4">
			<div className="flex items-center justify-between">
				<div>
					<Link href="/">
						<span className="text-white font-semibold text-lg">Home</span>
					</Link>
					{isLoggedIn ? (
						<>
							<Link href="/blog">
								<span className="text-white ml-4">Create Blog</span>
							</Link>
							<button className="text-white ml-4" onClick={() => logout()}>
								Logout
							</button>
						</>
					) : (
						<Link href="/login">
							<span className="text-white ml-4">Login</span>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
