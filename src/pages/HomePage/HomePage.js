import React from 'react';
// import { Container, Title, Text } from './HomePage.styled';
import { BiSolidContact } from 'react-icons/bi';
import { Flex, Heading, Text } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <BiSolidContact size={150} fill="teal" />
      <Heading fontSize={30} color="teal.400">
        Welcome to Contacts App!
      </Heading>
      <Text fontSize={18} m={5}>
        Save your contacts online
      </Text>
    </Flex>
  );
}
