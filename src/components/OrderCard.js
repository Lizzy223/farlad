import React from 'react';
import { Box, Text,  Image } from '@chakra-ui/react';
import img from './assets/la_address-card.svg';
import img2 from './assets/forknknife.svg';
import img3 from './assets/creditCard.svg';
import img4 from './assets/bytesize_location.png';

export const OrderCard1 = () => {
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

export const OrderCard2 = () => {
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
        <Image w="full" src={img2} alt="header" boxSize='2rem' />
        <Text fontSize="1.25em" fontWeight="600">
          Order
        </Text>
        <Text noOfLines={3} fontSize='.87rem' textAlign="center">
        After creating an account, you 
will be automatically login and  you 
can select your prefer meals easily
        </Text>
      </Box>
    );
  };

  export const OrderCard3 = () => {
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
        <Image w="full" src={img3} alt="header" boxSize='2rem' />
        <Text fontSize="1.25em" fontWeight="600">
          Payment
        </Text>
        <Text noOfLines={3} fontSize='.87rem' textAlign="center">
        Pay for your meals securely 
with your credit card or another 
other payment metyhod
        </Text>
      </Box>
    );
  };

  export const OrderCard4 = () => {
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
        <Image w="full" src={img4} alt="header" boxSize='2rem' />
        <Text fontSize="1.25em" fontWeight="600">
        Set location
        </Text>
        <Text noOfLines={3} fontSize='.87rem' textAlign="center">
        Set your  delivery location so
 your meals can be delivered to 
you ASAP
        </Text>
      </Box>
    );
  };

