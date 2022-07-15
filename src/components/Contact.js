import React from 'react';
import { Box, Text, Textarea, Input,Button, VStack } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box
      w="full"
      h="75vh"
      bg="#E5E5E5"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt='1rem'
    >
      <Box
        w={['full', "35.1rem"]}
        h="75%"
        bg="#fff"
        spacing="10"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Text textAlign="center" fontWeight="500" fontSize={['2rem', "2.8rem"]}>
          Contact Us
        </Text>
        <Text textAlign="center" fontWeight="500" fontSize="1rem">
          Need any thing? Send us a message.
        </Text>
        <VStack alignItems="flex-start" w="90%">
          <Input
            type="text"
            variant="outline"
            border="none"
            borderColor="#000"
            borderRadius="20px"
            placeholder="Name"
            background="#e5e5e5 !important"
            size="lg"
            color="rgba(0, 0, 0, 0.59)"
          />

          <Text fontSize=".7rem" color="red">
            {/* {(error?.type === 'required' && `${label} is required`) ||
                error?.message} */}
          </Text>
        </VStack>
        <VStack alignItems="flex-start" w="90%">
          <Input
            type="email"
            variant="outline"
            border="none"
            borderColor="#000"
            borderRadius="20px"
            placeholder="Email"
            background="#e5e5e5 !important"
            size="lg"
            color="rgba(0, 0, 0, 0.59)"
          />

          <Text fontSize=".7rem" color="red">
            {/* {(error?.type === 'required' && `${label} is required`) ||
                error?.message} */}
          </Text>
        </VStack>
        <VStack alignItems="flex-start"  w="90%">
          <Textarea
            type="text"
            variant="outline"
            border="none"
            borderColor="#000"
            borderRadius="20px"
            placeholder="Message"
            background="#e5e5e5 !important"
            column="15"
            row="25"
            color="rgba(0, 0, 0, 0.59)"
          />

          <Text fontSize=".7rem" color="red">
            {/* {(error?.type === 'required' && `${label} is required`) ||
                error?.message} */}
          </Text>
        </VStack>
        <Button
        bg="#045902"
        w="45%"
        fontSize={['1rem', '1rem']}
        borderRadius="20px"
        align="left"
        color="#fff"
        mb='1rem'
        p="1rem .75rem"
      >
        Submit
      </Button>
      </Box>
    </Box>
  );
};

export default Contact;
