import React, { useState } from 'react';
import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	SimpleGrid,
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
import { withLayout } from '../../layout/layout';
import Header from '../../components/header/header';
import useStore from '../../store/store';
import TeacherSelector from '../../components/teacher-selector/teacher-selector';
import StudentSelector from '../../components/student-selector/student-selector';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import SciencesSelector from '../../components/sciences-selector/sciences-selector';


const AddClass = () => {
	const { data, addClass } = useStore();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isOpenSciences, onOpen: onOpenSciences, onClose: onCloseSciences } = useDisclosure();
	const { isOpen: isOpenTeacher, onOpen: onOpenTeacher, onClose: onCloseTeacher } = useDisclosure();
	const navigate = useNavigate();

	const [selectedClass, setSelectedClass] = useState(null);
	const [selectedTeacher, setSelectedTeacher] = useState([]);
	const [selectedScience, setSelectedScience] = useState([]);
	const [selectedStudents, setSelectedStudents] = useState([]);
	const [selectedRoom, setSelectdRoom] = useState(null);

	const filteredTeacher = data.teachers.filter(teacher => selectedTeacher.includes(teacher.id));
	const filteredStudents = data.students.filter(student => selectedStudents.includes(student.id));
	const filteredSciences = data.sciences.filter(sciences => selectedScience.includes(sciences.id));

	const addNewClass = () => {
		const currentDate = new Date();
		const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

		const newClass = {
			id: uuidv4(),
			createdDate: formattedDate,
			room: selectedRoom,
			class: selectedClass,
			teacher: filteredTeacher[0],
			sciences: filteredSciences,
			students: filteredStudents,
			group: '1',
		};

		useStore.setState(state => ({
			data: {
				...state.data,
				classes: [...state.data.classes, newClass],
			},
		}));
		addClass(newClass);
		navigate(-1);
	};
	return (
		<>
			<Header active={false} title={`Sinf qo'shish`} />
			<Box>
				<SimpleGrid columns={3} spacing={6} mt={'25px'}>
					<Box w={'255px'} height='70px'>
						<Text pl={'5px'} pb={'10px'} fontWeight={500} color={'#7BA1BD'}>
							Sinf
						</Text>
						<Input
							w={'255px'}
							h={'45px'}
							pl={'10px'}
							fontWeight={500}
							color={useColorModeValue('#002540', '#fff')}
							placeholder='Sinf nomi'
							border={'1px solid '}
							borderColor={useColorModeValue('#CDCDCD', '#455763')}
							_placeholder={'#000'}
							onChange={e => setSelectedClass(e.target.value)}
						/>
					</Box>
					<Box w={'255px'} height='70px'>
						<Text pl={'5px'} pb={'10px'} fontWeight={500} color={'#7BA1BD'}>
							Kurator
						</Text>
						<Button
							w={'100%'}
							h={'45px'}
							fontWeight={500}
							color={useColorModeValue('#002540', '#fff')}
							border={'1px'}
							borderColor={useColorModeValue('#CDCDCD', '#455763')}
							bg={'transparent'}
							rightIcon={selectedTeacher.length !== 0 ? '' : '+'}
							_hover={'none'}
							onClick={onOpenTeacher}
						>
							<Text textAlign={'start'} w={'100%'}>
								{selectedTeacher.length !== 0
									? filteredTeacher[0]?.firstName + ' ' + filteredTeacher[0]?.lastName
									: `O'qituvchini tanlang`}
							</Text>
						</Button>
						<TeacherSelector
							isOpen={isOpenTeacher}
							onOpen={onOpenTeacher}
							onClose={onCloseTeacher}
							items={data.teachers}
							onSelect={setSelectedTeacher}
							selectedItems={selectedTeacher}
						/>
					</Box>
					<Box w={'255px'} height='70px'>
						<Text pl={'5px'} pb={'10px'} fontWeight={500} color={'#7BA1BD'}>
							Fan
						</Text>
						<Button
							w={'100%'}
							h={'45px'}
							fontWeight={500}
							color={useColorModeValue('#002540', '#fff')}
							border={'1px'}
							borderColor={useColorModeValue('#CDCDCD', '#455763')}
							bg={'transparent'}
							rightIcon={'+'}
							_hover={'none'}
							onClick={onOpenSciences}
						>
							<Text textAlign={'start'} w={'100%'}>
								Fanlar
							</Text>
						</Button>
						<SciencesSelector
							items={data.sciences}
							isOpen={isOpenSciences}
							onOpen={onOpenSciences}
							onClose={onCloseSciences}
							onSelect={setSelectedScience}
							selectedItems={selectedScience}
						/>
					</Box>
					<Box w={'255px'} height='70px'>
						<Text pl={'5px'} pb={'10px'} fontWeight={500} color={'#7BA1BD'}>
							O'quvchi
						</Text>
						<Button
							w={'100%'}
							h={'45px'}
							fontWeight={500}
							color={useColorModeValue('#002540', '#fff')}
							border={'1px'}
							borderColor={useColorModeValue('#CDCDCD', '#455763')}
							bg={'transparent'}
							rightIcon={'+'}
							_hover={'none'}
							onClick={onOpen}
						>
							<Text textAlign={'start'} w={'100%'}>
								O'quvchilar
							</Text>
						</Button>
						<StudentSelector
							isOpen={isOpen}
							onOpen={onOpen}
							onClose={onClose}
							items={data.students}
							onSelect={setSelectedStudents}
							selectedItems={selectedStudents}
						/>
					</Box>
					<Box w={'255px'} height='70px'>
						<Text pl={'5px'} pb={'10px'} fontWeight={500} color={'#7BA1BD'}>
							Xona
						</Text>
						<Input
							w={'255px'}
							h={'45px'}
							pl={'10px'}
							fontWeight={500}
							color={useColorModeValue('#002540', '#fff')}
							placeholder='Sinf xonasini kiriting'
							border={'1px solid '}
							borderColor={useColorModeValue('#CDCDCD', '#455763')}
							_placeholder={'#000'}
							onChange={e => setSelectdRoom(e.target.value)}
						/>
					</Box>
					<Flex w={'255px'} height='70px' pt={'33px'} justifyContent={'space-between'}>
						<Button
							height={'45px'}
							textAlign={'center'}
							color={'#0094ff'}
							borderColor={'#0094FF'}
							border={'1px'}
							letterSpacing={'1px'}
							lineHeight={'20px'}
							fontSize={'15px'}
						>
							Bekor qilish
						</Button>
						<Button
							onClick={addNewClass}
							bg={'#0094FF'}
							height={'45px'}
							color={'#fff'}
							letterSpacing={'1px'}
							lineHeight={'20px'}
							fontSize={'15px'}
						>
							Saqlash
						</Button>
					</Flex>
				</SimpleGrid>
			</Box>
			<TableContainer mt={'60px'} bg={useColorModeValue('#fff', '#2C3B46')} borderRadius={'15px'}>
				<Table size='md'>
					<Thead bg={useColorModeValue('#E6EEF4', '#3A4B56')}>
						<Tr>
							<Th w={'1px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								SINF
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								KURATOR
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								FANLAR
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								O`QUVCHILAR
							</Th>
							<Th w={'100px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								XONA
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr cursor={'pointer'} alignItems={'flex-start'} verticalAlign={'start'} justifyContent={'flex-start'}>
							<Td>{selectedClass}</Td>
							<Td>{selectedTeacher[0]?.teacher?.firstName + ' ' + selectedTeacher[0]?.teacher?.lastName}</Td>
							<Td>
								{filteredSciences?.map(sc => (
									<Text mr={'10px'} mb={'10px'} key={sc.id}>
										{sc.name}
									</Text>
								))}
							</Td>
							<Td textAlign={'start'}>
								{filteredStudents?.map(s => (
									<Flex key={s.id} alignItems={'flex-start'}>
										<Image mr={'10px'} mb={'10px'} w={'25px'} h={'25px'} src={s.image} alt='teacher-image' />
										{s.firstName + ' ' + s.lastName}
									</Flex>
								))}
							</Td>
							<Td w={'200px'} display={'flex'} alignclss={'center'} gap={'5px'}>
								{selectedRoom}
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default withLayout(AddClass);
