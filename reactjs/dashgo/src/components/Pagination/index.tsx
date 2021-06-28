import {
  Stack, Box, Text, Button,
} from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePageArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePageArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  function handlePreviousPages() {
    // TODO
  }

  function handleNextPages() {
    // TODO
  }

  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem number={1} />
            {currentPage > (2 + siblingsCount)
            && (
              <Text
                as="span"
                color="gray.300"
                bg="gray.700"
                w={8}
                textAlign="center"
                borderRadius="md"
                cursor="default"
              >
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0
          && previousPages.map((page) => (
            <PaginationItem
              key={page}
              number={page}
            />
          ))}

        <PaginationItem number={currentPage} isCurrent />
        {nextPages.length > 0
          && nextPages.map((page) => (
            <PaginationItem
              key={page}
              number={page}
            />
          ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage
            && (
            <Text
              as="span"
              color="gray.300"
              bg="gray.700"
              w={8}
              textAlign="center"
              borderRadius="md"
              cursor="default"
            >
              ...
            </Text>
            )}
            <PaginationItem number={lastPage} />
          </>
        )}

      </Stack>

    </Stack>
  );
}
