import React from 'react';
import { withLayout } from '../../layout/layout';
import Header from '../../components/header/header';
import useStore from '../../store/store';
import TeacherInfo from '../../components/teacher/teacherInfo';
import { Flex } from '@chakra-ui/react';
// import TeacherInfo from '../../components/teacher/teacherInfo'

const Teachers = () => {
	const { data } = useStore();
	console.log(data.teachers);
	return (
		<div>
			<Header title={`O'qituvchilar`} active={true} />
			<Flex mt={'15px'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-around'}>
				{data.teachers.map(item => (
					<TeacherInfo key={item.id} teacher={item} />
				))}
			</Flex>
		</div>
	);
};

export default withLayout(Teachers);
