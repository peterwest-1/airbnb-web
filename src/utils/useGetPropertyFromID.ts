import { useRouter } from "next/router";
import { usePropertyQuery } from "../generated/graphql";
import { useGetQueryID } from "./useGetQueryID";

export const useGetPropertyFromID = () => {
  const id = useGetQueryID();

  return usePropertyQuery({
    variables: {
      propertyId: id,
    },
  });
};
