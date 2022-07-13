import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import img from './assets/headerimg.png';

const Card = () => {
  return (
    <Box
      spacing="16"
      w="14rem"
      h="20.1rem"
      bg="#fff"
      borderRadius="20px"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      p='1.2rem'
    >
      <Image w="full" src={img} alt="header" />
      <Text textAlign='center' fontWeight='500' noOfLines='2' fontSize="1.1em">Ofada with Sauce and meat</Text>
      <Text textAlign='center' fontWeight='600' color="red">#1.500</Text>
      <Button
        bg="#0C9509"
        w="90%"
        fontSize={['.7rem', '1rem']}
        borderRadius="20px"
        align="left"
        color="#fff"
        p="1rem .75rem"
      >
        Add to cart
      </Button>
    </Box>
  );
};

export default Card;
