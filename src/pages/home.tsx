import React from "react";
import { Container } from "@chakra-ui/react";
//Components
import BlogCard from "@/components/cards/blogCard";
import Navbar from "@/components/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container
        maxW="container.xl"
        my={10}
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Container>
    </>
  );
};

export default HomePage;
