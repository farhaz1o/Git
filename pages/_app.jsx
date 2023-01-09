import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
   
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;