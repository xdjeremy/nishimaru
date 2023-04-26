import { RegisterOptions } from "react-hook-form";

const CategoryValidation: {
  [x: string]: RegisterOptions;
} = {
  title: {
    required: "Title is required",
  },
  featured: {},
  active: {},
};

export { CategoryValidation };
