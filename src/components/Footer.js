import React from 'react';
import {
  Box,
  Text,
  Image,
  HStack,
  Input,
  Button,
  Divider,
  Link,
} from '@chakra-ui/react';
import img2 from './assets/logo.png';
import fb from './assets/iconoir_facebook-squared.svg';
import twit from './assets/jam_twitter-circle.svg';
import ig from './assets/fa6-brands_instagram.svg';
// import i from './assets/bi_info-circle.svg';
import thumb from './assets/ic_outline-thumb-up-alt.svg';

const Footer = () => {
  return (
    <Box bg="#045902" w="full"  p="1.5rem">
      <Box display="flex" flexWrap="wrap" >
        <Box >
          <Image
            w="15%"
            alt="logo"
            display={['', '']}
            src={img2}
          />

          <Text color="#fff" mt=".5rem" mb=".5rem">
            Subscribe for important updates
          </Text>
          <HStack w="full">
            <Input
              color="rgba(0, 0, 0, 0.47)"
              bg="#e5e5e5"
              type="text"
              border="none"
              w={['100%', '70%']}
              placeholder="Enter Email address here"
            />
            <Button
              color="#e5e5e5"
              border="none"
              fontSize={['1em', '1em']}
              p="1rem"
              w={['50%', '30%']}
              bg="#F90C0C"
              _hover={{
                color: '#f90c0c',
                bg: '#fff',
                border: '1px solid #f90c0c',
              }}
            >
              Subscribe
            </Button>
          </HStack>
        </Box>
        <Box display='flex' justifyContent='space-evenly' w='full' mt='.75rem' >
          <Text textAlign="left" fontWeight="600" color="#fff">
            <Link href="">Home</Link>
          </Text>
          <Text textAlign="left" fontWeight="600" color="#fff">
            <Link href="">Menu</Link>
          </Text>
          <Text textAlign="left" fontWeight="600" color="#fff">
            <Link href="">About us</Link>
          </Text>
          <Text textAlign="left" fontWeight="600" color="#fff">
            <Link href="">Contact Us</Link>
          </Text>
          <Text textAlign="left" color="#fff">
            <Link href="">Follow us</Link>
          
          <HStack>
            <Image
              w="full"
              alt="logo"
              boxSize="1rem"
              display={['', '']}
              src={fb}
            />
            <Image
              w="full"
              alt="logo"
              boxSize="1rem"
              display={['', '']}
              src={twit}
            />
            <Image
              w="full"
              alt="logo"
              boxSize="1rem"
              display={['', '']}
              src={ig}
            />
          </HStack>
          </Text>
        </Box>
        <HStack mt="1" w="full">
          <Box w="99%">
            <Divider />
          </Box>
          <Box
            p="1rem"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            w="2rem"
            h="2rem"
            bg="#fff"
          >
            <Image
              w="5%"
              position="absolute"
              alt="logo"
              boxSize="1rem"
              zIndex={10}
              display={['', '']}
              src={thumb}
            />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
