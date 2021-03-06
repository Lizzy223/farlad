import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import {OrderCard1,OrderCard2, OrderCard3, OrderCard4} from './OrderCard';

const Order = () => {
  return (
    <Box
      w="full"
      mt='1rem'
    >
      <Text textAlign="center" fontWeight="600" fontSize={['2em', "2.8rem"]}>
        How to order
      </Text>
      <Text textAlign="center" fontWeight="600" fontSize="1rem">
      Follow the step below to order for great meal</Text>
      <Box flexDirection={['column','row']} justifyContent="space-evenly"
      alignItems="center"
      gap='4'
      display="flex"
      w='full'
      m="1rem">
        <OrderCard1/>
        <OrderCard2/>
        <OrderCard3/>
        <OrderCard4/>
      </Box>
    </Box>
  );
};

export default Order;
