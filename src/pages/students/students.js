import React, { useState } from 'react'
import { withLayout } from '../../layout/layout'
import { Flex, Heading, Icon, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { GoPencil } from 'react-icons/go'
import { convertToUZS } from '../../helpers/helpers'
import { BsThreeDots } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import useStore from '../../store/store'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { MdDeleteOutline } from 'react-icons/md'
import ButtonOutline from '../../components/button-outline/button-outline'
import ButtonSolid from '../../components/button-solid/button-solid'
import Header from '../../components/header/header'

const Students = () => {

  const { t } = useTranslation()
	const { data, deleteStudentFromClass } = useStore();
	const [deletedStudent, setDeletedStudent] = useState(null);

	const { isOpen: isOpenSecond, onOpen: onOpenSecond, onClose: onCloseSecond } = useDisclosure();


	const deleteStudent = () => {
		deleteStudentFromClass(data.students.id, deletedStudent.id);
		setDeletedStudent(null);
		onCloseSecond();
	};
  return (
		<div>
			<Header title={`O'quvchilar`} active={true}/>
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
							{data.students.map((item, ind) => (
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
				<Modal onClose={onCloseSecond} isOpen={isOpenSecond} isCentered>
					<ModalOverlay />
					<ModalContent>
						<ModalBody>
							<Heading h={'120px'} fontSize={'18px'} lineHeight={'27px'} p={'25px'} textAlign={'center'} fontWeight={600}>
								Haqiqatdan ham {deletedStudent?.firstName + ' ' + deletedStudent?.lastName} ni
								o'chirmoqchimisiz ?
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
							<ButtonOutline onClick={onCloseSecond} mr='10px'>
								Yo'q
							</ButtonOutline>
							<ButtonSolid onClick={deleteStudent}>
								Ha
							</ButtonSolid>
						</ModalFooter>
					</ModalContent>
				</Modal>
    </div>
  )
}

export default withLayout(Students)