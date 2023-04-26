import React, { FC } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

interface Props {
  label: string;
  value: number | string;
  loading?: boolean;
}

const StatsItem: FC<Props> = ({ label, value, loading }) => {
  return (
    <div
      className={
        "flex h-28 w-80 flex-col items-center justify-center gap-5 bg-white"
      }
    >
      <span className={"text-3xl font-bold"}>{value.toString()}</span>
      <span>{loading ? <Skeleton /> : label}</span>
    </div>
  );
};

export default StatsItem;
