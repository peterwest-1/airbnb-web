import { Stack, Flex, Box, Heading, Button, Link, Text } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React from "react";
import { Layout } from "../components/Layout";
import { usePropertiesQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

interface PropertiesProps {}

export const Properties: React.FC<PropertiesProps> = ({}) => {
  const [{ data, error, fetching }] = usePropertiesQuery();
  console.log(data);
  return (
    <Layout>
      {!data && fetching ? (
        <div>Loading...</div>
      ) : (
        <Stack spacing={8}>
          {/* Always defined with bang operator */}
          {data!.properties.map((p) =>
            !p ? null : (
              <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
                <Box flex={1}>
                  <NextLink href="/properties/[id]" as={`/post/${p.id}`}>
                    <Link>
                      <Heading fontSize="xl">{p.title}</Heading>
                    </Link>
                  </NextLink>

                  <Flex align="center">
                    <Text>Price per night {p.price}</Text>
                    <Text>Guests {p.guests}</Text>
                    <Text>Bathrooms {p.bathrooms}</Text>
                    <Text>Bathrooms {p.bedrooms}</Text>
                  </Flex>
                </Box>
              </Flex>
            )
          )}
        </Stack>
      )}
    </Layout>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Properties);
