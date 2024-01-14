import { Box, Divider, Flex, HStack, Heading, Icon, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { GoPencil } from 'react-icons/go';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
// import { convertToUZS } from '../../helpers/helpers';

const TeacherInfo = ({ teacher }) => {
	return (
		<Box w={'530px'} h={'160px'} p={'10px'} bg={useColorModeValue('#fff', '#3A4B56')} borderRadius={'15px'} margin={'10px'} boxShadow={'2px 2px 20px 2px #999'} position={'relative'}>
			<Flex alignItems={'start'}  gap={'10px'} mb={'5px'}>
				<Image w={'75px'} h={'75px'} src={teacher.teacherImage} borderRadius={'100%'} alt={teacher.firsName} />
				<Stack w={'60%'} >
					<Heading size={'md'} color={useColorModeValue('#000', '#fff')}>
						{teacher.firstName + ' ' + teacher.lastName}{' '}
					</Heading>
					<Text  color={'#A6A6A6'}> Ona-tili, Adabiyot</Text>
					<Text  color={'#A6A6A6'}> Mobil: {teacher.phoneNumber}</Text>
				</Stack>
				<Flex
					w={'35px'}
					h={'35px'}
					borderRadius={'100%'}
					textAlign={'center'}
					gap={'10px'}
				>
					<Icon as={IoInformationCircleOutline} color={'#FFC121'} mt={'5px'} fontSize={'25px'} />
					<Icon as={MdDeleteOutline} color={'#FA0000'} mt={'5px'} fontSize={'25px'} />
					<Icon as={GoPencil} color={'#0094FF'} mt={'5px'} fontSize={'25px'} />
				</Flex>
			</Flex>
      <Divider mb={'10px'}/>
      <HStack justifyContent={'space-between'}>
        <Heading size={'sm'}>UZS 1 200 000</Heading>
        <Text color={'#A6A6A6'}>Sinflar: 2</Text>
      </HStack>
		</Box>
	);
};

export default TeacherInfo;
