import { RegisterOptions } from "react-hook-form";

const RegisterValidation: {
  [x: string]: RegisterOptions;
} = {
  name: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters",
    },
    maxLength: {
      value: 20,
      message: "Name must be at most 20 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
    maxLength: {
      value: 20,
      message: "Password must be at most 20 characters",
    },
  },
  confirmPassword: {
    required: "Confirm password is required",
  },
};

export { RegisterValidation };
