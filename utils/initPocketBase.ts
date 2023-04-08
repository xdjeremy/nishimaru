import { GetServerSidePropsContext } from "next";
import PocketBase from "pocketbase";

const initPocketBase = async (ctx: GetServerSidePropsContext) => {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

  // load the store data from the request cookie string
  pb.authStore.loadFromCookie(ctx.req?.headers?.cookie || "");

  // send back the default 'pb_auth' cookie to the client with the latest store state
  pb.authStore.onChange(() => {
    ctx.res?.setHeader("set-cookie", pb.authStore.exportToCookie());
  });

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (_) {
    // clear the auth store on failed refresh
    pb.authStore.clear();
  }

  return pb;
};

export {initPocketBase};