import React, { FC, useState } from "react";
import { AdminInput, Button } from "@/components/common";
import { CategoryValidation } from "@/utils/formValidations";
import { FileUploader } from "react-drag-drop-files";
import { SubmitHandler, useForm } from "react-hook-form";
import { CategoryTypeInput } from "@/components/admin/categories/category.type";
import { pocketBase } from "@/utils";
import { serialize } from "object-to-formdata";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const NewCategoryForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CategoryTypeInput>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

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
        title,
        featured,
        active,
        image,
      };

      const formData = serialize(data);

      await pocketBase.collection("categories").create(formData);
      toast.success("Category created successfully");

      await router.push("/admin/category");
    } catch (err: any) {
      toast.error(err.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSaveCategory)}
      className={
        "flex h-96 w-full flex-col gap-3 rounded-lg bg-white px-10 py-5"
      }
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

export default NewCategoryForm;
