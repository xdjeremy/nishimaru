import { Layout } from "@/components/layout";
import { HomePage } from "@/components/home";
import {GetServerSideProps, NextPage} from "next";
import {initPocketBase} from "@/utils";
import {ListResult} from "pocketbase";
import {CategoriesResponse} from "@/types";

interface Props {
  categories: string;
}
const Home: NextPage<Props> = ({categories}) => {
  const categoriesList = JSON.parse(categories) as CategoriesResponse[];

  return (
    <Layout>
      <HomePage categories={categoriesList} />
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

    return {
      props: {
        categories: JSON.stringify(categories),
      }
    }
  }
  catch (_) {
    return {
      props: {
        categories: JSON.stringify([]),
      }
    }
  }
}

export default Home;