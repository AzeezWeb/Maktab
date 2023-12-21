import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';

const Layout = ({ children }) => {
	const scrollbarColor = useColorModeValue('#F1F5F8', '#172833');

	return (
		<Flex maxW='100vw' gap={'15px'} bg={useColorModeValue('#f1f5f8', '#172833')} overflow={'hidden'}>
			<Sidebar />
			<Box
				w={'100vw'}
				h={'100vh'}
				p={'0px 15px 15px 15px'}
				overflowY={'scroll'}
				css={{
					'&::-webkit-scrollbar': {
						width: '4px',
					},
					'&::-webkit-scrollbar-track': {
						width: '1px',
					},
					'&::-webkit-scrollbar-thumb': {
						background: scrollbarColor,
						borderRadius: '24px',
					},
				}}
			>
				<Header />
				{children}
			</Box>
		</Flex>
	);
};

export default Layout;

export const withLayout = Component => {
	return function withLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
