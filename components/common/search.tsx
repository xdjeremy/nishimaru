import React, { FC, FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/common/button";
import { pocketBase } from "@/utils";
import { FoodsResponse } from "@/types";
import { ListResult } from "pocketbase";
import Sushi from "../../assets/images/sushi.svg";
import Image from "next/image";

const Search: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ListResult<FoodsResponse> | null>(null);

  useEffect(() => {
    setIsLoading(true);

    if (query === "") {
      setIsLoading(false);
      setResult(null);
      return;
    }
    const search = async () => {
      const result = await pocketBase
        .collection("foods")
        .getList<FoodsResponse>(1, 5, {
          filter: `title ~ '${query}'`,
        });

      setResult(result);
    };

    search().then(() => setIsLoading(false));
  }, [query]);

  return (
    <div
      className={
        "mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-3.5 px-14 py-16 md:flex-row md:gap-1 md:py-20 xl:py-28"
      }
    >
      <div className={"flex w-full flex-col gap-1"}>
        <div className={"w-full"}>
          <input
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setQuery(e.currentTarget.value)
            }
            className={"w-full rounded-lg px-4 py-2"}
            type={"text"}
            placeholder={"Search Foods"}
          />
        </div>
        {/* search result */}
        <div
          className={
            "absolute top-28 rounded-lg bg-white shadow-md md:top-32 xl:top-40"
          }
        >
          <ul className={"grid grid-cols-1 divide-y"}>
            {result?.items.map((food) => (
              <li
                key={food.id}
                className={"rounded-lg px-4 py-2 hover:bg-neutral-100"}
              >
                {food.title}
              </li>
            ))}
            {isLoading && (
              <li
                className={
                  "flex translate-y-1.5 flex-row items-center justify-center rounded-lg px-4 py-2 hover:bg-neutral-100"
                }
              >
                <Image
                  src={Sushi}
                  alt={"Loading..."}
                  className={"h-10 w-10 animate-bounce"}
                />
                <Image
                  src={Sushi}
                  alt={"Loading..."}
                  className={"h-10 w-10 animate-bounce animation-delay-100"}
                />
                <Image
                  src={Sushi}
                  alt={"Loading..."}
                  className={"h-10 w-10 animate-bounce animation-delay-200"}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={"w-full md:w-20"}>
        <Button type={"submit"}>Search</Button>
      </div>
    </div>
  );
};

export { Search };
