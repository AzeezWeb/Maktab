import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonOutline = ({children, ...props}) => {
	return (
		<Button
			height={'45px'}
			textAlign={'center'}
			color={'#0094ff'}
			borderColor={'#0094FF'}
			border={'1px'}
			letterSpacing={'1px'}
			lineHeight={'20px'}
			fontSize={'15px'}
      {...props}
		>
      {children}
    </Button>
	);
};

export default ButtonOutline;
