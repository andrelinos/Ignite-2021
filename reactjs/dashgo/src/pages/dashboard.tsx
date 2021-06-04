import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidbar";

interface OptionProps {
  type?: 'datatime';
}

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-05-17T23:59:59-03:00',
      '2021-05-18T23:59:59-03:00',
      '2021-05-19T23:59:59-03:00',
      '2021-05-20T23:59:59-03:00',
      '2021-05-21T23:59:59-03:00',
      '2021-05-22T23:59:59-03:00',
      '2021-05-23T23:59:59-03:00',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109]
  }
]


export default function Dashboard() {
  return (
    <Flex flexDir="column" h="100vh">

      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

        </SimpleGrid>
      </Flex>

    </Flex>
  )
}
