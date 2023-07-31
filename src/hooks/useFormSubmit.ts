import { useState } from "react";

const useFormSubmit = (onSubmitCallback: (values: any) => Promise<void>) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (values: any) => {
		console.log(values);
		setIsSubmitting(true);
		try {
			await onSubmitCallback(values);
		} catch (error: any) {
			console.log("Form submission failed:", error.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return { isSubmitting, handleSubmit };
};

export default useFormSubmit;
