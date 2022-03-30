import { withUrqlClient } from "next-urql";
import React from "react";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { Layout } from "../../components/Layout";
import { Box, Heading } from "@chakra-ui/react";
import { useMeQuery } from "../../generated/graphql";
import { useGetPropertyFromID } from "../../utils/useGetPropertyFromID";

interface PropertyProps {}

export const Property: React.FC<PropertyProps> = ({}) => {
  const [{ data, error, fetching }] = useGetPropertyFromID();
  const [{ data: meData }] = useMeQuery();

  if (fetching) {
    return <Layout>Loading...</Layout>;
  }
  if (error) {
    return <Layout>error : {error.message}</Layout>;
  }
  if (!data?.property) {
    return (
      <Layout>
        <Box>Could not find property</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading mb={4}>{data.property.title}</Heading>
      <Box mb={4}>{data.property.price}</Box>
      {/* {!(meData?.me?.id === data.property.creator.id) ? null : <EditDeletePostButtons id={data.post.id} />} */}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Property);
