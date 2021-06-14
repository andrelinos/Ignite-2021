import { Flex, Image, Icon, Box } from "@chakra-ui/react";

import { useRouter } from "next/router";
import Link from "next/link";
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Logo() {
  const { asPath } = useRouter()
  const notHomePage = asPath !== '/'

  return (
    <Flex
      w="100%"
      maxW="1240px"
      h={["50px", "100px"]}
      justify="center"
      align="center"
      textAlign="center"
      mx="auto"
      my="8"
      pos="relative"
      >
        {notHomePage && (
          <Box pos="absolute" left="0" cursor="pointer" _hover={{color: "yellow.400"}}>
            <Link href="/" >
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start"/>
            </a>
          </Link>
          </Box>
        )}

       <Image
            w={["120px", "220px"]}
            src="/images/logo.svg"
            alt="Logo Worldtrip"
            justifySelf="center"
            align="center"
            gridColumn="2"
          />
    </Flex>
  )
}
