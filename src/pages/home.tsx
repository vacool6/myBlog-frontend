import React from "react";
import { Container } from "@chakra-ui/react";
//Components
import BlogCard from "@/components/cards/blogCard";
import Navbar from "@/components/navbar";

const HomePage = () => {
  const data = [
    {
      coverImage:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      domain: "Eng",
      title: "Title",
      body: "Stuff",
      authorImage:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      authorName: "me",
      createdDate: "22.22.2",
    },
    {
      coverImage:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      domain: "Eng",
      title: "Title",
      body: "Stuff",
      authorImage:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      authorName: "me",
      createdDate: "22.22.2",
    },
    {
      coverImage:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      domain: "Eng",
      title: "Title",
      body: "Stuff",
      authorImage:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      authorName: "me",
      createdDate: "22.22.2",
    },
  ];
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
        {data.map((e) => (
          <BlogCard
            key={Math.random()}
            coverImage={e.coverImage}
            domain={e.domain}
            title={e.title}
            body={e.body}
            authorName={e.authorName}
            authorImage={e.authorImage}
            createdDate={e.createdDate}
          />
        ))}
      </Container>
    </>
  );
};

export default HomePage;
