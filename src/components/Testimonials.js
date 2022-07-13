import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import TestimonialCard from './TestimonialCard';
import { StarIcon } from '@chakra-ui/icons';
import img from './assets/testimonial.svg';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <Box w="full" bg="#fff" h="100%" mt="1.75rem">
      <Text textAlign="center" fontWeight="600" fontSize="2rem">
        Testimonials
      </Text>
      <Text textAlign="center" fontWeight="600" fontSize="1rem">
        Find out what other people are saying about us
      </Text>
      <Box
        flexDirection={['column', 'row']}
        justifyContent="space-evenly"
        alignItems="center"
        p="1.2rem"
        display={['none', 'flex']}
        h="75vh"
        w={['100%', 'full']}
      >
        <Swiper
          navigation
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={'auto'}
          centeredSlides={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box
        flexDirection={['column', 'row']}
        justifyContent="space-evenly"
        alignItems="center"
        p="1.2rem"
        display={['flex', 'none']}
        h="75vh"
        w={['100%', 'full']}
      >
        <Box
          w={['25rem', '48.625rem']}
          h={['20rem', '26.5rem']}
          bg="#045902"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Text fontWeight="600" fontSize={['.9em', '1.2rem']} color="#fff">
            Blac JayBee
          </Text>
          <Text
            textAlign="center"
            w={['15rem', '34.37rem']}
            color="#fff"
            noOfLines="4"
            fontWeight="500"
          >
            I've been to Tee-Farlad Restaurant many times over the years. I know
            what to expect: great food and great prices. I suggest checking them
            out and a trial will convince you.
          </Text>
          <Box display="flex" justify="center">
            <StarIcon color="#FFCE31" />
            <StarIcon color="#FFCE31" />
            <StarIcon color="#FFCE31" />
            <StarIcon color="#FFCE31" />
            <StarIcon color="#FFCE31" />
          </Box>
          <Box
            position="absolute"
            bottom="0"
            left="0"
            transform="translate(42vw,50%)"
          >
            <Image w="full" boxSize='3rem' src={img} alt="header" />
          </Box>
        </Box>

        <Box
          w={['25rem', '48.625rem']}
          h={['20rem', '26.5rem']}
          mt='2rem'
          bg="#045902"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Text fontWeight="600" fontSize={['.9em', '1.2rem']} color="#fff">
            Blac JayBee
          </Text>
          <Text
            textAlign="center"
            w={['15rem', '34.37rem']}
            color="#fff"
            noOfLines="4"
            fontWeight="500"
          >
            I've been to Tee-Farlad Restaurant many times over the years. I know
            what to expect: great food and great prices. I suggest checking them
            out and a trial will convince you.
          </Text>
          <Box display="flex" justify="center">
            <StarIcon color="#FFCE31" />
            <StarIcon color="#FFCE31" />
            <StarIcon color="#FFCE31" />
            <StarIcon color="#FFCE31" />
            <StarIcon color="#FFCE31" />
          </Box>
          <Box
            position="absolute"
            bottom="0"
            left="0"
            transform="translate(41vw,50%)"
          >
            <Image w="full" boxSize='3rem' src={img} alt="header" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
