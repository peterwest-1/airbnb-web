import { Badge, Box, Button, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { Property } from "../generated/graphql";

interface PropertyListItemProps {
  property: Property;
}

/*
  const property = {
    imageUrl: "https://picsum.photos/id/400/600",
    imageAlt: "Lantscape",
    beds: 2,
    baths: 1,
    title: "Modern home in city center in the heart of ",
    formattedPrice: "$1,900.00",
    rating: 3,
    reviewCount: 34,
  };
*/

export const PropertyListItem: React.FC<PropertyListItemProps> = ({ property }) => {
  const imageUrl = "https://picsum.photos/id/400/600";
  const imageAlt = "Lantscape";
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.bedrooms} beds &bull; {property.bathrooms} baths
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {property.title}
        </Box>

        <Box>
          {property.price}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <NextLink href="/property/[id]" as={`/property/${property.id}`}>
          <Link>
            <Button colorScheme="teal">View Property</Button>
          </Link>
        </NextLink>
        <Box display="flex" mt="2" alignItems="center">
          {/* {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < property.rating ? "teal.500" : "gray.300"} />
                ))} */}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {/* {property.reviewCount} reviews */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
