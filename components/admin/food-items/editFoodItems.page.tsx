import React, { FC, useEffect, useState } from "react";
import FoodItemsForm from "@/components/admin/food-items/foodItems.form";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { FoodItemsType } from "@/components/admin/food-items/foodItems.type";
import toast from "react-hot-toast";
import { CategoriesResponse, FoodsResponse } from "@/types";
import { AdminTitle } from "@/components/common";
import { serialize } from "object-to-formdata";
import { pocketBase } from "@/utils";
import { useRouter } from "next/router";

type Category = {
  category: CategoriesResponse;
};

interface Props {
  food: FoodsResponse<Category>;
  categories: CategoriesResponse[];
}

const EditFoodItemsPage: FC<Props> = ({ food, categories }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setValue } = useFormContext<FoodItemsType>();

  const router = useRouter();
  const handleFileChange = (file: File) => {
    setValue("image", file);
  };
  const handleSave: SubmitHandler<FoodItemsType> = async ({
    title,
    description,
    price,
    category,
    featured,
    active,
    image,
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
      await pocketBase.collection("foods").update(food.id, formData);

      toast.success("Food item updated successfully");
      await router.push("/admin/food-items");
    } catch (err: any) {
      toast.error(err.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setValue("title", food.title);
    setValue("description", food.description);
    setValue("price", food.price);
    setValue("category", food.expand?.category.id || "");
    setValue("featured", food.featured || false);
    setValue("active", food.active || false);
  }, [
    food.active,
    food.category,
    food.description,
    food.expand?.category.id,
    food.featured,
    food.price,
    food.title,
    setValue,
  ]);

  return (
    <div className={"mx-auto flex w-full max-w-4xl flex-col gap-10 pb-5"}>
      <AdminTitle title={`Edit ${food.title} Category`} />
      <FoodItemsForm
        categories={categories}
        isLoading={isLoading}
        handleSave={handleSave}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export { EditFoodItemsPage };
