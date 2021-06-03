import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" mr="8" >
      <Stack spacing="12" align="flex-start">
        <Box>
         <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="sm"
           >
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="left">

            <Link
              display="flex"
              align="center"
              _hover={{
                textDecor: "none"
              }}
            >
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">DashBoard</Text>
            </Link>

            <Link
              display="flex"
              align="center"
              _hover={{
                textDecor: "none"
              }}
            >
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Usuários</Text>
            </Link>

          </Stack>

        </Box>

        <Box>
         <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="sm"
          >
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="left">

            <Link
              display="flex"
              align="center"
              _hover={{
                textDecor: "none"
              }}
            >
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Formulários</Text>
            </Link>

            <Link
              display="flex"
              align="center"
              _hover={{
                textDecor: "none"
              }}
            >
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Automação</Text>
            </Link>

          </Stack>

        </Box>

      </Stack>
    </Box>
  )
}