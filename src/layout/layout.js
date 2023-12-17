import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './sidebar/sidebar';

const Layout = ({ children }) => {
	return (
		<Flex w={'1440px'} m={' 0 auto'} gap={'15px'} bg={'#F1F5F8'} overflow={'hidden'}>
			<Sidebar />
			<Box>{children}</Box>
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
