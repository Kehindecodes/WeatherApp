import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/core';
import WeatherInfo from './WeatherInfo';
import './Layout.css';
import WeatherState from '../context/WeatherState';

const Layout = () => {
  return (
    <Flex m={0} p={0}>
      <Box
        width='459px'
        height='100vh'
        textAlign='left'
        m={0}
        p={0}
        className='side'
        backgroundColor='#1e213a'
      >
        <Box className='layer'></Box>
        {/* <WeatherInfo /> */}
      </Box>
      <Box width='981px' height='100vh' backgroundColor=' #100e1d'></Box>
    </Flex>
  );
};

export default Layout;
