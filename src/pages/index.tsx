import { withUrqlClient } from "next-urql";
import { GeneralLocationCard } from "../components/GeneralLocationCard";
import { Layout } from "../components/Layout";
import { PropertyListItem } from "../components/PropertyListItem";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  return (
    <>
      <Layout>
        <GeneralLocationCard />
        <PropertyListItem />
      </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
