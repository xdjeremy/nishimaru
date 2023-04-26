import React, { FC } from "react";
import StatsItem from "@/components/admin/dashboard/stats.item";
import { pocketBaseFetcher } from "@/utils";
import useSWR from "swr";
import { AdminTitle } from "@/components/common";

const AdminDashboardPage: FC = () => {
  const { data: categoriesData, error: categoriesError } = useSWR(
    ["categories"],
    pocketBaseFetcher
  );

  const { data: foodsData, error: foodsError } = useSWR(
    ["foods"],
    pocketBaseFetcher
  );

  return (
    <div>
      <AdminTitle title={"Administrator Dashboard"} />

      <div
        className={
          "mt-10 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-4"
        }
      >
        <StatsItem
          label={"Food Categories"}
          value={categoriesData?.length || ""}
          loading={!categoriesData && !categoriesError}
        />
        <StatsItem
          label={"Foods"}
          value={foodsData?.length || ""}
          loading={!foodsData && !foodsError}
        />
        <StatsItem label={"Food Categories"} value={"2"} />
        <StatsItem label={"Food Categories"} value={"2"} />
        <StatsItem label={"Food Categories"} value={"2"} />
        <StatsItem label={"Food Categories"} value={"2"} />
        <StatsItem label={"Food Categories"} value={"2"} />
        <StatsItem label={"Food Categories"} value={"2"} />
      </div>
    </div>
  );
};

export { AdminDashboardPage };
