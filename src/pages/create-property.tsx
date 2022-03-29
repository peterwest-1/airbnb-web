import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { useCreatePropertyMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { toErrorMap } from "../utils/toErrorMap";
import { useIsAuthenticated } from "../utils/useIsAuthenticated";

const CreateProperty: React.FC<{}> = ({}) => {
  const [, createProperty] = useCreatePropertyMutation();
  const router = useRouter();
  useIsAuthenticated();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: "", price: 0.0, guests: 0, bedrooms: 0, bathrooms: 0 }}
        onSubmit={async (values, { setErrors }) => {
          console.log("submitgingg");
          const response = await createProperty({ data: values });
          console.log(response);
          if (response.data?.createProperty.errors) {
            console.log(response.data?.createProperty.errors);
            setErrors(toErrorMap(response.data.createProperty.errors));
          } else if (response.data?.createProperty.property) {
            console.log(response.data?.createProperty.property);
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="Title" label="Title" type="text" />
            <InputField name="price" placeholder="R0" label="Price Per Night" type="number" />
            <InputField name="guests" placeholder="e.g. 2" label="Maximum Number Of Guests" type="number" />
            <InputField name="bedrooms" placeholder="e.g. 2" label="Number of Bedrooms" type="number" />
            <InputField name="bathrooms" placeholder="e.g. 1" label="Number of Bathrooms" type="number" />

            <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
              Create Property
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreateProperty);
