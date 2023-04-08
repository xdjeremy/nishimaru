import React from "react";
import { Button, Input } from "@/components/common";

const Hero = () => {
  return (
    <div className={"bg-sushi bg-no-repeat bg-cover"}>
      <div
        className={
          "mx-auto py-16 md:py-20 xl:py-28 flex w-full max-w-2xl flex-col items-center justify-center gap-3.5 px-14 md:flex-row md:gap-1"
        }
      >
        <Input type={"text"} placeholder={"Search Foods"} />
        <div className={"w-full md:w-20"}>
          <Button type={"submit"}>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
