import {
  Box,
  HStack,
  Text,
  Image,
  Link,
  Stack,
  Button,
} from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import img1 from './assets/cart.png';
import img2 from './assets/logo.png';
// import img from './assets/arrowdown.png';
import { BsBorderWidth } from 'react-icons/bs';



const Navbar = () => {
  
  const [navbar, setNavbar] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const openMobileMenu = () => {
    setIsOpened(!isOpened);
  };

  

  const AddBgOnScroll = () => {
    const scrollHeight = 80;
    const pos = window.scrollY;

    if (pos >= scrollHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', AddBgOnScroll);
  }, []);

  const dropDown = useRef(null);
  
  return (
    <Box
      bg={navbar ? 'white' : 'white'}
      w="full"
      ref={dropDown}
      boxShadow={
        navbar
          ? '0 3px 7px 0 rgba(0, 0, 0, 0.18), 0 2px 8px 0 rgba(0, 0, 0, 0.15)'
          : ''
      }
      transition={navbar ? '0.5s ease' : ''}
      pos="sticky"
      h="5rem"
      justify="space-between"
      align="center"
      top="0"
      zIndex={5}
    >
      <Box display={['block', 'none']} px="1rem" >
        <HStack w="full" alignItems='center' justifyContent="space-between">
          <Box mb='.5rem'>
            <Image w="20%" alt="logo"  src={img2} />
          </Box>
          <Box
            display={['block', 'none']}
            alignItems="flex-end"
            onClick={() => openMobileMenu()}
          >
            <BsBorderWidth fontSize="1.5rem" />
          </Box>
        </HStack>
      </Box>
      <Stack
        direction={['column', 'row']}
        pos={['fixed', 'unset']}
        bgColor={['white', 'unset']}
        width={['85%', 'full']}
        left={isOpened ? '0' : '-100%'}
        top="0"
        height={['100vh', 'auto']}
        alignItems={['flex-start', 'center']}
        zIndex="3"
        transition={['all .5s ease', 'unset']}
        justifyContent="space-evenly"
        gap="16"
        pl={['1rem','0']}
      >
        <Image
          w="10%"
          alt="logo"
          display={['', '']}
          src={img2}
        />
        <Link
          color="rgba(0, 0, 0, 0.64)"
          fontWeight="600"
          _active={{ color: '#000' }}
        >
          Home
        </Link>
        <Link
          color="rgba(0, 0, 0, 0.64)"
          fontWeight="600"
          _active={{ color: '#000' }}
        >
          <HStack spacing="1">
            <Text>Menu</Text>
            {/* <Image src={img} alt="menu" boxSize=".75rem" /> */}
          </HStack>{' '}
        </Link>
        <Link
          color="rgba(0, 0, 0, 0.64)"
          fontWeight="600"
          _active={{ color: '#000' }}
        >
          About
        </Link>
        <Link
          color="rgba(0, 0, 0, 0.64)"
          fontWeight="600"
          _active={{ color: '#000' }}
        >
          Contact
        </Link>
        <Button
          borderRadius="8px"
          bg="#0C9509"
          color="#fff"
          cursor="pointer"
          p=".25rem 1rem"
        >
          Sign up
        </Button>
      </Stack>
      
    </Box>
  );
};

export default Navbar;
