import React from 'react'
import "./pages.css"
import {IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp} from 'react-icons/io';
import {FacebookShareButton, TwitterShareButton, WhatsappShareButton}from 'react-share'


export const DetailArtikel = () => {
  return (
    <>
      <body>
        <main>
          <section className="section article-detail" id="article">
            <div className='container'>
              <br />
              <h2 className="section-title">
                Transportasi Berkeadilan, Juru(s) Selamat Mobilitas Masyarakat Kita
              </h2>
              <div>
                <h5 className="penulis">Wahyudi</h5>
                <h5 className="penulis">28 Maret 2023</h5>
              </div>

              <div className="share-sosmed">
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

              <figure className="hero-banner">
                <img src="https://i.ibb.co/zm9PHXx/article2.jpg" alt="Equitable Transportation, Savior(s) of Safe Mobility in Our Society" />
              </figure>

              <div className="para-artikel">
                <p> Membangun sistem transportasi publik bukan sekedar bangun infrastruktur, gunting pita, panggil media,
                  lalu voilà! Jadi deh! Lebih dari itu transportasi publik adalah membangun sistem, membangun kultur, dan
                  kesadaran jangka panjang masyarakatnya sendiri tentang mobilitas transportasi.
                </p>
                <br />
                <p>
                  Terlebih masyarakat kita yang sedari dulu dijejali dengan transportasi yang bersifat pribadi sehingga
                  perlahan melupakan apa itu transportasi publik. Padahal sudah ada
                  <b>Undang-Undang nomor 22 tahun 2009 tentang lalu lintas dan angkutan jalan yang berbunyi: </b>
                </p>
                <br />
                <p><i>
                  “Pemerintah wajib menyelenggarakan dan menyediakan pelayanan angkutan umum yang aman, nyaman, selamat dan terjangkau bagi masyarakat…”
                </i>
                </p>
                <br />
                <p>
                  Namun kenyataannya di lapangan pemerintah malah memiliki intervensi yang terbatas dalam sistem
                  transportasi publik itu sendiri. Pemerintah – baik pusat maupun daerah – berlomba-lomba menyediakan
                  infrastruktur transportasi yang fokus pada desain yang megah dan bisa diingat publik sebagai ikon atau
                  lanskap dari suatu daerah. Hal ini tentu lebih mementingkan sisi politis ketimbang memprioritaskan kita,
                  masyarakat umum, sebagai end user-nya.
                </p>
                <br />
                <p>
                  Transportasi umum adalah kebutuhan dasar  masyarakat dan diwujudkan oleh
                  pemerintah dari hasil memungut pajak masyarakatnya. Pemerintah pun sadar akan hal ini dan
                  dalam beberapa waktu belakangan mulai melirik isu transportasi publik. Namun sayangnya, banyak
                  proyek pemerintah dalam hal transportasi publik yang dirasa masih tidak tepat sasaran. Proyek kereta
                  cepat dengan segala polemiknya, kekacauan stasiun Manggarai, dan megahnya halte-halte bus di Jakarta bak
                  bahtera Titanic, hanya sebagian kecil bukti bahwa pemerintah kita tidak melihat manusia sebagai
                  end user-nya, melainkan hanya sebagai proyek infrastruktur saja.
                </p>
                <br />
                <p>
                  Tentu mindset ini perlu dibenahi. Untuk itu gerakan Transportasi Berkeadilan dan Berkelanjutan perlu
                  digaungkan dalam mewujudkan hal ini. Tidak hanya di mindset pemerintahnya sendiri sebagai regulator,
                  namun di masyarakat luas tadi sebagai end user-nya. Untuk itulah podcast ini dibuat sebagai jembatan
                  pengetahuan dan pemantik kesadaran bahwa Transportasi Berkeadilan itu ada dan merupakan solusi nyata
                  dalam jangka panjang bagi mobilitas kita semua.
                </p>
              </div>

              {/* </Artikel> */}
            </div>
          </section>

        </main>
      </body>

    </>
    
  )
}

export default DetailArtikel