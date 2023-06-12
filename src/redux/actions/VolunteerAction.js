import axios from 'axios';

export const incrementCount = () => ({
  type: 'INCREMENT_COUNT'
});

export const updateFormData = (formData) => ({
  type: 'UPDATE_FORM_DATA',
  payload: formData
});

export const submitRegistration = (formData) => {
  return async (dispatch) => {
    try {
      
      await axios.post('https://648413ddee799e321626422f.mockapi.io/volunteer', formData);

      dispatch(updateFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        age: '',
        address: ''
      }));
    } catch (error) {
      console.error('Error submitting registration:', error);
    }
  };
};
