import type { AppProps } from "next/app";
import Theme from "@/theme";
//Providers
import { ChakraProvider } from "@chakra-ui/react";
import ToastProvider from "@/context/toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={Theme}>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </ChakraProvider>
    </>
  );
}
