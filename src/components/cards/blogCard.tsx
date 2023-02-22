import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
//Helpers
import { tagColors } from "@/helpers/tagColors";

interface BlogAuthorProps {
  date: string;
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
      <Text>—</Text>
      <Text>{props.date}</Text>
    </HStack>
  );
};

interface IBlogCard {
  domain: string;
  title: string;
  body: string;
  authorName: string;
  createdDate: string;
  id: string;
  authorImage: string;
  coverImage: string;
}

const BlogCard = (props: IBlogCard) => {
  const router = useRouter();
  const {
    domain,
    body,
    title,
    authorName,
    createdDate,
    id,
    authorImage,
    coverImage,
  } = props;
  return (
    <Box
      width={{ base: "100%", md: "25rem" }}
      border="1px solid grey"
      borderRadius="lg"
      p={2}
      mx={2}
      my={6}
      bg="#EEEEEE"
      boxShadow="xl"
    >
      <Wrap spacing="30px">
        <WrapItem>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={coverImage}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  onClick={() => router.push(`blog/${id}`)}
                />
              </Link>
            </Box>
            <Tag size={"md"} variant="solid" bg={tagColors[`${domain}`]} mt={2}>
              {domain}
            </Tag>
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                {title}
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              {`${body.slice(0, 250)}..........`}
            </Text>
            <BlogAuthor
              name={authorName}
              date={createdDate}
              image={authorImage}
            />
          </Box>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default BlogCard;
