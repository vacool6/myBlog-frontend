import React from "react";
import { Container } from "@chakra-ui/react";
//Component
import BlogPreview from "@/components/cards/blogPreview";
import Navbar from "@/components/navbar";

const Blog = () => {
  const data = {
    coverImage:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",

    title: "Title",
    body: "Stuff",
    authorImage:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
    authorName: "me",
  };

  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <BlogPreview
          coverImage={data.coverImage}
          title={data.title}
          body={data.body}
          authorImage={data.authorImage}
          authorName={data.authorName}
        />
      </Container>
    </>
  );
};

export default Blog;
