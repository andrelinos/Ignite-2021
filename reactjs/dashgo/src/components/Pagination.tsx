import { Stack, Button, Box } from '@chakra-ui/react';

export function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          w="4"
          size="sm"
          fontSize="xs"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
        >
          1
      </Button>
        <Button
          w="4"
          size="sm"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
      </Button>
        <Button
          w="4"
          size="sm"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          3
      </Button>
      </Stack>

    </Stack>
  )
}
