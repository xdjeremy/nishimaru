import { RegisterOptions } from "react-hook-form";

const FoodItemsValidation: {
  [x: string]: RegisterOptions;
} = {
  title: {
    required: "Title is required",
    minLength: {
      value: 3,
      message: "Title must be at least 3 characters long",
    },
    maxLength: {
      value: 50,
      message: "Title must be at most 50 characters long",
    },
  },
  description: {
    required: "Description is required",
    minLength: {
      value: 3,
      message: "Description must be at least 3 characters long",
    },
    maxLength: {
      value: 100,
      message: "Description must be at most 100 characters long",
    },
  },
  price: {
    required: "Price is required",
    min: {
      value: 1,
      message: "Price must be at least 1",
    },
    max: {
      value: 1000,
      message: "Price must be at most 1000",
    },
  },
  featured: {},
  active: {},
};

export {FoodItemsValidation};