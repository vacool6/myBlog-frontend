import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home"];

interface INavLink {
  children: ReactNode;
  redirect: string;
}

const NavLink = (props: INavLink) => {
  const { children, redirect } = props;
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      color="white"
      _hover={{
        textDecoration: "none",
        bg: "#EEEEEE",
        color: "black",
      }}
      href={redirect}
    >
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"#6e5b07"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              bg="#EEEEEE"
              borderRadius="xl"
              p={2}
              fontSize={"xl"}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontStyle="italic" fontFamily="cursive">
                my
              </Text>
              <Text fontWeight={700} ml={1}>
                BLOG
              </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} redirect="/home">
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                  }
                />
              </MenuButton>
              <MenuList>
                <Tooltip
                  label="We will add this feature soon :)"
                  placement="left-start"
                >
                  <MenuItem isDisabled>Write a blog</MenuItem>
                </Tooltip>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} redirect="/home">
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
