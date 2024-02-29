import React from "react";
import { Box, Button, Flex, Heading, Image, Input, Stack, Text, useColorMode, VStack, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaPlus } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={5}>
      <Flex w="full" justifyContent="space-between" alignItems="center" mb={10}>
        <Heading>Nirvana_4 Timeline</Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} isRound size="lg" />
      </Flex>

      <Box w="full" p={5} boxShadow="md" borderRadius="md">
        <Text fontSize="xl" mb={3}>
          Add New Shot
        </Text>
        <Flex>
          <Input placeholder="Shot Name" mr={2} />
          <Button leftIcon={<FaPlus />}>Add Shot</Button>
        </Flex>
      </Box>

      <Stack direction={["column", "row"]} spacing={4} align="center">
        <Box p={5} boxShadow="md" borderRadius="md" minWidth="sm">
          <Text fontSize="lg" mb={2}>
            Shot 1
          </Text>
          <Image src="https://images.unsplash.com/photo-1629753908080-e8551ac57b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2hvdHxlbnwwfHx8fDE3MDkyMjQ5NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Button mt={3} size="sm" colorScheme="blue">
            Details & Settings
          </Button>
        </Box>
        <Box p={5} boxShadow="md" borderRadius="md" minWidth="sm">
          <Text fontSize="lg" mb={2}>
            Opening
          </Text>
          <Image src="https://images.unsplash.com/photo-1656272671699-cb63aaf54a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWxtJTIwb3BlbmluZyUyMHNob3R8ZW58MHx8fHwxNzA5MjI0OTUwfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Button mt={3} size="sm" colorScheme="blue">
            Details & Settings
          </Button>
        </Box>
        <Box p={5} boxShadow="md" borderRadius="md" minWidth="sm">
          <Text fontSize="lg" mb={2}>
            Bus Stopped
          </Text>
          <Image src="https://images.unsplash.com/photo-1706716616480-36cf333d55b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXMlMjBzdG9wcGVkJTIwc2hvdHxlbnwwfHx8fDE3MDkyMjQ5NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Button mt={3} size="sm" colorScheme="blue">
            Details & Settings
          </Button>
        </Box>
      </Stack>
    </VStack>
  );
};

export default Index;
