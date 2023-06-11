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
        return state;
    }
  };
  
  export default VolunteerReducer;  