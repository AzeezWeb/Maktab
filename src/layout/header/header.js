import {
	Button,
	Card,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';
import { language, sidebarItems } from '../../config/constans';

const Header = () => {
	const location = useLocation();
	const [languageIcon, setLanguageIcon] = useState(language[0].icon);

	// const active = location.pathname === `/${item.link}`;
	const active = sidebarItems.some(path => `/${path.link}` === location.pathname)
	console.log(active);
	return (
		<Flex
			bg={'#fff'}
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			w={'980px'}
			borderRadius={'150px'}
			h={'55px'}
			p={'15px'}
		>
			<HStack>
				{!active ? <Icon as={FaChevronLeft} /> : null}
				<Heading fontSize={'20px'}>Sinflar </Heading>
			</HStack>
			<HStack>
				<HStack w={'386px'} h={'37px'} borderRadius={'50px'} pl={'15px'} bg={'#F0F0F0'} overflow={'hidden'}>
					<Icon as={CiSearch} color={'#9E99A6'} fontSize={'40px'} pr={'15px'} borderRight={'1px'} />
					<Input type='email' placeholder='Qidirish' variant={'unstyled'} />
				</HStack>
				{active ? <>
					<Card
					w={'37px'}
					h={'35px'}
					borderRadius={'100%'}
					alignItems={'center'}
					justifyContent={'center'}
					bg={'#F1F5F8'}
					cursor={'pointer'}
				>
					<Icon as={CiDark} fontSize={'25px'} fontWeight={'bold'} color={'#0094FF'} />
				</Card>
				<Menu>
					<MenuButton as={Button} bg={'transparent'} rightIcon={<FaAngleDown />}>
						<Image src={languageIcon} alt={'Icon'} w={'30px'} h={'30px'} />
					</MenuButton>
					<MenuList>
						{language.map((item, ind) => (
							<MenuItem key={ind} onClick={() => setLanguageIcon(item.icon)}>
								<Image src={item.icon} alt={'Icon'} w={'40px'} h={'40px'} pr={'10px'} /> {item.nativeLng}
							</MenuItem>
						))}
					</MenuList>
				</Menu>
				</> : null }
			</HStack>
		</Flex>
	);
};

export default Header;
