import React from 'react';
import { withLayout } from '../../layout/layout';
import {
	Box,
	Icon,
	Link,
	Image,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	useColorModeValue,
} from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStore from '../../store/store';
import Header from '../../components/header/header';
import ButtonSolid from '../../components/button-solid/button-solid';

const Classes = () => {
	const { data } = useStore();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const LinkTo = id => {
		navigate(`/classes/${id}`);
	};
	return (
		<>
			<Header active={true} title={'Sinflar'} />
			<Box w={'100%'} position={'relative'}>
				<ButtonSolid
					borderRadius={'50px'}
					fontSize={'20px'}
					minW={'166px'}
					p={'10px'}
					textAlign={'center'}
					position={'absolute'}
					top={'-50px'}
					right={'0px'}
					
				>
					<Link _hover={'none'} href='/classes/addClass'>+ {t('add_classes')}</Link>
				</ButtonSolid>

				<TableContainer mt={'60px'} bg={useColorModeValue('#fff', '#2C3B46')} borderRadius={'15px'}>
					<Table size='md'>
						<Thead bg={useColorModeValue('#E6EEF4', '#3A4B56')}>
							<Tr>
								<Th w={'1px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
									#
								</Th>
								<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
									{t('class_name')}
								</Th>
								<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
									{t('student_numbers')}
								</Th>
								<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
									{t('group')}
								</Th>
								<Th w={'100px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
									{t('head_of_the_class')}
								</Th>
								<Th textAlign={'end'}>
									<Icon as={BsThreeDots} w={'30px'} h={'30px'} color={useColorModeValue('#7BA1BD', '#fff')} />
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{data.classes.map((cls, ind) => (
								<Tr cursor={'pointer'} key={ind} onClick={() => LinkTo(cls.id)}>
									<Td>{ind + 1}</Td>
									<Td>
										{cls.class}-{t('class')}
									</Td>
									<Td>
										{cls.students.length} {t('people')}
									</Td>
									<Td>
										{t('group')} {cls.group}
									</Td>
									<Td w={'200px'} display={'flex'} alignclss={'center'} gap={'5px'}>
										<Image w={'25px'} h={'25px'} src={cls.teacher?.teacherImage} alt='teacher-image' /> {cls.teacher?.firstName + ' ' + cls.teacher?.lastName}
									</Td>
									<Td cursor={'pointer'} position={'relative'}>
										<Box
											w={'35px'}
											h={'35px'}
											borderRadius={'100%'}
											position={'absolute'}
											right={'25px'}
											top={'18%'}
											textAlign={'center'}
										>
											<Icon as={GoPencil} color={'#0094FF'} mt={'5px'} fontSize={'25px'} />
										</Box>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
		</>
	);
};

export default withLayout(Classes);
