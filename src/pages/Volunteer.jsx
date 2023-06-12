import React, { useEffect } from 'react';
import './volu.css';
import { connect } from 'react-redux';
import { incrementCount, updateFormData, submitRegistration } from '../redux/actions/VolunteerAction';

function Volunteer(props) {
  const { registrationCount, formData, incrementCount, updateFormData, submitRegistration } = props;

  const saveState = () => {
    try {
      const stateToPersist = {
        registrationCount,
        formData
      };
      const serializedState = JSON.stringify(stateToPersist);
      localStorage.setItem('volunteerState', serializedState);
    } catch (error) {
      console.error('Error saving state to local storage:', error);
    }
  };

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

  useEffect(() => {
    const persistedState = loadState();
    if (persistedState && !registrationCount && !formData.fullName) {
      incrementCount(persistedState.registrationCount);
      updateFormData(persistedState.formData);
    }
  }, [incrementCount, updateFormData]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await submitRegistration(formData);
    incrementCount();
    updateFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      age: '',
      address: ''
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    saveState();
  }, [registrationCount, formData]);

  return (
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContianer"></div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <div className="LogoContainer">
              <img src="https://i.ibb.co/GdDvCx5/v1.png" className="logo" />
            </div>
            <div className="header">RELAWAN</div>
            <div className="subHeader">MARI BERGABUNG MENJADI RELAWAN</div>
            <div className="subHeader">Bumi kita membutuhkan suara dan aksimu untuk mencari solusi membuat perubahan nyata.</div>
            <div className="subHeader">Jumlah orang yang mendaftar: {registrationCount} orang</div>
            <form onSubmit={handleFormSubmit} class="form">
              <div class="input-box">
                <label>Nama Lengkap</label>
                <input type="text" name="fullName" placeholder="Masukkan nama lengkap" value={formData.fullName} onChange={handleInputChange} required />
              </div>
              <div class="input-box">
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="Masukkan email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div class="column">
                <div class="input-box">
                  <label for="phonenumber">No HP</label>
                  <input type="text" name="phoneNumber" placeholder="Masukkan No HP" value={formData.phoneNumber} onChange={handleInputChange} required />
                </div>
                <div class="input-box">
                  <label for="age">Umur</label>
                  <input type="number" name="age" placeholder="Masukkan umur" value={formData.age} onChange={handleInputChange} required />
                </div>
              </div>
              <div class="input-box address">
                <label for="address">Alamat</label>
                <input type="text" name="address" placeholder="Masukkan alamat" value={formData.address} onChange={handleInputChange} required />
              </div>
              <button type="submit">Daftar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  registrationCount: state.registrationCount,
  formData: state.formData
});

const mapDispatchToProps = {
  incrementCount,
  updateFormData,
  submitRegistration
};

export default connect(mapStateToProps, mapDispatchToProps)(Volunteer);