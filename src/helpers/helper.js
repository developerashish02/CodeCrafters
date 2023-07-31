import * as Yup from "yup";

// login and signup form validation 
export const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long")
        .max(15, "Password must not exceed 15 characters")
        .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        )
        .matches(/^\S*$/, "Password must not contain spaces")
        .required("Password is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});

// initial Values
export const initialValues = { username: "", password: "", email: "" };