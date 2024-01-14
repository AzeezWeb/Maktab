// import { Box, Button, Container, Flex, Heading, Icon, Image, Input, Text, useColorModeValue } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import { FormControl } from '@chakra-ui/react';
// import { CiUser } from 'react-icons/ci';
// import { CiLock } from 'react-icons/ci';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const SignIn = () => {
// 	const { t } = useTranslation();

// 	const [input, setInput] = useState('');
// 	const [inputPassword, setInputPassword] = useState('');
// 	const navigate = useNavigate();
// 	const handleInputChange = e => setInput(e.target.value);
// 	const handleInputPasswordChange = e => setInputPassword(e.target.value);
// 	function errorMessageExample() {
// 		if (input !== '' && inputPassword !== '') navigate('/classes');
// 	}

// 	return (
// 		<Flex
// 			boxShadow={'0px 7px 63px 0px rgba(34, 60, 80, 0.9)'}
// 			maxH={'550px'}
// 			maxW={'1000px'}
// 			m={'55px auto'}
// 			overflow={'hidden'}
// 			bg={useColorModeValue('#fff', '#1A202C')}
// 		>
// 			<Box>
// 				<Image w={'100%'} h={'100hv'} src='login.svg' alt='Dan Abramov' />
// 			</Box>
// 			<Container pt={'80px'} pl={'10px'}>
// 				<Heading textAlign={'center'} color={useColorModeValue('#002540', '#0094FF')} pb={'30px'}>
// 					{t('login', { ns: 'translate' })}
// 				</Heading>

// 				<FormControl>
// 					<Flex
// 						alignItems={'center'}
// 						w={'495px'}
// 						h={'60px'}
// 						border={'1px'}
// 						borderColor={'#B6B6B6'}
// 						borderRadius={'12px'}
// 						p={'15px'}
// 						mb={'20px'}
// 						bg={useColorModeValue('#fff', '#2C374C')}
// 					>
// 						<Icon fontSize={'30px'} color={'#B6B6B6'} pr={'10px'} borderRight={'1px'} borderColor={'#B6B6B6'} as={CiUser} />
// 						<Input
// 							variant='unstyled'
// 							type='email'
// 							placeholder='Login'
// 							_placeholder={{ color: '#B6B6B6' }}
// 							pl={'10px'}
// 							color={useColorModeValue('#002540', '#fff')}
// 							value={input}
// 							onChange={handleInputChange}
// 						/>
// 					</Flex>

// 					<Flex
// 						alignItems={'center'}
// 						w={'495px'}
// 						h={'60px'}
// 						border={'1px'}
// 						borderColor={'#B6B6B6'}
// 						borderRadius={'12px'}
// 						p={'15px'}
// 						mt={'10px'}
// 						mb={'10px'}
// 						bg={useColorModeValue('#fff', '#2C374C')}
// 					>
// 						<Icon fontSize={'30px'} color={'#B6B6B6'} pr={'10px'} borderRight={'1px'} borderColor={'#B6B6B6'} as={CiLock} />
// 						<Input
// 							variant='unstyled'
// 							type='password'
// 							placeholder='Parol'
// 							_placeholder={{ color: '#B6B6B6' }}
// 							pl={'10px'}
// 							color={useColorModeValue('#002540', '#fff')}
// 							value={inputPassword}
// 							onChange={handleInputPasswordChange}
// 						/>
// 					</Flex>

// 					<Button
// 						bg={useColorModeValue('#002540', '#0094FF')}
// 						w={'495px'}
// 						h={'60px'}
// 						fontSize={'22px'}
// 						borderRadius='12px'
// 						mt={'70px'}
// 						color={'#fff'}
// 						textAlign={'center'}
// 						_hover={'none'}
// 						onClick={errorMessageExample}
// 					>
// 						{t('login', { ns: 'translate' })}
// 					</Button>
// 				</FormControl>
// 				<Text textAlign='center' color={'#B6B6B6'} position={'absolute'} bottom={'5px'} right={'24%'}>
// 					Copyright © 2021 of Tashkent Scholl of Sodiq
// 				</Text>
// 			</Container>
// 		</Flex>
// 	);
// };

// export default SignIn;


import React from 'react';
import { useForm } from 'react-hook-form';
import {
	Box,
	Image,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { CiUser, CiLock } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.email !== '' && data.password !== '') {
      navigate('/classes');
    }
  };

  return (
    <Flex
      boxShadow={'0px 7px 63px 0px rgba(34, 60, 80, 0.9)'}
      maxH={'550px'}
      maxW={'1000px'}
      m={'55px auto'}
      overflow={'hidden'}
      bg={useColorModeValue('#fff', '#1A202C')}
    >
			<Box>
				<Image w={'100%'} h={'100hv'} src='login.svg' alt='Dan Abramov' />
			</Box>
      <Container pt={'80px'} pl={'10px'}>
        <Heading textAlign={'center'} color={useColorModeValue('#002540', '#0094FF')} pb={'30px'}>
          {t('login', { ns: 'translate' })}
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            alignItems={'center'}
            w={'495px'}
            h={'60px'}
            border={'1px'}
            borderColor={'#B6B6B6'}
            borderRadius={'12px'}
            p={'15px'}
            mb={'20px'}
            bg={useColorModeValue('#fff', '#2C374C')}
          >
            <Icon fontSize={'30px'} color={'#B6B6B6'} pr={'10px'} borderRight={'1px'} borderColor={'#B6B6B6'} as={CiUser} />
            <Input
              variant='unstyled'
              type='email'
              placeholder='Login'
              _placeholder={{ color: '#B6B6B6' }}
              pl={'10px'}
              color={useColorModeValue('#002540', '#fff')}
              {...register('email', { required: 'Emailni kiriting', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Noto\'g\'ri email format' } })}
            />
          </Flex>

          {errors.email && (
            <Text color="red" mb={2}>
              {errors.email.message}
            </Text>
          )}

          <Flex
            alignItems={'center'}
            w={'495px'}
            h={'60px'}
            border={'1px'}
            borderColor={'#B6B6B6'}
            borderRadius={'12px'}
            p={'15px'}
            mt={'10px'}
            mb={'10px'}
            bg={useColorModeValue('#fff', '#2C374C')}
          >
            <Icon fontSize={'30px'} color={'#B6B6B6'} pr={'10px'} borderRight={'1px'} borderColor={'#B6B6B6'} as={CiLock} />
            <Input
              variant='unstyled'
              type='password'
              placeholder='Parol'
              _placeholder={{ color: '#B6B6B6' }}
              pl={'10px'}
              color={useColorModeValue('#002540', '#fff')}
              {...register('password', { required: 'Parolni kiriting', minLength: { value: 6, message: 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak' } })}
            />
          </Flex>

          {errors.password && (
            <Text color="red" mb={2}>
              {errors.password.message}
            </Text>
          )}

          <Button
            type="submit"
            bg={useColorModeValue('#002540', '#0094FF')}
            w={'495px'}
            h={'60px'}
            fontSize={'22px'}
            borderRadius='12px'
            mt={'70px'}
            color={'#fff'}
            textAlign={'center'}
            _hover={'none'}
          >
            {t('login', { ns: 'translate' })}
          </Button>
        </form>

				<Text textAlign='center' color={'#B6B6B6'} position={'absolute'} bottom={'5px'} right={'24%'}>
          Copyright © 2021 of Tashkent School of Sodiq
        </Text>
      </Container>
    </Flex>
  );
};

export default SignIn;







