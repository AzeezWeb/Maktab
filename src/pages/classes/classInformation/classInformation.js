import React, { useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import userIcon from '../../../icons/img_avatar1.png';
import { GoPencil } from 'react-icons/go';
import { BsThreeDots } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { convertToUZS } from '../../../helpers/helpers';
import { useTranslation } from 'react-i18next';
import StudentInfo from '../../../components/student-Info/student-info';
import useStore from '../../../store/store';
import Header from '../../../components/header/header';

const ClassInformation = () => {
	const { data, deleteClass, deleteStudentFromClass } = useStore();
	const paramas = useParams();
	const [students, setStudents] = useState(data.classes.find(c => c.id === paramas.id));
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [modal, setModal] = useState(false);
	const [studentId, setStudentId] = useState(null);
	useEffect(() => {
		const foundStudents = data.classes.find(c => c.id === paramas.id);
		setStudents(foundStudents);
	}, [data.classes, paramas.id]);

	const studentInfo = info => {
		setStudentId(info);
		setModal(true);
	};

	const [deletedStudent, setDeletedStudent] = useState(null);

	const deleteStudent = () => {
		deleteStudentFromClass(students.id, deletedStudent.id);
		setDeletedStudent(null);
		onCloseSecond();
	};

	const deleteClases = cls => {
		deleteClass(cls);
		navigate(-1);
	};

	const { isOpen: isOpenFirst, onOpen: onOpenFirst, onClose: onCloseFirst } = useDisclosure();
	const { isOpen: isOpenSecond, onOpen: onOpenSecond, onClose: onCloseSecond } = useDisclosure();
	return (
		<>
			<Header active={false} title={`Sinf ma'lumotlari`} />
			<Box position={'relative'}>
				<Heading fontSize={'35px'} fontWeight={'500'} pl={'15px'} pt={'25px'} color={useColorModeValue('#002540', '#fff')}>
					{students?.class}- sinf
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
					onClick={() => navigate(`/classes/editing-class/${students.id}`)}
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
					onClick={() => onOpenFirst()}
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
								{students?.teacher?.firstName + " " + students?.teacher?.lastName}
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
							{students?.createdDate}
						</Text>
					</HStack>
					<HStack>
						<Heading size={'md'} color={useColorModeValue('#002540', '#fff')}>
							{t('total_students')} :
						</Heading>
						<Text size={'md'} color={useColorModeValue('#413F3F', '#fff')}>
							{students?.students?.length} nafar
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
							{students?.students.map((item, ind) => (
								<Tr key={ind}>
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
													onOpenSecond();
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
				<Modal onClose={onCloseSecond} isOpen={isOpenSecond} isCentered>
					<ModalOverlay />
					<ModalContent>
						<ModalBody>
							<Heading h={'120px'} fontSize={'18px'} lineHeight={'27px'} p={'25px'} textAlign={'center'} fontWeight={600}>
								Haqiqatdan ham {deletedStudent?.firstName + ' ' + deletedStudent?.lastName} ni {students?.title} - sinfidan
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
							<Button onClick={onCloseSecond} borderColor={'#0094FF'} border={'2px'} outline={'none'} color={'#0094FF'}>
								Yo'q
							</Button>
							<Button onClick={deleteStudent} bg={'#0094FF'} color={'#fff'}>
								Ha
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
				<Modal onClose={onCloseFirst} isOpen={isOpenFirst} isCentered>
					<ModalOverlay />
					<ModalContent>
						<ModalBody>
							<Heading h={'120px'} fontSize={'18px'} lineHeight={'27px'} p={'25px'} textAlign={'center'} fontWeight={600}>
								Sinf o'chirilishiga rozimisiz ?
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
							<Button onClick={onCloseFirst} borderColor={'#0094FF'} border={'2px'} outline={'none'} color={'#0094FF'}>
								Yo'q
							</Button>
							<Button onClick={() => deleteClases(students.id)} bg={'#0094FF'} color={'#fff'}>
								Ha
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</>
	);
};

export default withLayout(ClassInformation);
