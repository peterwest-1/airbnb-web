import { Box, Button, Circle, Flex, Heading, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { SearchIcon } from "@chakra-ui/icons";

interface NavBarProps {}

const searchBar = (
  <InputGroup borderRadius="2rem" size="md">
    <Input borderRadius="2rem" placeholder="Start your search" size="md" />{" "}
    <InputRightElement width="3rem">
      <IconButton
        size="sm"
        borderRadius="1rem"
        backgroundColor="#FF5A5F"
        aria-label="Start for accomodation"
        icon={<SearchIcon color="white" />}
      />
    </InputRightElement>
  </InputGroup>
);

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  let body = null;

  if (fetching || !data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link mr={2}>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex align={"center"}>
        <NextLink href="/host/homes">
          <Button as={Link} mr={2} borderRadius={"3xl"} backgroundColor={"white"}>
            Become a Host
          </Button>
        </NextLink>

        <Box mr={2}>{data.me.email}</Box>
        <Button
          onClick={async () => {
            await logout();
            router.reload();
          }}
          variant="link"
          isLoading={logoutFetching}
        >
          Logout
        </Button>
      </Flex>
    );
  }

  const handleClick = () => {};

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="white" p={4} ml={"auto"} boxShadow={"sm"}>
      <Flex flex={1} margin="auto" align="center" maxW={2000} pl="4rem" pr={"2rem"}>
        <NextLink href="/">
          <Link>
            <Heading color="#FF5A5F">airbnb</Heading>
          </Link>
        </NextLink>
        <Box ml={"auto"}> {searchBar}</Box>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};
