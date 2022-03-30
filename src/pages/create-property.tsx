import { Button, Flex, Grid, Spacer } from "@chakra-ui/react";
import { Form, Formik, validateYupSchema } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { number, object, ObjectSchema, string } from "yup";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { Property, useCreatePropertyMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { toErrorMap } from "../utils/toErrorMap";
import { useIsAuthenticated } from "../utils/useIsAuthenticated";

const PropertyValidationSchema = object({
  title: string().required("You need to enter a title"),
  price: number().required("You need to enter a price per night").positive("Cannot be empty"),
  guests: number().required("You need to enter the maximum number of guests").positive().integer(),
  bedrooms: number().required("You need to enter the number of bedrooms").positive().integer(),
  bathrooms: number().required("You need to enter the number of bathrooms").positive().integer(),
});

const CreateProperty: React.FC<{}> = ({}) => {
  const [, createProperty] = useCreatePropertyMutation();
  const router = useRouter();
  useIsAuthenticated();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{
          title: undefined,
          price: undefined,
          guests: undefined,
          bedrooms: undefined,
          bathrooms: undefined,
        }}
        validationSchema={PropertyValidationSchema}
        onSubmit={async (values, { setErrors }) => {
          const response = await createProperty({ data: values });

          if (response.data?.createProperty.errors) {
            setErrors(toErrorMap(response.data.createProperty.errors));
          } else if (response.data?.createProperty.property) {
            router.push("/");
          }
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="Title" label="Title" type="text" />
            <Flex>
              <InputField name="price" placeholder="450.00" label="Price Per Night" type="number" />

              <InputField name="guests" placeholder="e.g. 2" label="Maximum Number Of Guests" type="number" />
            </Flex>
            <Flex>
              <InputField name="bedrooms" placeholder="e.g. 2" label="Bedrooms" type="number" />

              <InputField name="bathrooms" placeholder="e.g. 1" label="Bathrooms" type="number" />
            </Flex>
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
