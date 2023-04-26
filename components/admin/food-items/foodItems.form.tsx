import React, { FC } from "react";
import { AdminInput, Button } from "@/components/common";
import { CategoryValidation } from "@/utils/formValidations";
import { FileUploader } from "react-drag-drop-files";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { FoodItemsType } from "@/components/admin/food-items/foodItems.type";
import { CategoriesResponse } from "@/types";

interface Props {
  isLoading: boolean;
  handleSave: SubmitHandler<FoodItemsType>;
  handleFileChange: (file: File) => void;
  categories: CategoriesResponse[];
}

const FoodItemsForm: FC<Props> = ({
  isLoading,
  handleSave,
  handleFileChange,
  categories,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext<FoodItemsType>();

  return (
    <form
      onSubmit={handleSubmit(handleSave)}
      className={"flex w-full flex-col gap-3 rounded-lg bg-white px-10 py-5"}
    >
      <AdminInput
        type={"text"}
        placeholder={"Title of the food"}
        disabled={isLoading}
        label={"Title"}
        name={"title"}
        register={register}
        errors={errors.title?.message}
        validation={CategoryValidation.title}
      />

      <AdminInput
        type={"text"}
        placeholder={"Description of the food"}
        disabled={isLoading}
        label={"Description"}
        name={"description"}
        register={register}
        errors={errors.description?.message}
        validation={CategoryValidation.description}
      />
      <AdminInput
        type={"number"}
        placeholder={"1"}
        disabled={isLoading}
        label={"Price"}
        name={"price"}
        register={register}
        errors={errors.price?.message}
        validation={CategoryValidation.price}
      />
      <div>
        <label
          htmlFor="category"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <select
          id="category"
          {...register("category", CategoryValidation.category)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option selected>Choose a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 flex flex-row items-center gap-2">
        <label
          htmlFor="featured"
          className="text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Featured
        </label>
        <input
          {...register("featured", CategoryValidation.featured)}
          id="featured"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
      </div>

      <div className="mb-4 flex flex-row items-center gap-2">
        <label
          htmlFor="active"
          className="text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Active
        </label>
        <input
          {...register("active", CategoryValidation.active)}
          id="active"
          type="checkbox"
          name={"active"}
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
      </div>

      <div className={"flex flex-col"}>
        <label htmlFor="image">Image</label>
        <FileUploader
          handleChange={handleFileChange}
          multiple={false}
          types={["png", "jpg", "jpeg"]}
          name={"image"}
        />
      </div>

      <Button type={"submit"} full={false} disabled={isLoading}>
        Save
      </Button>
    </form>
  );
};

export default FoodItemsForm;
