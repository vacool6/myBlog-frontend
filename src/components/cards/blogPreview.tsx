import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  useColorModeValue,
  Flex,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
//Helpers
import axios from "axios";
import { useRouter } from "next/router";
import { useToasts } from "@/context/toast";

interface BlogAuthorProps {
  name: string;
  image: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.image}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
    </HStack>
  );
};

interface IBlogPreview {
  title: string;
  authorImage: string;
  body: string;
  authorName: string;
  coverImage: string;
  comments: any;
}
const BlogPreview = (props: IBlogPreview) => {
  const [comment, setComment] = useState<string>("");
  const { title, authorImage, body, authorName, coverImage, comments } = props;
  const router = useRouter();
  const { warningToast, successToast } = useToasts();

  const commentHandler = async () => {
    try {
      if (!comment) {
        warningToast("This field cannot be empty");
        return;
      }
      const response = await axios.post(
        `${process.env.HOST_URL}/comment/${router.query.id}`,
        {
          username: "Random comment",
          comment,
        }
      );

      if (response.data.success) {
        successToast("Comment added!");
        router.reload();
        return;
      } else {
        warningToast("Something went wrong");
        return;
      }
    } catch (error) {
      warningToast("Something went wrong");
    }
  };
  return (
    <>
      <Box mt={10}>
        <Heading as="h1">{title}</Heading>
        <BlogAuthor name={authorName} image={authorImage} />
        <Box display="flex" flex="1" alignItems="center" position="relative">
          <Box width={"full"} zIndex="2" p={10}>
            <Image
              borderRadius="lg"
              src={coverImage}
              alt="some good alt text"
              w={"100%"}
              h="25rem"
            />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.5"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        ></Box>
        <Text my={10} lineHeight={2}>
          {body}
        </Text>
      </Box>
      <Flex flexDir="column" mt={4} mb={10}>
        <Heading fontSize="xl" mb={4}>
          {comments.length === 0 ? "Be the first to comment" : "Comments:"}
        </Heading>
        <Box pos="relative" w="90%">
          <Textarea
            h="7.5rem"
            maxH="10rem"
            minH="5rem"
            placeholder="Add a comment..."
            fontSize="lg"
            borderColor="#6e5b07"
            onChange={(e) => setComment(e.target.value)}
          ></Textarea>
          <Button
            pos="absolute"
            zIndex={1}
            right={2}
            bottom={2}
            w="7.5rem"
            bg="blue.700"
            color="white"
            transition="all 0.05s"
            _hover={{ backgroundColor: "blue.500" }}
            _active={{ backgroundColor: "blue.500", transform: "scale(0.95)" }}
            onClick={commentHandler}
            disabled={!comment}
          >
            Comment
          </Button>
        </Box>
        {comments.map(
          (comment: {
            comment:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            username:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            <Box
              key={Math.random()}
              border="1px solid black"
              my={2}
              borderRadius="xl"
              px={4}
              w="90%"
              py={2}
              bg="whitesmoke"
              cursor="pointer"
              transition="all 0.25s"
              _hover={{ transform: "scale(1.01)", backgroundColor: "white" }}
            >
              <Text fontSize={"xl"} mb={2}>
                {comment.comment}
              </Text>
              <Text
                fontStyle="italic"
                textAlign="end"
                color={"#6e5b07"}
                fontWeight={700}
              >
                ~ {comment.username}
              </Text>
            </Box>
          )
        )}
      </Flex>
    </>
  );
};

export default BlogPreview;
