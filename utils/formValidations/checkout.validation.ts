import { RegisterOptions } from "react-hook-form";

const CheckoutValidation: {
  [x: string]: RegisterOptions;
} = {
  fullName: {
    required: "Full name is required",
    minLength: {
      value: 3,
      message: "Full name must be at least 3 characters",
    },
    maxLength: {
      value: 50,
      message: "Full name must be less than 50 characters",
    },
  },
  address: {
    required: "Address is required",
    minLength: {
      value: 3,
      message: "Address must be at least 3 characters",
    },
    maxLength: {
      value: 50,
      message: "Address must be less than 50 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
    minLength: {
      value: 3,
      message: "Email must be at least 3 characters",
    },
    maxLength: {
      value: 50,
      message: "Email must be less than 50 characters",
    },
  },
};

export { CheckoutValidation };
