const initialState = {
  registrationCount: 12,
  formData: {
    fullName: '',
    email: '',
    phoneNumber: '',
    age: '',
    address: ''
  }
};

const VolunteerReducer = (state = initialState, action) => {
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem('volunteerState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Error loading state from local storage:', error);
      return undefined;
    }
  };

  const persistedState = loadState();

  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        registrationCount: state.registrationCount + 1
      };
      
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: action.payload
      };

    case 'SUBMIT_REGISTRATION':
      return {
        ...state,
        formData: initialState.formData
      };

    default:
      return persistedState || state;
  }
};

export default VolunteerReducer;