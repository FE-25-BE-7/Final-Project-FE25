import React from "react";
import {  FaCreditCard} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./pages.css";

export const Donasi = () => {
  return (
    <>
    <body>
    <section className="section form-con" id="login">
        <div className= "container form-box wrapper">
        <h2>Form Donasi</h2>
        <form method="POST">
            <h4>AKUN</h4>

            <div className="input-group">
                <div className="input-box">
                    <input type="text" placeholder="Username" required className="name" />
                    <i className="fa fa-user icon"></i>
                </div>
            </div>
            <div className="input-group">
                <div className="input-box">
                    <input type="email" placeholder="Masukan Email" required className="name" />
                    <i className="fa fa-envelope icon"></i>
                </div>
            </div>

            {/* <div className="input-group">
                <div className="input-box">
                    <h4> Tanggal Lahir</h4>
                    <input type="text" placeholder="DD" className="dob" />
                    <input type="text" placeholder="MM" className="dob" />
                    <input type="text" placeholder="YYYY" className="dob" />
                </div>
                <div className="input-box">
                    <h4> Jenis Kelamin</h4>
                    <input type="radio" id="b1" name="gendar" checked className="radio" />
                    <label for="b1">Pria</label>
                    <input type="radio" id="b2" name="gendar" className="radio" />
                    <label for="b2">Wanita</label>
                </div>
            </div> */}


            <div className="input-group">
                <div className="input-box">
                    <h4>Details Donasi</h4>
                    <input type="radio" name="pay" id="bc1" checked className="radio" />
                    <label for="bc1"><span> <FaCreditCard> </FaCreditCard> Credit Card</span></label>
                    <input type="radio" name="pay" id="bc2" className="radio" />
                    <label for="bc2"><span><i className="fab fa-cc-paypal"></i> Paypal</span></label>
                </div>
            </div>
            
            <div className="input-group">
                <div className="input-box">
                    <input type="tel" placeholder="Nomer Kartu" required className="name" />
                    <i className="fa fa-credit-card icon"></i>
                </div>
            </div>

            {/* <div className="input-group">
                <div className="input-box">
                    <input type="tel" placeholder="Card CVC" required className="name" />
                    <i className="fa fa-user icon"></i>
                </div>
                <div className="input-box">
                    <select>
                        <option>01 jun</option>
                        <option>02 jun</option>
                        <option>03 jun</option>
                    </select>
                    <select>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </div>
            </div>  */}
            
            <div className=" input-group">
              <div className=" input-box">
              <div>
                <input type="radio" name="pay" id="bc3" checked className="radio" />
                <label for="bc3"><span> <i className="fa-solid fa-rupiah-sign"></i>5.000</span></label>

                <input type="radio" name="pay" id="bc4" className="radio" />
                <label for="bc4"><span><i className="fa-solid fa-rupiah-sign"></i> 10.000</span></label>

                <input type="radio" name="pay" id="bc5" checked className="radio" />
                <label for="bc5"><span> <i className="fa-solid fa-rupiah-sign"></i> 20.000</span></label>

                <input type="radio" name="pay" id="bc6" className="radio" />
                <label for="bc6"><span><i className="fa-solid fa-rupiah-sign"></i> 30.000</span></label>

                <input type="radio" name="pay" id="bc7" checked className="radio" />
                <label for="bc7"><span> <i className="fa-solid fa-rupiah-sign"></i> 50.000</span></label>

                <input type="radio" name="pay" id="bc8" className="radio" />
                <label for="bc8"><span><i className="fa-solid fa-rupiah-sign"></i> 100.000</span></label>

                {/* <button className="nominal-button" onclick="selectNominal(100000)">100.000</button>
                <button className="nominal-button" onclick="selectNominal(200000)">200.000</button>
                <button className="nominal-button" onclick="selectNominal(300000)">300.000</button> */}

                 </div>

              <div className="input-group">
                  <div className="input-box">
                  <input type="text" placeholder="Jumlah Lain" required className="name" />
                  <i className="fas fa-donate icon "></i>
                 </div>
            </div>
              </div>
            </div>

            <div className="input-group">
                <div className="input-box">
                    <button type="submit">Donasi Sekarang</button>
                </div>

            </div>
        </form>
        </div>
    {/* </div> */}

  </section>
    </body>
    </>
  );
};