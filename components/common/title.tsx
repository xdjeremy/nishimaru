import React, {FC} from "react";

interface Props {
  content: string;
}
const Title: FC<Props> = ({content}) => {
  return (
    <h2 className={"text-center text-3xl font-bold text-neutral-900"}>
      {content}
    </h2>
  );
};

export { Title };
