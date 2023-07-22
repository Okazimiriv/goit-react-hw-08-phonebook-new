import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';

import { useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
// import { GiPadlock } from 'react-icons/gi';

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  // Link,
  // Avatar,
  FormControl,
  // FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { FcLock } from 'react-icons/fc';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() =>
        toast.success('Operation successfully!', {
          position: 'top-center',
        })
      )
      .catch(() =>
        toast.error('Something went wrong... Try again.', {
          position: 'top-center',
        })
      );
    form.reset();
  };

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Avatar bg="teal.500" /> */}
        <Icon as={FcLock} w={50} h={50} />
        <Heading color="gray.600">Register</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="text" name="name" placeholder="Username" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <Icon as={MdEmail} color="gray.300" w={5} h={5} />
                    }
                  />
                  <Input type="email" name="email" placeholder="Email" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="on"
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';
// import { Label, Form } from './RegisterForm.styled';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <Form onSubmit={handleSubmit} autoComplete="off">
//       <Label>
//         Username
//         <input type="text" name="name" />
//       </Label>
//       <Label>
//         Email
//         <input type="email" name="email" />
//       </Label>
//       <Label>
//         Password
//         <input type="password" name="password" />
//       </Label>
//       <button type="submit">Register</button>
//     </Form>
//   );
// };
