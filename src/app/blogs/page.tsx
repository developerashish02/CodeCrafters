
import { useRouter } from "next/navigation";

const BlogDetailPage = () => {
	const router = useRouter();
	const { id } = router.query;

	// Use the blog ID to make an API request and fetch the blog details
	// Implement the logic to fetch the blog details using the ID and display them on this page

	return (
		<div>
			<h1>Blog Detail Page</h1>
			<p>Blog ID: {id}</p>
			{/* Display the fetched blog details here */}
		</div>
	);
};

export default BlogDetailPage;
