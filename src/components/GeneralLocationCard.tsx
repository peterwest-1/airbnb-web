import { StarIcon } from "@chakra-ui/icons";
import { Box, Badge, Image, Heading } from "@chakra-ui/react";
import React from "react";

interface GeneralLocationCardProps {}

export const GeneralLocationCard: React.FC<GeneralLocationCardProps> = ({}) => {
  const testing = {
    imageUrl: "https://picsum.photos/id/400/600",
    imageAlt: "Lantscape",
    title: "Cape Town",
    formattedDistance: "1 kilometer away",
  };
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={testing.imageUrl} alt={testing.imageAlt} />
      <Box p="4" backgroundColor="white">
        <Box>
          <Heading as="h1" size="xl" isTruncated>
            {testing.title}
          </Heading>
          <Box mb="4rem" fontWeight="semibold" as="h1" noOfLines={1}>
            {testing.formattedDistance}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
