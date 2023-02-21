import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={Theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
