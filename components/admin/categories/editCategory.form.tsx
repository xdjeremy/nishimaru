import React, { FC, useState } from "react";
import { CategoriesResponse } from "@/types";
import { AdminInput, Button } from "@/components/common";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { CategoryTypeInput } from "@/components/admin/categories/category.type";
import { CategoryValidation } from "@/utils/formValidations";
import toast from "react-hot-toast";
import { FileUploader } from "react-drag-drop-files";
import { pocketBase } from "@/utils";
import { serialize } from "object-to-formdata";

interface Props {
  category: CategoriesResponse;
}

const EditCategoryForm: FC<Props> = ({ category }) => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useFormContext<CategoryTypeInput>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (file: File) => {
    setValue("image", file);
  };
  const handleSaveCategory: SubmitHandler<CategoryTypeInput> = async ({
    title,
    featured,
    active,
    image,
  }) => {
    try {
      setIsLoading(true);

      const data = {
        image,
        active,
        featured,
        title,
      };

      const formData = serialize(data);

      await pocketBase.collection("categories").update(category.id, formData);

      toast.success("Category updated successfully");
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSaveCategory)}
      className={"flex w-full flex-col gap-3 rounded-lg bg-white px-10 py-5 h-96"}
    >
      <AdminInput
        type={"text"}
        placeholder={"Title"}
        disabled={isLoading}
        label={"Title"}
        name={"title"}
        register={register}
        errors={errors.title?.message}
        validation={CategoryValidation.title}
      />

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

export default EditCategoryForm;
