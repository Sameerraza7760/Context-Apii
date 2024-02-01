// StudentContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  students: [],
};

// Action types
const ADD_STUDENT = 'ADD_STUDENT';

// Reducer function
const studentReducer = (state, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return { students: [...state.students, action.payload] };
    default:
      return state;
  }
};

// Context
const StudentContext = createContext();

// Provider component
export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};


export const useStudent = () => {
    const context = useContext(StudentContext);
    if (!context) {
      throw new Error('useStudent must be used within a StudentProvider');
    }
    return context;
  };