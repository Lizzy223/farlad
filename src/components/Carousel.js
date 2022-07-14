import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Card1, Card2, Card3, Card4, Card5} from './Card';
import Order from './Order'
import {Navigation} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <Box
      h="100%"
      w="full"
      bg="rgba(196, 196, 196, 0.28) "
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      overflow='hidden'
      p="1.2rem"
    >
      <Text textAlign="center" fontWeight="600" fontSize={['2rem', "2.8rem"]}>
        Our menu
      </Text>
      <Text textAlign="center" fontWeight={['500', "600"]} fontSize="1rem">
      Take a look at out menu to find out what you will like order
      </Text>
      <Box 
      flexDirection={['column','row']} 
      justifyContent="space-evenly"
      alignItems="center"
      p="1.2rem"
      display={[ 'none','none', "flex"]}
      w='full'
     >
        <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card2/></SwiperSlide>
        <SwiperSlide><Card3/></SwiperSlide>
        <SwiperSlide><Card4/></SwiperSlide>
        <SwiperSlide><Card5/></SwiperSlide>
        </Swiper>
        
      </Box>
      <Box 
      flexDirection={['column','column']} 
      justifyContent="space-evenly"
      alignItems="center"
      p="1.2rem"
      display={[ 'flex','flex', "none"]}
      gap={6}
      w='full'
     >
       
        <><Card1/></>
        <><Card2/></>
        <><Card3/></>
        <><Card4/></>
        <><Card5/></>
        
        
      </Box>
      <Order/>
    </Box>
  );
};

export default Carousel;
