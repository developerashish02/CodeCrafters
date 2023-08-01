
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastWrapper = () => {
	return (
		<ToastContainer
			position="top-right"
			autoClose={3000}
			hideProgressBar
			newestOnTop={false}
			closeOnClick
			rtl={false}
			draggable
			pauseOnHover
		/>
	);
};

export { ToastWrapper, toast };
