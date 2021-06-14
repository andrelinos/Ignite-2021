import { Grid, Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelTypeProps {
  icon: string;
  text: string;
}

export default function TravelType({ icon, text }: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
    md: true,
  })

  return (
    <Flex direction={["row", "column"]} align="center" justify="center" padding="2">
      {isMobile ?
          <Box>
            <Image
              src={`/icons/${icon}.svg`}
              w="85px"
              h="85px"
              mb="10"
            />
            <Text
              fontWeight={"600"}
              color="gray.700"
              fontSize={["md", "xl", "2xl"]}
            >
              {text}
            </Text>
          </Box>
        :
          <Box
            w="100%"
            flexDir="column"
            bg="gray.200"
            borderRadius="8"
            p="2"
             >
            <Image
              src={`/icons/${icon}.svg`}
              w={["200px", "250px"]}
              h="85px"
              p="5"
            />
            <Text
              fontWeight={["500", "600"]}
              color="gray.700"
              fontSize={["md", "xl", "2xl"]}
            >
              {text}
            </Text>
          </Box>

      }
    </Flex>
  )
}
