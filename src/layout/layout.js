import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';

const Layout = ({ children }) => {
	return (
		<Flex w={'1440px'} m={' 0 auto'} gap={'15px'}  bg={useColorModeValue('#f1f5f8', '#172833')}overflow={'hidden'}>
			<Sidebar />
			<Box >
				<Header/>
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
