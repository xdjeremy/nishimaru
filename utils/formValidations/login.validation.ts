import { RegisterOptions } from "react-hook-form";

const LoginValidation: {
  [x: string]: RegisterOptions;
} = {
  username: {
    required: "Username is required",
  },
  password: {
    required: "Password is required",
  },
};

export { LoginValidation };
