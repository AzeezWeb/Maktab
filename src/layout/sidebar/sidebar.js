import React from 'react';
import { Box, Divider, HStack, Heading, Icon, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { CiLogin } from 'react-icons/ci';
import { sidebarItems } from '../../config/constans';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
	const router = useLocation();
	const { t } = useTranslation();
	return (
		<Box w={'400px'} height={'100vh'} bg={useColorModeValue('#002540', '#0B1C27')}>
			<HStack spacing={'20px'} p={'15px'} mb={'10px'}>
				<Image w={'52px'} h={'52px'} src='img_avatar1.png' alt='user_img' />
				<Stack w={'80%'} spacing={'1px'}>
					<Heading fontSize={'18px'} fontWeight={400} color={'#fff'}>
						Azizbek Hasanboyev
					</Heading>
					<Text color={'#0094FF'}>o’quvchi</Text>
				</Stack>
				<Link href='/'>
					<Icon color={'#0094FF'} fontSize={'28px'} as={CiLogin} />
				</Link>
			</HStack>
			<Divider />
			<Stack pt={'20px'} h={'80vh'}>
				{sidebarItems.map((item, ind) => {
					const active = router.pathname.split('/')[1] === item.link;
					return (
						<HStack key={ind} spacing={'15px'} w={'70%'} p={'10px'} borderRightRadius={'25px'} bg={active ? '#0094FF' : null}>
							<Icon color={'#fff'} fontSize={'28px'} ml={'15px'} as={item.icon} />
							<Link _hover={'none'} href={`/${item.link}`} color={'#fff'} fontSize={'18px'} lineHeight={'21px'} fontWeight={400}>
								{t(item.name)}
							</Link>
						</HStack>
					);
				})}
			</Stack>
			<Divider />
			<Link href='/' cursor={'pointer'} display={'flex'} alignItems={'center'} gap={'5px'} spacing={'15px'} w={'70%'} p={'10px'}>
				<Icon color={'#fff'} align={'end'} fontSize={'28px'} as={CiLogin} />
				<Text color={'#fff'} fontSize={'18px'} lineHeight={'21px'} fontWeight={400}>
					{t('sidebar_exit')}
				</Text>
			</Link>
		</Box>
	);
};

export default Sidebar;
