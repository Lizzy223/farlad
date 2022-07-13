import React from 'react'
import {Box, Input, Button,Stack, VStack,Text, FormLabel, Image} from '@chakra-ui/react'
import img1 from './assets/Group 9.png'

const Login=()=> {
    return(
        <>
            <Box w='100%' h='100vh'  display='flex' align='center !important' justifyContent='center !important'  >
                    <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                        <Image src={img1} alt='' boxSize={['50%','30%']} />
                        <VStack alignItems='flex-start' w='full' mt='2rem' >
                            <FormLabel color='#000'>Email</FormLabel>
                            <Input type='text' placeholder='' borderColor='#000' value='' />
                        </VStack>
                        <VStack alignItems='flex-start' w='full'>
                            <FormLabel color='#000'>Password</FormLabel>
                            <Input type='password' placeholder='' borderColor='#000' value=''  />
                        </VStack>
                        <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Login</Button>
                        <Stack alignItems='flex-end'w='full' >
                            <Text color='#000' >Forgot password</Text>
                        </Stack>
                    </Stack>
            </Box>
            <Box w='100%' h='100vh'  display='flex' align='center !important' justifyContent='center !important'  >
                    <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                        <Image src={img1} alt='' boxSize={['50%','30%']} />
                        <VStack alignItems='flex-start' w='full'>
                            <FormLabel color='#000'>Email</FormLabel>
                            <Input type='email' placeholder='' borderColor='#000' value=''  />
                        </VStack>
                        <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Submit</Button>
                        <Stack alignItems='flex-end'w='full' >
                        </Stack>
                    </Stack>
            </Box>
            <Box w='100%' h='100vh'  display='flex' align='center !important' justifyContent='center !important'  >
                    <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                        <Image src={img1} alt='' boxSize={['50%','30%']} />
                        <VStack alignItems='flex-start' w='full' mt='2rem' >
                            <FormLabel color='#000'>Email</FormLabel>
                            <Input type='email' placeholder='' borderColor='#000' value='' />
                        </VStack>
                        <VStack alignItems='flex-start' w='full' mt='2rem' >
                            <FormLabel color='#000'>Name</FormLabel>
                            <Input type='text' placeholder='' borderColor='#000' value='' />
                        </VStack>
                        <VStack alignItems='flex-start' w='full'>
                            <FormLabel color='#000'>Password</FormLabel>
                            <Input type='password' placeholder='' borderColor='#000' value=''  />
                        </VStack>
                        <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Sign up</Button>
                        <Stack alignItems='flex-end'w='full' >
                            <Text color='#000' >Login</Text>
                        </Stack>
                    </Stack>
            </Box>
            <Box w='100%' h='100vh'  display='flex' align='center !important' justifyContent='center !important'  >
                    <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                        <Image src={img1} alt='' boxSize={['50%','30%']} />
                        <VStack alignItems='flex-start' w='full'>
                            <FormLabel color='#000'>Password</FormLabel>
                            <Input type='password' placeholder='' borderColor='#000' value=''  />
                        </VStack>
                        <VStack alignItems='flex-start' w='full'>
                            <FormLabel color='#000'>Confirm Password</FormLabel>
                            <Input type='password' placeholder='' borderColor='#000' value=''  />
                        </VStack>
                        <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Submit</Button>
                       
                    </Stack>
            </Box>
            
        </>
    )
}

export default Login;