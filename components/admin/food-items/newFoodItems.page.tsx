import React, { FC, useState } from "react";
import { AdminTitle } from "@/components/common";
import FoodItemsForm from "@/components/admin/food-items/foodItems.form";
import { CategoriesResponse } from "@/types";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { FoodItemsType } from "@/components/admin/food-items/foodItems.type";
import toast from "react-hot-toast";
import { serialize } from "object-to-formdata";
import { pocketBase } from "@/utils";
import { useRouter } from "next/router";

interface Props {
  categories: CategoriesResponse[];
}

const NewFoodItemsPage: FC<Props> = ({ categories }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setValue } = useFormContext<FoodItemsType>();
  const router = useRouter();

  const handleFileChange = (file: File) => {
    setValue("image", file);
  };

  const handleSave: SubmitHandler<FoodItemsType> = async ({
    category,
    featured,
    active,
    price,
    image,
    description,
    title,
  }) => {
    try {
      setIsLoading(true);

      const data = {
        title,
        description,
        price,
        category,
        featured,
        active,
        image,
      };

      const formData = serialize(data);

      await pocketBase.collection("foods").create(formData);

      toast.success("Food item created successfully");
      await router.push("/admin/food-items");
    } catch (err: any) {
      console.log(err.data);
      toast.error(err.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={"mx-auto flex w-full max-w-4xl flex-col gap-5"}>
      <AdminTitle title={`Add Food Item`} />
      <FoodItemsForm
        categories={categories}
        isLoading={isLoading}
        handleSave={handleSave}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export { NewFoodItemsPage };
