import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import img from './assets/la_address-card.svg';

const OrderCard = () => {
  return (
    <Box
    spacing="16"
    w="14rem"
    h="15.1rem"
    borderRadius="20px"
      bg='#fff'
      display="flex"
      flexDirection="column"
      justifyContent='space-evenly'
      alignItems='center'
      p='1.2rem'
      mt='.5rem'
    >
      <Image w="full" src={img} alt="header" boxSize='2rem' />
      <Text fontSize="1.25em" fontWeight="600">
        Sign up
      </Text>
      <Text noOfLines={3} fontSize='.87rem' textAlign="center">
        You will have to create an account first in other to order for meals
        conveniently and have it delivered
      </Text>
    </Box>
  );
};

export default OrderCard;
