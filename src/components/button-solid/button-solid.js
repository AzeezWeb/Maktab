import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonSolid = ({ variant, children, ...props }) => {
	return (
		<Button bg={'#0094FF'} height={'45px'} color={'#fff'} letterSpacing={'1px'} lineHeight={'20px'} fontSize={'15px'} {...props}>
			{children}
		</Button>
	);
};

export default ButtonSolid;
