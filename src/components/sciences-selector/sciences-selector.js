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
	Flex,
} from '@chakra-ui/react';
import ButtonOutline from '../button-outline/button-outline';
import ButtonSolid from '../button-solid/button-solid';

const SciencesSelector = ({ isOpen, onOpen, onClose, items, onSelect, selectedItems }) => {
	const handleToggle = itemId => {
		onSelect(prevSelected => {
			const isSelected = prevSelected.includes(itemId);

			if (isSelected) {
				return prevSelected.filter(id => id !== itemId);
			} else {
				return [...prevSelected, itemId];
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
					<ModalHeader>Fanlarni tanlang</ModalHeader>
					<ModalBody>
						{items?.map(item => (
							<Flex key={item.id} alignItems={'center'} gap={'10px'} p={'20px'}>
								<input
									type='checkbox'
									id={item.id}
									checked={selectedItems?.includes(item.id)}
									onChange={() => handleToggle(item.id)}
									className='checkbox-input'
								/>
								<HStack>
									<Text size={'xl'}>{ item.name}</Text>
								</HStack>
							</Flex>
						))}
					</ModalBody>
					<ModalFooter>
						<ButtonOutline mr="10px" onClick={onClose} >
							Yopish
						</ButtonOutline>
						<ButtonSolid onClick={handleSave}>
							Saqlash
						</ButtonSolid>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SciencesSelector;
