import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastWrapper } from "@/components/ToastContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<ToastWrapper />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
