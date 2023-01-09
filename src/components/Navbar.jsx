import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
} from "@chakra-ui/react";




const Links = ["Project"];

const NavLink = ({ children }) => (
  <Link
    rounded={"md"}
    _hover={{
      
bg: useColorModeValue("gray.200"),
    }}

    href={"project"}
  >
    {children}
  </Link>
);

export default function Navbar({ img }) {

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (

    <>
      <Box bg={useColorModeValue("gray")} px={4}>
        <Flex h={10} justifyContent={"space-between"} alignItems={"center"} >

          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}

          />
          <HStack spacing={8} alignItems={"center"}>
            <Box> <Link href="/">Home</Link></Box>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (

                <NavLink key={link}>{link}</NavLink>

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

                <Avatar size={"sm"} src={img} />
              </MenuButton>


              <MenuList>
                <MenuItem>

                  <Link href="project">Projects</Link>

                </MenuItem>

                <MenuItem>Experience</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="project">Project</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Spacer/>
    </>
  );
}