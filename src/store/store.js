// useStore.js

import { create } from 'zustand';
import { data } from '../data';

const useStore = create((set) => {
  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('school_data');
    if (savedData) {
      set(JSON.parse(savedData));
    }
  };

	const saveToLocalStorage = () => {
		set((state) => {
			const currentState = state;
			localStorage.setItem('school_data', JSON.stringify(currentState));
			return state;
		});
	};

	const checkAndLoadFromLocalStorage = () => {
		const savedData = localStorage.getItem('school_data');
		if (savedData) {
			const parsedData = JSON.parse(savedData);
			if (parsedData && parsedData.data) {
				set(parsedData);
				return;
			}
		}
	

		set({ data: data });
	};

  return {
    data: data,
    deleteClass: (classId) =>
      set((state) => {
        const updatedData = {
          ...state.data,
          classes: state.data.classes.filter((cls) => cls.id !== classId),
        };
        saveToLocalStorage(); 
        return { data: updatedData };
      }),
    addClass: (newClass) =>
      set((state) => {
        const updatedData = {
          ...state.data,
          classes: [...state.data.classes, newClass],
        };
        saveToLocalStorage(); 
        return { data: updatedData };
      }),
    deleteStudentFromClass: (classId, studentId) =>
      set((state) => {
        const updatedClasses = state.data.classes.map((cls) => {
          if (cls.id === classId) {
            return {
              ...cls,
              students: cls.students.filter(
                (student) => student.id !== studentId
              ),
            };
          }
          return cls;
        });

        const updatedData = {
          ...state.data,
          classes: updatedClasses,
        };

        saveToLocalStorage(); 
        return { data: updatedData };
      }),
    loadFromLocalStorage,
    saveToLocalStorage,
		checkAndLoadFromLocalStorage,
  };
});

export default useStore;
