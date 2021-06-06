import {
  Flex, Text, Box, Avatar,
} from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Andrelino Silva</Text>
          <Text color="gray.300" fontSize="sm">
            andrelinodev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Andrelino Silva" src="https://github.com/andrelinos.png" />
    </Flex>
  );
}
