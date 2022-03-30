import { useRouter } from "next/router";

export const useGetQueryID = () => {
  const router = useRouter();
  return router.query.id as string;
};
