import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

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
}
const BlogPreview = (props: IBlogPreview) => {
  const { title, authorImage, body, authorName, coverImage } = props;
  return (
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
  );
};

export default BlogPreview;
