import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './config/theme';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		</I18nextProvider>
	</React.StrictMode>
);
