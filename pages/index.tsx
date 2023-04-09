import { Layout } from "@/components/layout";
import { HomePage } from "@/components/home";
import {GetServerSideProps, NextPage} from "next";
import {initPocketBase} from "@/utils";
import {ListResult} from "pocketbase";
import {CategoriesResponse, FoodsResponse} from "@/types";

interface Props {
  categories: string;
  foods: string;
}
const Home: NextPage<Props> = ({categories, foods}) => {
  const categoriesList = JSON.parse(categories) as CategoriesResponse[];
  const foodsList = JSON.parse(foods) as FoodsResponse[];

  return (
    <Layout>
      <HomePage categories={categoriesList} foods={foodsList} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // get categories
    const categories = await pb.collection('categories').getFullList<ListResult<CategoriesResponse>>({
      filter: "active = true && featured = true",
    });

    // get foods
    const foods = await pb.collection('foods').getFullList<ListResult<FoodsResponse>>({
      filter: "active = true && featured = true",
    })

    return {
      props: {
        categories: JSON.stringify(categories),
        foods: JSON.stringify(foods),
      }
    }
  }
  catch (_) {
    return {
      props: {
        categories: JSON.stringify([]),
        foods: JSON.stringify([]),
      }
    }
  }
}

export default Home;