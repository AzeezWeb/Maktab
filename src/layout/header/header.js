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
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import { MdOutlineLightMode } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa';
import { language, sidebarItems } from '../../config/constans';
import { useTranslation } from 'react-i18next';


const Header = () => {
	const location = useLocation();
	const [languageIcon, setLanguageIcon] = useState(language[0].icon);
	const { t, i18n } = useTranslation();
	const navigate = useNavigate()

	const backFunciton = () => {
		navigate(-1)
	}

	const onLanguage = lng => {
		i18n.changeLanguage(lng.lng);
		setLanguageIcon(lng.icon);
	};

	const active = sidebarItems.some(path => `/${path.link}` === location.pathname);
	const title = sidebarItems.filter(path => location.pathname.split('/')[1] === path.link);
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Flex
			bg={useColorModeValue('#fff', '#2D3D48')}
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			w={'100%'}
			borderRadius={'150px'}
			h={'55px'}
			p={'15px'}
			mt={'15px'}
		>
			<HStack>
				{!active ? <Icon as={FaChevronLeft} onClick={backFunciton} cursor={'pointer'} /> : null}
				<Heading fontSize={'20px'}>{t(title[0].name)} </Heading>
			</HStack>
			<HStack>
				<HStack
					w={'386px'}
					h={'37px'}
					borderRadius={'50px'}
					pl={'15px'}
					bg={useColorModeValue('#F0F0F0', '#172833')}
					overflow={'hidden'}
				>
					<Icon as={CiSearch} color={'#9E99A6'} fontSize={'40px'} pr={'15px'} borderRight={'1px'} />
					<Input type='email' placeholder={t('header_search_input')} variant={'unstyled'} />
				</HStack>
				{active ? (
					<>
						<Card
							w={'37px'}
							h={'35px'}
							borderRadius={'100%'}
							alignItems={'center'}
							justifyContent={'center'}
							bg={'#F1F5F8'}
							cursor={'pointer'}
						>
							{colorMode === 'light' ? (
								<Icon as={CiDark} onClick={toggleColorMode} fontSize={'25px'} fontWeight={'bold'} color={'#0094FF'} />
							) : (
								<Icon as={MdOutlineLightMode} onClick={toggleColorMode} fontSize={'25px'} fontWeight={'bold'} color={'#0094FF'} />
							)}
						</Card>
						<Menu>
							<MenuButton as={Button} bg={'transparent'} rightIcon={<FaAngleDown />}>
								<Image src={languageIcon} alt={'Icon'} w={'30px'} h={'30px'} />
							</MenuButton>
							<MenuList>
								{language.map((item, ind) => (
									<MenuItem key={ind} onClick={() => onLanguage(item)}>
										<Image src={item.icon} alt={'Icon'} w={'40px'} h={'40px'} pr={'10px'} /> {item.nativeLng}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</>
				) : null}
			</HStack>
		</Flex>
	);
};

export default Header;
