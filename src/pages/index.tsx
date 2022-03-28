import { withUrqlClient } from "next-urql";
import { Layout } from "../components/Layout";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  return (
    <>
      <Layout>hi</Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
