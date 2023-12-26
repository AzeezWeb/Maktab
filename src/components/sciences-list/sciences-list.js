import React from 'react';
import { Box, Text, Checkbox,  useColorModeValue } from '@chakra-ui/react';

const SciencesList = ({ sciences, onSelectSciences, selectedSciences, onSelectAllSciences,  }) => {

  const textColor = useColorModeValue('#002540','#fff')
  return (
    <Box mt={'10px'}>
      <Checkbox color={textColor} size={'lg'} pl={'8px'} onChange={onSelectAllSciences} isChecked={selectedSciences?.length === sciences?.length}>
        Hammasini tanlash
      </Checkbox>
      {sciences?.map((sciences) => (
        <Box key={sciences.id} display="flex" alignItems="center" gap='10px'  p={2} >
          <Checkbox
            size={'lg'}
            isChecked={selectedSciences.includes(sciences)}
            onChange={() => onSelectSciences(sciences)}
          />
          <Text fontSize={'18px'} color={textColor}>{ sciences?.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default SciencesList;
