import { Box, Button, Grid, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';
import img from './assets/headerimg.png';

const Header = () => {
  return (
    <>
      <Box w="100%" h={['100vh','65vh','65vh', "100vh"]}>
        <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']} p="2rem">
          <Box p="1rem" >
            <VStack alignItems="flex-start" spacing={['10','5',"3"]}>
              <Text
                fontWeight="600"
                fontSize={['1.6rem', '2.8rem']}
                noOfLines={2}
                textAlign="left"
              >
                Get your fresh and tasty food delivered
              </Text>
              <Text
                fontWeight="400"
                fontSize={['1rem', '1rem']}
                lineHeight="2.25rem"
                noOfLines={4}
                textAlign="left"
              >
                Great food brings people together. When people connect over a
                meal, it gives them time to refuel and build relationships with
                others. We deliver culinary excellence to guests at corporate
                workplaces, manufacturing companies, college campuses, and
                organizations of all sizes.
              </Text>
              <Button
                bg="#0C9509"
                w={['50%','50%','50%', '25%']}
                fontSize={['1rem', '1rem']}
                borderRadius="8px"
                align="left"
                color="#fff"
                p="1rem .75rem"
                _hover={{
                    background:'#fff',
                    color:'#0c9509',
                    border:'1px solid #0c9509'
                }}
              >
                Learn More
              </Button>
            </VStack>
          </Box>
          <Box>
            <Image w="100%" src={img} alt="header" />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
