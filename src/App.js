import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Header from './components/Header'
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials'
import Carousel from './components/Carousel';
import Contact from './components/Contact'
import Footer from './components/Footer';


function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Header/>
      <Carousel/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
