import { Flex } from "@chakra-ui/layout";
import { Header } from "../components/Header";
import { Sidebar }from "../components/Sidbar";

export default function Dashboard() {
  return (
    <Flex flexDir="column" h="100vh"> 
      
      <Header />

    <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
      <Sidebar />
    </Flex>

    </Flex>
  )
}