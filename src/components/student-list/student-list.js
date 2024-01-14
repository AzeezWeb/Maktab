import React from 'react';
import { Box, Text, Checkbox, Image, useColorModeValue } from '@chakra-ui/react';

const StudentList = ({ students, onSelectStudent, selectedStudents,  }) => {
	const textColor = useColorModeValue('#002540', '#fff');

	return (
		<Box mt={'10px'}>
			{students?.map(student => (
				<Box
					key={student.id}
					onClick={() => onSelectStudent(student)}
					cursor={'pointer'}
					display='flex'
					alignItems='center'
					gap='10px'
					p={2}
				>
					<Checkbox size={'lg'} isChecked={selectedStudents.includes(student)} onChange={() => onSelectStudent(student)} />
					{!student.image ? '' : <Image w={'30px'} h='30px' src={student.image} />}
					<Text fontSize={'18px'} color={textColor}>
						{student.firstName + ' ' + student.lastName}
					</Text>
				</Box>
			))}
		</Box>
	);
};

export default StudentList;
