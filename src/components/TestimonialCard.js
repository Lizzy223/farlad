import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import img from './assets/testimonial.svg';

const TestimonialCard = () => {
  return (
    <Box
    w='full'
    h='75vh'
    display="flex"
      flexDirection="column"
      justifyContent='space-evenly'
      alignItems="center"
    >
    <Box
      w={['25rem',"48.625rem"]}
      h={['20rem',"26.5rem"]}
      bg="#045902"
      position='relative'
      display="flex"
      flexDirection="column"
      justifyContent='space-evenly'
      alignItems="center"
    >
      <Text fontWeight="600" fontSize={['.9em', "1.2rem"]} color="#fff">
        Blac JayBee
      </Text>
      <Text textAlign="center" w={['15rem', '34.37rem']} color="#fff" noOfLines="4" fontWeight="500">
        I've been to Tee-Farlad Restaurant many times over the years. I know
        what to expect: great food and great prices. I suggest checking them out
        and a trial will convince you.
      </Text>
      <Box display="flex" justify="center">
        <StarIcon color="#FFCE31" />
        <StarIcon color="#FFCE31" />
        <StarIcon color="#FFCE31" />
        <StarIcon color="#FFCE31" />
        <StarIcon color="#FFCE31" />
      </Box>
      <Box position="absolute" bottom="0" left="0" transform='translate(-50%,30%)'>
        <Image w="full" src={img} alt="header" />
      </Box>
    </Box>
    </Box>
  );
};

export default TestimonialCard;
