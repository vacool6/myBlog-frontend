import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
//Components
import BlogCard from "@/components/cards/blogCard";
import Navbar from "@/components/navbar";
import axios from "axios";
import CustomLoader from "@/components/customLoader";
//Helper
import { coverImages, authorImages } from "@/helpers/images";
import { IBlogData } from "@/helpers/types";

const HomePage = () => {
  const [data, setData] = useState<IBlogData[]>([
    {
      domain: "",
      title: "",
      body: "",
      authorName: "",
      createdDate: "",
      _id: "",
      coverImagePosition: "",
      authorImagePosition: "",
    },
  ]);

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const request = await axios.get(`${process.env.HOST_URL}/blogs`);
        setData(request.data.data);
      } catch (error) {}
    };
    getAllBlogs();
  }, []);

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
        {!data[0].body ? (
          <CustomLoader />
        ) : (
          data.map((e) => (
            <BlogCard
              key={e._id}
              id={e._id}
              domain={e.domain}
              title={e.title}
              body={e.body}
              authorName={e.authorName}
              createdDate={e.createdDate}
              authorImage={authorImages[e.authorImagePosition]}
              coverImage={coverImages[e.coverImagePosition]}
            />
          ))
        )}
      </Container>
    </>
  );
};

export default HomePage;
