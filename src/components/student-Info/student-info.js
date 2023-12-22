import { Box, CloseButton, Divider, HStack, Heading, Icon, Image, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa6';
import { convertToUZS } from '../../helpers/helpers';

const StudentInfo = ( {studentId, setModal, setStudentId}) => {

  const modalColor = {
		bg: useColorModeValue('#fff', '#0B1C27'),
		heading: useColorModeValue('#002540', '#fff'),
		text:useColorModeValue('#445D70', '#fff') 
}

	return (
		<Box position={'absolute'} right={'0px'} top={'-75px'} p={'0 35px'} bg={modalColor.bg} w={'460px'} minH={'905px'}>
			<CloseButton
				onClick={() => {
					setModal(false);
					setStudentId(null);
				}}
				color={!modalColor.bg}
				size={'lg'}
				position={'absolute'}
				right={'10px'}
				top={'10px'}
			/>
			<Image
				src={studentId.image}
				alt='student_img'
				textAlign={'center'}
				m={'15px auto'}
				w={'132px'}
				height={'132px'}
				borderRadius={'100%'}
			/>
			<Heading size={'lg'} textAlign={'center'} color={modalColor.heading}>
				{studentId.firstName + ' ' + studentId.lastName}
			</Heading>
			<Text size={'sm'} pt={'10px'} mb={'10px'} textAlign={'center'} color={'#9E99A6'}>
				id:{studentId.id}
			</Text>
			<HStack justifyContent={'space-between'} mb={'30px'}>
				<HStack spacing={'10px'}>
					<Icon as={FaPhone} color={'#0094FF'} />
					<Text color={modalColor.text}>{studentId.phoneNumber}</Text>
				</HStack>
				<HStack spacing={'10px'}>
					<Icon as={CiMail} fontWeight={600} fontSize={'28px'} color={'#0094FF'} />
					<Text color={modalColor.text}>{studentId.email}</Text>
				</HStack>
			</HStack>
			<Divider mb={'30px'} />
			<Heading size={'md'} color={modalColor.heading}>
				About
			</Heading>
			<Text size={'md'} color={modalColor.text} mb={'30px'}>
				{studentId.about}
			</Text>
			<SimpleGrid columns={2} spacing={6}>
				<Box height='70px'>
					<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>
						Tug'ilgan sana
					</Text>
					<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>
						{studentId.dateOfBirth}
					</Text>
				</Box>
				<Box height='70px'>
					<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>
						Login
					</Text>
					<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>
						ABC123
					</Text>
				</Box>
				<Box height='70px'>
					<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>
						Jinsi
					</Text>
					<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>
						Erkak
					</Text>
				</Box>
				<Box height='70px'>
					<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>
						Parol
					</Text>
					<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>
						ABC123
					</Text>
				</Box>
				<Box height='70px'>
					<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>
						Manzil
					</Text>
					<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>
						{studentId.location}
					</Text>
				</Box>
				<Box height='70px'>
					<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>
						O'qish summasi
					</Text>
					<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>
						UZS {convertToUZS(studentId.tuitionAmount)}
					</Text>
				</Box>
				<Box height='70px'>
					<Text size={'sm'} color={modalColor.heading} fontWeight={'600'}>
						User name
					</Text>
					<Text size={'sm'} color={modalColor.text} fontWeight={'400'}>
						{studentId.userName}
					</Text>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default StudentInfo;
