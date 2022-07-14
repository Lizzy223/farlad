import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import img1 from './assets/headerimg.png'; 
import img2 from './assets/Ellipse 2.svg'; 
import img3 from './assets/Ellipse 4.svg'; 
import img4 from './assets/Ellipse 5.svg'; 
import img5 from './assets/Ellipse 6.svg'; 



export const Card1 = () => {
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
      <Image w="full" src={img1} alt="header" />
      <Text textAlign='center' fontWeight='500' noOfLines='2' fontSize="1.1em">Pounded Yam and Efo riro</Text>
      <Text textAlign='center' fontWeight='600' color="red"> #1500 </Text>
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

export const Card2 = () => {
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
      <Image w="full" src={img5} alt="header" boxSize='8rem' />
      <Text textAlign='center' fontWeight='500' noOfLines='2' fontSize="1.1em">Eba and Egusi soup</Text>
      <Text textAlign='center' fontWeight='600' color="red"> #1500 </Text>
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

export const Card3 = () => {
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
      <Image w="full" src={img4} alt="header" boxSize='8rem' />
      <Text textAlign='center' fontWeight='500' noOfLines='2' fontSize="1.1em">Jollof rice with plantain and chicke</Text>
      <Text textAlign='center' fontWeight='600' color="red"> #2500 </Text>
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

export const Card4 = () => {
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
      <Image w="full" src={img3} alt="header" boxSize='8rem' />
      <Text textAlign='center' fontWeight='500' noOfLines='2' fontSize="1.1em">Ewa agoyin with Agege Bread</Text>
      <Text textAlign='center' fontWeight='600' color="red"> #1000 </Text>
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

export const Card5 = () => {
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
      <Image w="full" src={img2} alt="header" boxSize='8rem' />
      <Text textAlign='center' fontWeight='500' noOfLines='2' fontSize="1.1em">Ofada with Sauce and meat</Text>
      <Text textAlign='center' fontWeight='600' color="red"> #1500 </Text>
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

