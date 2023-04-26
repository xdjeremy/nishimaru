import { RegisterOptions } from "react-hook-form";

const CategoryValidation: {
  [x: string]: RegisterOptions;
} = {
  title: {
    required: "Title is required",
  },
  featured: {
    required: "Featured is required",
  },
  active: {
    required: "Active is required",
  },
};

export { CategoryValidation };
