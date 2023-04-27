import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <Toaster />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
