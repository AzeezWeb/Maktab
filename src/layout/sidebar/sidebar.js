import React from 'react';
import { Box, Divider, HStack, Heading, Icon, Image, Link, Stack, Text, background, color } from '@chakra-ui/react';
import { CiLogin } from 'react-icons/ci';
import { sidebarItems } from '../../helpers';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
	const router = useLocation();

	console.log(router);
	return (
		<Box w={'400px'} height={'100vh'} bg={'#002540'}>
			<HStack spacing={'20px'} p={'15px'} mb={'10px'}>
				<Image w={'52px'} h={'52px'} src='img_avatar1.png' alt='Dan Abramov' />
				<Stack w={'80%'} spacing={'1px'}>
					<Heading fontSize={'18px'} fontWeight={400} color={'#fff'}>
						Azizbek Hasanboyev
					</Heading>
					<Text color={'#0094FF'}>o’quvchi</Text>
				</Stack>
				<Link href='/'> <Icon color={'#0094FF'}  fontSize={'28px'} as={CiLogin} /></Link>
			</HStack>
			<Divider />
			<Stack pt={'20px'} h={'80vh'}>
				{sidebarItems.map((item, ind) => {
					const active = router.pathname === `/${item.link}`;
					console.log(active);
					return (
						<HStack key={ind} spacing={'15px'} w={'70%'} p={'10px'} borderRightRadius={'25px'} bg={active ? '#0094FF' : null}>
							<Icon color={'#fff'} fontSize={'28px'} ml={'15px'} as={item.icon} />
							<Link _hover={'none'} href={item.link} color={'#fff'} fontSize={'18px'} lineHeight={'21px'} fontWeight={400}>
								{item.name}
							</Link>
						</HStack>
					);
				})}
			</Stack>
			<Divider />
			<Link href='/' cursor={'pointer'} display={'flex'} alignItems={'center'} gap={'5px'}  spacing={'15px'} w={'70%'} p={'10px'}>
				<Icon color={'#fff'} align={'end'} fontSize={'28px'} as={CiLogin} />
				<Text color={'#fff'} fontSize={'18px'} lineHeight={'21px'} fontWeight={400}>
					Chiqish
				</Text>
			</Link>
		</Box>
	);
};

export default Sidebar;
