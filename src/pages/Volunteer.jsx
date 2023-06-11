import React from "react"
import "./volu.css"

export const Volunteer = () => {
  return (
    <>
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
                    <form action="#" class="form" autocomplete="on">
                      <div class="input-box">
                        <label>Nama Lengkap</label>
                        <input type="text" id="fullname" placeholder="Masukkan nama lengkap" required />
                      </div>
                      <div class="input-box">
                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="Masukkan email" required />
                      </div>
                      <div class="column">
                        <div class="input-box">
                          <label for="phonenumber">No HP</label>
                          <input type="number" id="phonenumber" placeholder="Masukkan No HP" required />
                        </div>
                        <div class="input-box">
                          <label for="age">Umur</label>
                          <input type="number" id="age" placeholder="Masukkan umur" required />
                        </div>
                      </div>
                      <div class="input-box address">
                        <label for="address">Alamat</label>
                        <input type="text" id="address" placeholder="Masukkan alamat" required />
                      </div>
                      <button>Daftar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};