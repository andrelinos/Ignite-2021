import {
  Flex, Text, Box, Avatar,
} from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Andrelino</Text>
        <Text color="gray.300" fontSize="sm">
          andrelinodev@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Andrelino Silva" src="https://github.com/andrelinos.png" />
    </Flex>
  );
}
