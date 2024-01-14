import React from 'react';
import { Box, Text, Checkbox,  useColorModeValue } from '@chakra-ui/react';

const SciencesList = ({ sciences, onSelectSciences, selectedSciences,  }) => {

  const textColor = useColorModeValue('#002540','#fff')
  return (
    <Box mt={'10px'}>
      {sciences?.map((sciences) => (
        <Box key={sciences.id} onClick={() => onSelectSciences(sciences)} cursor={'pointer'} display="flex" alignItems="center" gap='10px'  p={2} >
          <Checkbox
            size={'lg'}
            isChecked={selectedSciences.includes(sciences)}
          />
          <Text fontSize={'18px'} color={textColor}>{ sciences?.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default SciencesList;
