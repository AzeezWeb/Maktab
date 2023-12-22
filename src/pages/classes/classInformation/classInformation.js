import React, { useState } from 'react';
import { withLayout } from '../../../layout/layout';
import {
	Box,
	Button,
	Divider,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
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
	useDisclosure,
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
import StudentInfo from '../../../components/student-Info/student-info';



const ClassInformation = () => {
	const paramas = useParams();
	const { t } = useTranslation();
	const [students, setStudens] = useState(data.classes.filter(c => c.id === paramas.id)[0]);
	const [modal, setModal] = useState(false);
	const [studentId, setStudentId] = useState(null);
	const studentInfo = info => {
		setStudentId(info);
		setModal(true);
	};
	const [deletedStudent, setDeletedStudent] = useState(null);

		const deleteStudent = () => {
		const updatedStudents = students.students.filter(student => student.id !== deletedStudent.id);
		setStudens({
			...students,
			students: updatedStudents,
		});
		setDeletedStudent(null)
		onClose()
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

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
										<Icon
											as={MdDeleteOutline}
											onClick={() => {
												setDeletedStudent(item);
												onOpen();
											}}
											color={'#FA0000'}
											mt={'5px'}
											fontSize={'25px'}
										/>
										<Icon as={GoPencil} color={'#0094FF'} mt={'5px'} fontSize={'25px'} />
									</Flex>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			{modal === true && studentId !== null ? (
				<StudentInfo studentId={studentId} setStudentId={setStudentId} setModal={setModal} />
			) : null}
			<Modal onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<Heading h={'120px'} fontSize={'18px'} lineHeight={'27px'} p={'25px'} textAlign={'center'} fontWeight={600}>
							Haqiqatdan ham {deletedStudent?.firstName + ' ' + deletedStudent?.lastName} ni {students.title} - sinfidan
							o'chirmoqchimisiz ?{' '}
						</Heading>
					</ModalBody>
					<ModalFooter
						display={'flex'}
						gap={'20px'}
						alignItems={'center'}
						justifyContent={'center'}
						mb={'20px'}
						textAlign={'center'}
					>
						<Button onClick={onClose} borderColor={'#0094FF'}  border={'2px'} outline={'none'} color={'#0094FF'}>
							Yo'q
						</Button>
						<Button onClick={deleteStudent} bg={'#0094FF'} color={'#fff'}>
							Ha
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default withLayout(ClassInformation);
