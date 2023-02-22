import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
//asset
import loading from "../assets/loadingGif.gif";

const CustomLoader = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Image
          src={loading as any}
          alt="Loading"
          width={100}
          height={100}
        ></Image>
      </Box>
    </>
  );
};

export default CustomLoader;
