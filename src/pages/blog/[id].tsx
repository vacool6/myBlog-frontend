import React, { useEffect, useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
//Component
import BlogPreview from "@/components/cards/blogPreview";
import Navbar from "@/components/navbar";
import CustomLoader from "@/components/customLoader";
//Helpers
import { authorImages, coverImages } from "@/helpers/images";

const Blog = () => {
  const [data, setData] = useState<any>({
    title: "",
    body: "",
    authorName: "",
    coverImagePosition: "",
    authorImagePosition: "",
  });
  const router = useRouter();

  useEffect(() => {
    const getBlog = async () => {
      try {
        if (router.query.id) {
          const request = await axios.get(
            `${process.env.HOST_URL}/blogs/${router.query.id}`
          );
          setData(request.data.data);
        }
      } catch (error) {}
    };
    getBlog();
  }, [router.query.id]);

  console.log(data);

  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        {data.body ? (
          <BlogPreview
            title={data.title}
            body={data.body}
            authorName={data.authorName}
            authorImage={authorImages[data.authorImagePosition]}
            coverImage={coverImages[data.coverImagePosition]}
            comments={data.comments}
          />
        ) : (
          <CustomLoader />
        )}
      </Container>
    </>
  );
};

export default Blog;
