import React from 'react';
import { withLayout } from '../../layout/layout';
import { Box, Button, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';
import { data } from '../../data';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
	const navigate = useNavigate();

	const Link = id => {
		navigate(`/classes/${id}`);
	};

	return (
		<Box w={'1000px'} position={'relative'}>
			<Button
				borderRadius={'50px'}
				bg={'#0094FF'}
				color={'#fff'}
				fontSize={'20px'}
				w={'166px'}
				p={'10px'}
				textAlign={'center'}
				position={'absolute'}
				top={'-50px'}
				right={'0px'}
			>
				+ Sinf qo'shish
			</Button>

			<TableContainer mt={'60px'} bg={useColorModeValue('#fff', '#2C3B46')} borderRadius={'15px'}>
				<Table size='md'>
					<Thead bg={useColorModeValue('#E6EEF4', '#3A4B56')}>
						<Tr>
							<Th w={'1px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								#
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								Sinf Nomlari
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								O'QUCHI SONLARI
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								GURUH
							</Th>
							<Th w={'50px'} fontSize={'14px'} flexWrap={'500'} color={useColorModeValue('#7BA1BD', '#fff')}>
								SINF RAXBARI
							</Th>
							<Th textAlign={'end'}>
								<Icon as={BsThreeDots} w={'30px'} h={'30px'} color={useColorModeValue('#7BA1BD', '#fff')} />
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data.classes.map((item, ind) => (
							<Tr cursor={'pointer'} onClick={() => Link(item.id)}>
								<Td>{data.classes.length}</Td>
								<Td>{item.title}-sinf</Td>
								<Td>{item.students.length} nafar</Td>
								<Td>Guruh {item.group}</Td>
								<Td>{item.teacher}</Td>
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
