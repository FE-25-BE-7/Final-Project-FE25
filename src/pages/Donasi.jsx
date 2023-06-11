import React, { useState, useEffect } from "react";
import { FaCreditCard, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Donasi.css";

export const Donasi = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jml_donasi, setJml_donasi] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get(
          "https://64512297a3221969115bd221.mockapi.io/user/token"
        );
        setToken(response.data.token);
      } catch (error) {
        console.log(error);
      }
    };

    fetchToken();
  }, []);

  const handleDonasi = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      email: email,
      phone: phone,
      jml_donasi: jml_donasi,
    };

    try {
      const response = await axios.post(
        "https://64512297a3221969115bd221.mockapi.io/user?token=" + token,
        userData
      );

      // Logika untuk menangani respon dari API setelah pengiriman data pengguna
      console.log(response.data);

      // Reset form setelah pengiriman data pengguna berhasil
      setUsername("");
      setEmail("");
      setPhone("");
      setJml_donasi("");
    } catch (error) {
      // Logika untuk menangani kesalahan jika terjadi error saat pengiriman data pengguna
      console.log(error);
    }
  };

  return (
    <> 
    <body> 
    <section className="section form-con" id="login">
      <div className="container form-box wrapper">
        <h2>Form Donasi</h2>
        <form onSubmit={handleDonasi}>
          <h4>AKUN</h4>

              <div className="input-group">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <i className="fa fa-user icon"></i>
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Masukan Email"
                    required
                    className="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <i className="fa fa-envelope icon"></i>
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <input
                    type="tel"
                    placeholder="Nomer Telepon"
                    required
                    className="name"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <i className="fa fa-phone icon"></i>
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Jumlah Donasi"
                    required
                    className="name"
                    value={jml_donasi}
                    onChange={(e) => setJml_donasi(e.target.value)}
                  />
                  <i className="fas fa-donate icon"></i>
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <button type="submit">Donasi Sekarang</button>
                </div>
              </div>
        </form>
      </div>
    </section>
    </body>
    </>
  );
};

