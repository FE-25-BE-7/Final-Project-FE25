import React from 'react'
import "./pages.css"
import {IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp} from 'react-icons/io';
import {FacebookShareButton, TwitterShareButton, WhatsappShareButton}from 'react-share'

export const DetailProgram = () => {
  return (
    <>
    <body>
        <main>
            <section class="section article-detail" id="article">
                <div class="container">
                    <br />
                    <h2 class="section-title">
                    Gerakan Lingkungan dan Buruh Mesti Bersatu Perjuangan Iklim adalah Perjuangan Kelas
                    </h2>
                <div>
                    <h5 class="penulis">Greenpeace</h5>
                </div>

                <div class="share-sosmed">
                  <div>
                    <WhatsappShareButton
                    url={'https://www.example.com'}
                    quote={'Dummy text!'}
                    hashtag="#muo"
                    >
                    <IoLogoWhatsapp size={32} round />
                    </WhatsappShareButton>
                  </div>
                  <div>
                    <TwitterShareButton
                    url={'https://www.example.com'}
                    quote={'Dummy text!'}
                    hashtag="#muo"
                    >
                    <IoLogoTwitter size={32} round />
                    </TwitterShareButton>
                  </div>
                  <div>
                    <FacebookShareButton
                    url={'https://www.example.com'}
                    quote={'Dummy text!'}
                    hashtag="#muo"
                    >
                    <IoLogoFacebook size={32} round />
                    </FacebookShareButton>
                  </div>
                  {/* <div id="wa">
                    <IoLogoWhatsapp className="logo-whatsapp" size="35"></IoLogoWhatsapp>
                  </div>
                  <div id="twt">
                    <IoLogoTwitter className="logo-twitter" size="35"></IoLogoTwitter>
                  </div>
                  <div id="FB">
                    <IoLogoFacebook className="logo-facebook" size="35"></IoLogoFacebook>
                  </div> */}
                </div>

                <figure class="hero-banner">
                <img src="https://i.ibb.co/zPf07N4/gas1.jpg" alt="Equitable Transportation, Savior(s) of Safe Mobility in Our Society" />
                </figure>

                <div class="para-artikel">
                    <p> Jika anda menikmati libur akhir pekan dan gaji yang layak, cuti sakit dan tunjangan hari raya, ingatlah bahwa itu adalah hasil perjuangan kelas pekerja. Saat ini, di Indonesia dan pelbagai belahan dunia, kelas pekerja juga terlibat dalam perjuangan lingkungan hidup dan keadilan iklim.
                    </p>
                    <br />
                    <p>
                      Pada era ini, peran manusia dan hewan sebagai tenaga kerja digantikan mesin pabrik; ekonomi bergeser dari pertanian ke manufaktur; industri tekstil dimekanisasi bersamaan dengan penemuan mesin uap yang memakai batu bara; bahan bakar fosil mulai digunakan untuk mendukung pabrik dalam proses produksi dan mempercepat distribusi barang dengan transportasi kapal uap. 
                      <b>Undang-Undang nomor 22 tahun 2009 tentang lalu lintas dan angkutan jalan yang berbunyi: </b>
                    </p>
                    <br />
                    <p><i>
                      “Pemerintah wajib menyelenggarakan dan menyediakan pelayanan umum yang aman, nyaman, selamat dan ramah lingkungan bagi masyarakat…”
                    </i>
                    </p>
                    <br />
                    <p>
                      Perubahan ini meningkatkan produk domestik bruto per kapita di negara-negara Barat, memindahkan orang dari perdesaan ke perkotaan, dan memobilisasi mereka untuk bekerja sebagai buruh industri. Masa-masa ini merupakan periode penting perkembangan ekonomi; kapitalisme modern terintegrasi dan menjadi model untuk mengembangkan sistem di berbagai belahan dunia. 
                      Namun, dampaknya juga mempengaruhi kesehatan planet Bumi. Eksploitasi sumber daya alam yang ekstraktif juga mengubah lanskap dalam kegiatan pertanian skala besar. Secara sosial, Revolusi Industri menciptakan ketidakadilan karena mendorong eksploitasi upah dan jam kerja para buruh di bidang-bidang tersebut.
                    </p>
                    <br />
                    <p>
                      Dunia sedang memanas lebih cepat daripada kapan pun dalam setidaknya dua ribu tahun terakhir. Laporan Panel Lintas Pemerintah untuk Perubahan Iklim (IPCC) menyatakan bahwa kenaikan suhu rata-rata permukaan Bumi antara tahun 2011 dan 2020 adalah 1,1ºC (2°F). Ini lebih hangat dari suhu rata-rata sebelum Revolusi Industri dan lebih hangat dibanding kapan pun dalam 100 ribu tahun terakhir.
                      Di Indonesia, sistem ekonomi yang masih mengandalkan industri manufaktur dan ekstraktif serta berbasis lahan skala luas telah mengakibatkan polusi dan kerusakan lingkungan, serta ekspansi terhadap hutan. Semua itu memicu perubahan iklim dan bencana cuaca ekstrem–seperti banjir dan kebakaran hutan di musim kemarau–yang saat ini sedang terjadi di hampir semua wilayah Indonesia. 
                    </p>
                    <br />
                    <p>
                      Ini menunjukkan bahwa krisis iklim sudah di depan mata. Dalam bencana-bencana tersebut, kelas pekerja dan kelompok marjinal lainnya menjadi pihak yang paling terdampak. Hal tersebut juga semakin membuktikan bahwa kerusakan lingkungan dan krisis iklim tak bisa dilepaskan dari isu kelas.
                      Sayangnya, bukannya melakukan upaya perbaikan, pemerintah malah terus memberikan karpet merah kepada investasi yang merusak dan memperkuat oligarki, salah satunya lewat omnibus law UU Cipta Kerja. Kita berada di garis terdepan untuk menumbangkan praktik ini, dan kami yakin bahwa kaum buruh adalah pelopornya. </p>
                    <p>
                      <br />

                      Mari kita tegaskan kembali keyakinan kita pada kekuatan manusia untuk bekerja sama demi mengubah dunia menjadi lebih baik, memperkuat persatuan nasional bagi buruh, petani, masyarakat adat, kaum perempuan, pemuda, dan mahasiswa. Karena kita membutuhkan kekuatan itu sekarang, mungkin lebih dari sebelumnya.
                    </p>
                </div>

                <button id="btn_ikutpro" class="btn navbar-btn btn-outline">
                  <span>Ikuti Program</span>
                </button>
                
                </div>
       
            </section>

        </main>
    </body>
    </>
  )
}

export default DetailProgram