import React, { useState, useEffect } from "react";
import { FaCreditCard, FaPhoneAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Donasi.css";

export const Donasi = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gross_amount, setGross_amount] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get(
          "https://final-project-be7-production-b776.up.railway.app/api/donasi/charge"
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
      name: name,
      email: email,
      phone: phone,
      gross_amount: gross_amount,
    };

    try {
      const response = await axios.post(
        "https://final-project-be7-production-b776.up.railway.app/api/donasi/charge" + token,
        userData
      );

      console.log(response.data);
      window.open(response.data.token.redirect_url);

      setName("");
      setEmail("");
      setPhone("");
      setGross_amount("");

      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "Donasi Berhasil!",
          text: "Terima kasih atas donasi Anda. Transaksi telah berhasil dilakukan.",
          showCancelButton: false,
          confirmButtonColor: " #7ed321",
          confirmButtonText: "Tutup",
          customClass: {
            confirmButton: "swal-button",
          },
        }).then(() => {
          navigate("/Donasi");
        });
      }, 5000); 
      
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Donasi Gagal!",
        text: "Maaf, terjadi kesalahan dalam transaksi Anda.",
        confirmButtonText: "OK", 
        confirmButtonColor: "#ff0000", 
      });
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
                    placeholder="Masukkan Nama"
                    required
                    className="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <i className="fa fa-user icon"></i>
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Masukkan Email"
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
                    placeholder="Nomor Telepon"
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
                    value={gross_amount}
                    onChange={(e) => setGross_amount(e.target.value)}
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
