import React from "react"
import "./volu.css"
import { connect } from 'react-redux';
import { incrementCount, updateFormData, submitRegistration } from "../redux/actions/VolunteerAction";

function Volunteer(props) {
    const { registrationCount, formData, incrementCount, updateFormData, setFormData, submitRegistration } = props;

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await submitRegistration(formData);
        incrementCount();
        setFormData({
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
                    <form onSubmit={handleFormSubmit} className="form">
                      <div className="input-box">
                        <label>Nama Lengkap</label>
                        <input type="text" name="fullName" placeholder="Masukkan nama lengkap" value={formData.fullName} onChange={handleInputChange} required/>
                      </div>
                      <div className="input-box">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Masukkan email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                      <div className="column">
                      <div className="input-box">
                        <label>No HP</label>
                        <input type="text" name="phoneNumber" placeholder="Masukkan No HP" value={formData.phoneNumber} onChange={handleInputChange} required />
                      </div>
                      <div className="input-box">
                        <label>Umur</label>
                        <input type="number" name="age" placeholder="Masukkan umur" value={formData.age} onChange={handleInputChange} required />
                      </div>
                      </div>
                      <div className="input-box address">
                        <label>Alamat</label>
                        <input type="text" name="address" placeholder="Masukkan alamat" value={formData.address} onChange={handleInputChange} required />
                      </div>
                      <button type="submit">Daftar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

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