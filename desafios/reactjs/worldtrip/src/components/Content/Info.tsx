import {
  Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton,
  PopoverContent, PopoverHeader, PopoverTrigger, Box, Text, Tooltip,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

interface ContinentProps {
  continent: {
   countries: number;
   languages: number;
   cities: number;
   cities_list: string;
  }
}

export default function Infos({ continent }: ContinentProps) {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="500">
          {continent.countries}
        </Heading>
        <Text fontWeight="500" fontSize={['md', 'xl']} color="gray.700">
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start',
          'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="500">
          {continent.languages}
        </Heading>
        <Text fontWeight="500" fontSize={['md', 'xl']} color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start',
          'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="500">
          {continent.cities}
        </Heading>
        <Flex fontWeight="500" fontSize={['md', 'xl']} color="gray.700">
          <Text
            fontWeight="500"
            fontSize={['md',
              'xl']}
            color="gray.700"
            pos="relative"
          >
            cidades +100
          </Text>
          <Popover>

            <PopoverTrigger>
              <Box>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={['10px', '16px']}
                  h={['10px', '16px']}
                />
              </Box>
            </PopoverTrigger>

            <PopoverContent
              bg="gray.700"
              color="yellow.400"
              pos="absolute"
              top="0"
              right="0"
            >
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                {continent.cities_list}
              </PopoverBody>
            </PopoverContent>

          </Popover>
        </Flex>
      </Flex>

    </Flex>
  );
}
