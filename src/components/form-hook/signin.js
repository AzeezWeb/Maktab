import { Box, Button, Container, Flex, Heading, Icon, Image, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FormControl } from '@chakra-ui/react';
import { CiUser } from 'react-icons/ci';
import { CiLock } from 'react-icons/ci';
import {  useNavigate } from 'react-router-dom';

const SignIn = () => {
	const [input, setInput] = useState('');
	const [inputPassword, setInputPassword] = useState('');
  const navigate =useNavigate()
	const handleInputChange = e => setInput(e.target.value);
	const handleInputPasswordChange = e => setInputPassword(e.target.value);
	function errorMessageExample() {
    if(input !== '' && inputPassword !== '') 
    navigate('/pages')
    }
	

	return (
		<Flex maxH={'100vh'} maxW={'100wh'} overflow={'hidden'}>
			<Box>
				<Image w={'100%'} h={'100hv'} src='login.svg' alt='Dan Abramov' />
			</Box>
			<Container pt={'80px'}>
				<Heading textAlign={'center'} color={'#002540'} pb={'30px'}>
					Kirish
				</Heading>

				<FormControl>
					<Flex
						alignItems={'center'}
						w={'495px'}
						h={'60px'}
						border={'1px'}
						borderColor={'#B6B6B6'}
						borderRadius={'12px'}
						p={'15px'}
						mb={'10px'}
					>
						<Icon fontSize={'30px'} color={'#B6B6B6'} pr={'10px'} borderRight={'1px'} borderColor={'#B6B6B6'} as={CiUser} />
						<Input
							variant='unstyled'
							type='email'
							placeholder='Login'
							_placeholder={{ color: '#B6B6B6' }}
							pl={'10px'}
							color={'#002540'}
							value={input}
							onChange={handleInputChange}
						/>
					</Flex>

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
					>
						<Icon fontSize={'30px'} color={'#B6B6B6'} pr={'10px'} borderRight={'1px'} borderColor={'#B6B6B6'} as={CiLock} />
						<Input
							variant='unstyled'
							type='password'
							placeholder='Parol'
							_placeholder={{ color: '#B6B6B6' }}
							pl={'10px'}
							color={'#002540'}
							value={inputPassword}
							onChange={handleInputPasswordChange}
						/>
					</Flex>

					<Button
						bg='#002540'
						w={'495px'}
						borderRadius='12px'
						mt={'70px'}
						h={'60px'}
						color={'#fff'}
						textAlign={'center'}
            _hover={'none'}
						onClick={errorMessageExample}
					>
						Kirish
					</Button>
				</FormControl>
        <Text textAlign='center' color={'#B6B6B6'} mt={'230px'} >Copyright © 2021 of Tashkent Scholl of Sodiq</Text>
			</Container>
		</Flex>
	);
};

export default SignIn;
