import React, { useEffect, useState } from 'react';
import { withLayout } from '../../layout/layout';
import {
	Box,
	Button,
	Divider,
	HStack,
	Heading,
	Icon,
	Input,
	SimpleGrid,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import Header from '../../components/header/header';
import { AiOutlineDelete } from 'react-icons/ai';
import useStore from '../../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';
import StudentList from '../../components/student-list/student-list';
import SciencesList from '../../components/sciences-list/sciences-list';
import TeacherSelector from '../../components/teacher-selector/teacher-selector';

const EditingClass = () => {
	const { t } = useTranslation();
	const { data } = useStore();
	const paramas = useParams();
  const navigate = useNavigate()
  const { deleteClass, updateClass } = useStore()
	const [filteredData, setFilteredData] = useState(null);
	const [selectedTeacher, setSelectedTeacher] = useState(null);

	useEffect(() => {
		setFilteredData(data.classes.find(id => id.id === paramas.classId));
	}, [paramas, data]);

	useEffect(() => {
		setSelectedTeacher(filteredData?.teacher.id);
	}, []);
	const [selectedStudents, setSelectedStudents] = useState([]);
	const [selectedSciences, setSelectedSciences] = useState([]);
	const [selectedRoom, setSelectdRoom] = useState(filteredData?.room);
	const [selectedClass, setSelectedClass] = useState(filteredData?.class);
	const { isOpen: isOpenTeacher, onOpen: onOpenTeacher, onClose: onCloseTeacher } = useDisclosure();
	const filteredTeacher = data.teachers.find(teacher => selectedTeacher?.includes(teacher.id));
	const onSelectStudent = student => {
		if (selectedStudents.includes(student)) {
			setSelectedStudents(prev => prev.filter(s => s !== student));
		} else {
			setSelectedStudents(prev => [...prev, student]);
		}
	};
	const onSelectAllStudents = () => {
		if (selectedStudents?.length === filteredData.students.length) {
			setSelectedStudents([]);
		} else {
			setSelectedStudents([...filteredData.students]);
		}
	};

	const deleteStudents = () => {
		const newStudents = {
			...filteredData,
			students: filteredData.students.filter(student => !selectedStudents.some(item => item.id === student.id)),
		};
		setFilteredData(newStudents);
		setSelectedStudents([]);
	};

	const onSelectSciences = sciences => {
		if (selectedSciences.includes(sciences)) {
			setSelectedSciences(prev => prev.filter(s => s !== sciences));
		} else {
			setSelectedSciences(prev => [...prev, sciences]);
		}
	};
	const onSelectAllSciences = () => {
		if (selectedSciences?.length === filteredData.sciences.length) {
			setSelectedSciences([]);
		} else {
			setSelectedSciences([...filteredData.sciences]);
		}
	};

	const deleteSciences = () => {
		const newSciences = {
			...filteredData,
			sciences: filteredData.sciences.filter(sciences => !selectedSciences.some(item => item.id === sciences.id)),
		};
		setFilteredData(newSciences);
		setSelectedSciences([]);
	};

  const deleteTheClass = () => {
    deleteClass(filteredData.id)
    navigate(-2)
  }

  
  const updateTheClass = () => {
    const id = filteredData?.id;
    const updatedClass = {
      ...filteredData,
      class: selectedClass,
      room: selectedRoom,
    };
  
    updateClass(id, updatedClass);
    navigate(-1); 
  };
	return (
		<Box>
			<Header title={'Tahrirlash'} active={false} />
			<SimpleGrid columns={3} spacing={6} bg={useColorModeValue('#fff', '#2D3D48')} mt={'10px'} p={'15px'}>
				<Box height='80vh' w={'350px'} p={'10px'} bg={useColorModeValue('#F1F5F8', '#3A4B56')}>
					<HStack mb={'20px'} justifyContent={'space-between'}>
						<Heading size={'md'} color={useColorModeValue('#626466', '#f1f5f8')}>
							{filteredData?.students.length} nafar o'quvchilar ro'yhati
						</Heading>
						<Icon onClick={deleteStudents} w={'25px'} h={'25px'} cursor={'pointer'} as={AiOutlineDelete} />
					</HStack>
					<Divider />
					<HStack
						w={'100%'}
						h={'37px'}
						borderRadius={'50px'}
						pl={'15px'}
						mt={'15px'}
						bg={useColorModeValue('#F0F0F0', '#172833')}
						overflow={'hidden'}
					>
						<Input type='email' placeholder={t('header_search_input')} variant={'unstyled'} />
						<Icon as={CiSearch} color={'#9E99A6'} fontSize={'40px'} mr={'10px'} pl={'15px'} borderLeft={'1px'} />
					</HStack>
					<StudentList
						students={filteredData?.students || []}
						onSelectStudent={onSelectStudent}
						selectedStudents={selectedStudents}
						onSelectAllStudents={onSelectAllStudents}
					/>
				</Box>
				<Box height='80vh' w={'350px'} p={'10px'} bg={useColorModeValue('#F1F5F8', '#3A4B56')}>
					<HStack mb={'20px'} justifyContent={'space-between'}>
						<Heading size={'md'} color={useColorModeValue('#626466', '#f1f5f8')}>
							{' '}
							Fanlar ro'yhati
						</Heading>
						<Icon onClick={deleteSciences} w={'25px'} h={'25px'} cursor={'pointer'} as={AiOutlineDelete} />
					</HStack>
					<Divider />
					<HStack
						w={'100%'}
						h={'37px'}
						borderRadius={'50px'}
						pl={'15px'}
						mt={'15px'}
						bg={useColorModeValue('#F0F0F0', '#172833')}
						overflow={'hidden'}
					>
						<Input type='email' placeholder={t('header_search_input')} variant={'unstyled'} />
						<Icon as={CiSearch} color={'#9E99A6'} fontSize={'40px'} mr={'10px'} pl={'15px'} borderLeft={'1px'} />
					</HStack>
					<SciencesList
						sciences={filteredData?.sciences}
						onSelectSciences={onSelectSciences}
						selectedSciences={selectedSciences}
						onSelectAllSciences={onSelectAllSciences}
					/>
				</Box>
				<Box height='80vh' w={'255px'} position={'relative'} bg={useColorModeValue('#fff', 'transparent')}>
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
						defaultValue={filteredData?.class}
						onChange={e => setSelectedClass(e.target.value)}
					/>

					<Text pl={'5px'} mt={'10px'} pb={'10px'} fontWeight={500} color={'#7BA1BD'}>
						Kurator
					</Text>
					<Button
						w={'255px'}
						h={'45px'}
						fontWeight={500}
						color={useColorModeValue('#002540', '#fff')}
						border={'1px'}
						borderColor={useColorModeValue('#CDCDCD', '#455763')}
						bg={'transparent'}
						rightIcon={selectedTeacher?.length !== 0 ? '' : '+'}
						_hover={'none'}
						onClick={onOpenTeacher}
					>
						<Text textAlign={'start'} w={'100%'}>
							{filteredTeacher?.length !== 0 && filteredTeacher?.firstName !== undefined
								? filteredTeacher?.firstName + ' ' + filteredTeacher?.lastName
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

					<Text pl={'5px'} mt={'10px'} pb={'10px'} fontWeight={500} color={'#7BA1BD'}>
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
						defaultValue={filteredData?.room}
						onChange={e => setSelectdRoom(e.target.value)}
					/>

          <Box position={'absolute'} bottom={'10px'}>
          <Button color={'#0094ff'} mr={'40px'} border={'1px'}  borderColor={'#0094FF'} bg={'transparent'} onClick={deleteTheClass}>O'chirish</Button>
            <Button bg={'#0094FF'} color={'#fff'} mr={3} onClick={updateTheClass}>
              Saqlash
            </Button>
          </Box>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default withLayout(EditingClass);
