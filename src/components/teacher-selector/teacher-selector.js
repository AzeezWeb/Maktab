import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	HStack,
	Text,
	Image,
	Flex,
} from '@chakra-ui/react';
import ButtonOutline from '../button-outline/button-outline';
import ButtonSolid from '../button-solid/button-solid';

const TeacherSelector = ({ isOpen, onOpen, onClose, items, onSelect, selectedItems }) => {
	const handleToggle = itemId => {
		onSelect(prevSelected => {
			const isSelected = prevSelected?.includes(itemId);

			if (isSelected) {
				return prevSelected.filter(id => id !== itemId);
			} else {
				return [itemId]; // faqatgina bitta elementni saqlash
			}
		});
	};

	const handleSave = () => {
		onClose();
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent maxH={'80vh'} w={'850px'} overflow={'scroll'}>
					<ModalHeader>O'qituvchini tanlang</ModalHeader>
					<ModalBody>
						{items.map(item => (
							<Flex key={item.id} alignItems={'center'} gap={'10px'} p={'20px'}>
								<input
									type='checkbox'
									id={item.id}
									checked={selectedItems?.includes(item.id)}
									onChange={() => handleToggle(item.id)}
									className='checkbox-input'
								/>
								<HStack>
									<Image w={'30px'} h={'30px'} src={item.teacherImage} />
									<Text size={'xl'}>{item.firstName + ' ' + item.lastName}</Text>
								</HStack>
							</Flex>
						))}
					</ModalBody>
					<ModalFooter>
						<ButtonOutline onClick={onClose} mr={'15px'}>
							Yopish
						</ButtonOutline>
						<ButtonSolid onClick={handleSave}>Saqlash</ButtonSolid>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default TeacherSelector;
