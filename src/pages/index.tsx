import { Button, Link } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { Layout } from "../components/Layout";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  return (
    <>
      <Layout>
        <NextLink href="/properties">
          <Link pr={"2"}>
            <Button colorScheme="teal">View Properties</Button>
          </Link>
        </NextLink>
        <NextLink href="/create-property">
          <Link>
            <Button colorScheme="teal">Create Property</Button>
          </Link>
        </NextLink>
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
