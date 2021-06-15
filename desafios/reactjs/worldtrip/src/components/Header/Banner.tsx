import {
  Flex, Box, Heading, Image, Text,
} from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      minW="100%"
      bgImage="url('/images/banner_home.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
    >
      <Flex
        w="100%"
        h={['178px', '250px', '250px', '335px']}
        maxW="1240px"
        justify={['center',
          'space-between']}
        align="center"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <Box>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={['xl',
              '2xl',
              '2xl',
              '2xl',
              '4xl']}
          >
            5 continentes,<br />infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            fontSize={['0.8rem',
              'xl']}
            maxW={['100%',
              '100%',
              '100%',
              '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none',
            'block']}
          src="/images/airplane.svg"
          alt="Avião amarelo voando..."
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
