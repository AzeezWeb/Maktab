import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import SignIn from './components/form-hook/signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Classes from './pages/classes/classes';
import Teachers from './pages/teachers/teachers';
import Students from './pages/students/students';
import Sciences from './pages/sciences/sciences';
import LessonSchedule from './pages/lessonSchedule/lessonSchedule';
import Journal from './pages/journal/journal';
import Kpi from './pages/kpi/kpi';
// import Layout from './layout/layout';
function App() {
  return (
    <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="classes" element={<Classes />} />
            <Route path='teachers' element={<Teachers/>}/>
            <Route path='students' element={<Students/>}/>
            <Route path='sciences' element={<Sciences/>}/>
            <Route path='lessonSchedule' element={<LessonSchedule/>}/>
            <Route path='journal' element={<Journal/>}/>
            <Route path='kpi' element={<Kpi/>}/>
          </Routes>
          </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
