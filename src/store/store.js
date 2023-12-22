import create from 'zustand';
import { data } from '../data';

const useStore = create(set => ({
	data: data,
	deleteClass: classId =>
		set(state => ({
			data: {
				...state.data,
				classes: state.data.classes.filter(cls => cls.id !== classId),
			},
		})),
	deleteStudentFromClass: (classId, studentId) =>
		set(state => {
			const updatedClasses = state.data.classes.map(cls => {
				if (cls.id === classId) {
					return {
						...cls,
						students: cls.students.filter(student => student.id !== studentId),
					};
				}
				return cls;
			});

			return {
				data: {
					...state.data,
					classes: updatedClasses,
				},
			};
		}),
}));

export default useStore;
