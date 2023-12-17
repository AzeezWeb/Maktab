import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import SignIn from './components/form-hook/signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
// import Layout from './layout/layout';
function App() {
  return (
    <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="pages" element={<Layout />} />
          </Routes>
          </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
