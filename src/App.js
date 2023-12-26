import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Classes from './pages/classes/classes';
import Teachers from './pages/teachers/teachers';
import Students from './pages/students/students';
import Sciences from './pages/sciences/sciences';
import LessonSchedule from './pages/lesson-schedule/lessonSchedule'
import Journal from './pages/journal/journal';
import Kpi from './pages/kpi/kpi';
import SignIn from './components/form-hook/signin';
import ClassInformation from './pages/classes/classInformation/classInformation';
import AddClass from './pages/addClass/addClass';
import useStore from './store/store';
import { useEffect } from 'react';
import EditingClass from './pages/editing-class/editing-class';
function App() {

	const { loadFromLocalStorage, saveToLocalStorage, checkAndLoadFromLocalStorage } = useStore();

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  useEffect(() => {
    saveToLocalStorage();
  }, [saveToLocalStorage]);

	useEffect(() => {
		// localStorage dan malumotlarni yuklash
		checkAndLoadFromLocalStorage();
	}, []);
	return (
		<Routes>
			<Route path='/' element={<SignIn />} />
			<Route path='classes' element={<Classes />} />
			<Route path='teachers'  element={<Teachers />} />
			<Route path='students' element={<Students />} />
			<Route path='sciences' element={<Sciences />} />
			<Route path='lessonSchedule' element={<LessonSchedule />} />
			<Route path='journal' element={<Journal />} />
			<Route path='kpi' element={<Kpi />} />
			<Route path='classes/:id' element={<ClassInformation/>} />
			<Route path='addClass' element={<AddClass/>} />
			<Route path='classes/editing-class/:classId' element={<EditingClass/>} />
		</Routes>
	);
}

export default App;
