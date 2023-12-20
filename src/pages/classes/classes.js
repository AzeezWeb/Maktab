import React from 'react';
import { withLayout } from '../../layout/layout';
import { Box, Button, Icon, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';
import { data } from '../../data';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Classes = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const Link = id => {
		navigate(`/classes/${id}`);
	};

	return (
		<Box w={'100%'} position={'relative'}>
			<Button
				borderRadius={'50px'}
				bg={'#0094FF'}
				color={'#fff'}
				fontSize={'20px'}
				minW={'166px'}
				p={'10px'}
				textAlign={'center'}
				position={'absolute'}
				top={'-50px'}
				right={'0px'}
			>
				+ {t('add_classes')}
			</Button>

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
						{data.classes.map((item, ind) => (
							<Tr cursor={'pointer'} onClick={() => Link(item.id)}>
								<Td>{ind + 1}</Td>
								<Td>{item.title}-{t('class')}</Td>
								<Td>{item.students.length} {t('people')}</Td>
								<Td>{t('group')} {item.group}</Td>
								<Td w={'200px'} display={'flex'} alignItems={'center'} gap={'5px'}>
									<Image w={'25px'} h={'25px'} src={item.teacherImage} alt='teacher-image' /> {item.teacher}
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
										{/* bg={useColorModeValue( '#E0F2FF', '#28485E')}  */}
										<Icon as={GoPencil} color={'#0094FF'} mt={'5px'} fontSize={'25px'} />
									</Box>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default withLayout(Classes);
