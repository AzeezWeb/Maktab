import React from 'react';
import {
	Button,
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
						<Button onClick={onClose} color={'#0094ff'} mr={'15px'} border={'1px'} borderColor={'#0094FF'} bg={'transparent'}>
							Yopish
						</Button>
						<Button bg={'#0094FF'} mr={3} color={'#fff'} onClick={handleSave}>
							Saqlash
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SciencesSelector;
