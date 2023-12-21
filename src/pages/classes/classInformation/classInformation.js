import React, { useState } from 'react';
import { withLayout } from '../../../layout/layout';
import {
	Box,
	Button,
	CloseButton,
	Divider,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	SimpleGrid,
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useColorModeValue,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { data } from '../../../data';
import userIcon from '../../../icons/img_avatar1.png';
import { GoPencil } from 'react-icons/go';
import { BsThreeDots } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { convertToUZS } from '../../../helpers/helpers';
import { useTranslation } from 'react-i18next';
import { FaPhone } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';

const ClassInformation = () => {
	const paramas = useParams();
	const { t } = useTranslation();
	const students = data.classes.filter(c => c.id === paramas.id)[0];
	const [modal, setModal] = useState(false);
	const [studentId, setStudentId] = useState(null);
	const studentInfo = info => {
		setStudentId(info);
		setModal(true);
	};
	
	const modalColor = {
		bg: useColorModeValue('#fff', '#0B1C27'),
		heading: useColorModeValue('#002540', '#fff'),
		text:useColorModeValue('#445D70', '#fff') 
}
	console.log(studentId);

	return (
		<Box position={'relative'}>
			<Heading fontSize={'35px'} fontWeight={'500'} pl={'15px'} pt={'25px'} color={useColorModeValue('#002540', '#fff')}>
				{students.title}- sinf
			</Heading>
			<Button
				w={'166px'}
				textAlign={'center'}
				pt={'-5px'}
				h={'42px'}
				position={'absolute'}
				right={'0px'}
				top={'25px'}
				color={'#fff'}
				bg={'#0094FF'}
				borderRadius={'20px'}
				letterSpacing={'1px'}
				lineHeight={'20px'}
				fontSize={'18px'}
			>
				{t('editing')}
			</Button>
			<Button
				w={'166px'}
				textAlign={'center'}
				pt={'-5px'}
				h={'42px'}
				position={'absolute'}
				right={'0px'}
				top={'80px'}
				color={'#0094ff'}
				borderColor={'#0094FF'}
				border={'1px'}
				borderRadius={'20px'}
				letterSpacing={'1px'}
				lineHeight={'20px'}
				fontSize={'18px'}
			>
				{t('delete')}
			</Button>
			<Box pl={'30px'}>
				<HStack mt={'40px'} alignItems={'start'}>
					<Image w={'100px'} h={'100px'} borderRadius={'100%'} src={userIcon} alt='teacher-image' />
					<Stack>
						<Heading
							mt={'10px'}
							p={'0px'}
							size={'lg'}
							fontWeight={'500'}
							lineHeight={'21px'}
							color={useColorModeValue('#002540', '#fff')}
						>
							{students.teacher}
						</Heading>
						<Text color={'#C7C7C7'} fontSize={'14px'} fontWeight={'500'} lineHeight={'18px'}>
							Kurator
						</Text>
					</Stack>
				</HStack>
			</Box>
			<Divider mt={'25px'} mb={'20px'} />

			<Box pl={'30px'}>
				<HStack>
					<Heading size={'md'} color={useColorModeValue('#002540', '#fff')}>
						{t('organized')} :
					</Heading>
					<Text size={'md'} color={useColorModeValue('#413F3F', '#fff')}>
						{students.groupDeta}
					</Text>
				</HStack>
				<HStack>
					<Heading size={'md'} color={useColorModeValue('#002540', '#fff')}>
						{t('total_students')} :
					</Heading>
					<Text size={'md'} color={useColorModeValue('#413F3F', '#fff')}>
						{students.students.length} nafar
					</Text>
				</HStack>
			</Box>

			<TableContainer mt={'60px'} bg={useColorModeValue('#fff', '#2C3B46')} borderRadius={'15px'}>
				<Table size='md'>
					<Thead bg={useColorModeValue('#E6EEF4', '#3A4B56')}>
						<Tr>
							<Th w={'1px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								#
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								{t('full_name')}
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								{t('phone_number')}
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								{t('accaunt_status')}
							</Th>
							<Th w={'100px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								{t('student_grants')}
							</Th>
							<Th textAlign={'end'} pr={'50px'}>
								<Icon as={BsThreeDots} w={'30px'} h={'30px'} color={useColorModeValue('#0094FF', '#fff')} />
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{students.students.map((item, ind) => (
							<Tr>
								<Td>{ind + 1}</Td>
								<Td w={'200px'} display={'flex'} alignItems={'center'} gap={'5px'}>
									<Image w={'25px'} h={'25px'} src={item.image} alt='teacher-image' /> {item.firstName + ' ' + item.lastName}
								</Td>
								<Td>{item.phoneNumber}</Td>
								<Td color={item.balanse < 0 ? '#FA0000' : ''}>UZS {convertToUZS(item.balanse)}</Td>
								<Td> {item.studentGrants} %</Td>
								<Td cursor={'pointer'} position={'relative'}>
									<Flex
										w={'35px'}
										h={'35px'}
										borderRadius={'100%'}
										position={'absolute'}
										right={'75px'}
										top={'18%'}
										textAlign={'center'}
										gap={'10px'}
									>
										<Icon
											as={IoInformationCircleOutline}
											onClick={() => studentInfo(item)}
											color={'#FFC121'}
											mt={'5px'}
											fontSize={'25px'}
										/>
										<Icon as={MdDeleteOutline} color={'#FA0000'} mt={'5px'} fontSize={'25px'} />
										<Icon as={GoPencil} color={'#0094FF'} mt={'5px'} fontSize={'25px'} />
									</Flex>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			{modal === true && studentId !== null ? (
				<Box position={'absolute'} right={'0px'} top={'-75px'} p={'0 35px'} bg={modalColor.bg} w={'460px'} minH={'905px'}>
					<CloseButton onClick={() => {setModal(false); setStudentId(null)}}  color={!modalColor.bg} size={'lg'} position={'absolute'} right={'10px'} top={'10px'}  />
					<Image src={studentId.image} alt='student_img' textAlign={'center'} m={'15px auto'}  w={'132px'} height={'132px'} borderRadius={'100%'} />
					<Heading size={'lg'} textAlign={'center'} color={modalColor.heading}>
						{studentId.firstName + " " + studentId.lastName}
					</Heading>
					<Text size={'sm'} pt={'10px'} mb={'10px'} textAlign={'center'} color={'#9E99A6'}>
						id:{studentId.id}
					</Text>
					<HStack justifyContent={'space-between'} mb={'30px'}>
						<HStack spacing={'10px'}>
							<Icon as={FaPhone} color={'#0094FF'}/>
							<Text color={modalColor.text}>{studentId.phoneNumber}</Text>
						</HStack>
						<HStack spacing={'10px'}>
							<Icon as={CiMail} fontWeight={600} fontSize={'28px'} color={'#0094FF'} />
							<Text color={modalColor.text}>{studentId.email}</Text>
						</HStack>
					</HStack>
					<Divider mb={'30px'} />
					<Heading size={'md'} color={modalColor.heading}>About</Heading>
					<Text size={'md'} color={modalColor.text} mb={'30px'}>
						{studentId.about}
					</Text>
					<SimpleGrid columns={2} spacing={6}  >
						<Box  height='70px'>
							<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>Tug'ilgan sana</Text>
							<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>{studentId.dateOfBirth}</Text>
						</Box>
						<Box  height='70px'>
							<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>Login</Text>
							<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>ABC123</Text>
						</Box>
						<Box  height='70px'>
							<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>Jinsi</Text>
							<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>Erkak</Text>
						</Box>
						<Box  height='70px'>
							<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>Parol</Text>
							<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>ABC123</Text>
						</Box>
						<Box  height='70px'>
							<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>Manzil</Text>
							<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>{studentId.location}</Text>
						</Box>
						<Box  height='70px'>
							<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>O'qish summasi</Text>
							<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>UZS {convertToUZS(studentId.tuitionAmount)}</Text>
						</Box>
						<Box  height='70px'>
							<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>User name</Text>
							<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>{studentId.userName}</Text>
						</Box>
						</SimpleGrid>
				</Box>
			) : null}
		</Box>
	);
};

export default withLayout(ClassInformation);
