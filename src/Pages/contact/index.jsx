// Pages/contact/index.jsx
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";

export default function Contact() {
  return (
    <>
      <Header />
      
      <div className="container px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Hubungi kami</h1>
            <p className="col-lg-10 fs-4">Punya pertanyaan tentang program kami? Ingin berkolaborasi atau mengadakan acara? Jangan ragu untuk menghubungi kami melalui informasi kontak di bawah atau isi formulir pesan.</p>
            
            <div className="row mt-5">
              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <div className="bg-primary p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <i className="fa-solid fa-location-dot text-white"></i>
                  </div>
                  <div>
                    <h5>Lokasi</h5>
                    <p>Jalan Lenteng Agung Raya, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12640</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <div className="bg-primary p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <i className="fa-solid fa-phone text-white"></i>
                  </div>
                  <div>
                    <h5>Phone Number</h5>
                    <p>Hotline (021) 7863191 <br /> WhatssApp 085716243174</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <div className="bg-primary p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <i className="fa-solid fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h5>Email Address</h5>
                    <p>info@nurulfikri.ac.id <br /> sttnf@nurulfikri.ac.id</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <div className="bg-primary p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <i className="fa-solid fa-clock text-white"></i>
                  </div>
                  <div>
                    <h5>Business Hours</h5>
                    <p>Senin - Jumat: 07.00 - 16.00 WIB <br />Sabtu: 07.00 - 12.00 WIB<br />Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <h3 className="mb-4 text-center">Send a Message</h3>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Your Name" />
                <label htmlFor="floatingName">Your Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                <label htmlFor="floatingEmail">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingSubject" placeholder="Subject" />
                <label htmlFor="floatingSubject">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Your Message" id="floatingTextarea" style={{height: "150px"}}></textarea>
                <label htmlFor="floatingTextarea">Your Message</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="my-5">
          <h3 className="text-center mb-4">Temukan Kami Di Peta</h3>
          <div className="card shadow-sm mb-4">
            <div className="card-body bg-light p-3">
              <h5 className="card-title">STTNF - Gedung B</h5>
              <p className="card-text">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Jl. Situ Indah No.116, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451
              </p>
            </div>
          </div>
          <div className="ratio ratio-21x9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3101861493466!2d106.83052937497707!3d-6.354856393631361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec6b07b68ea5%3A0x17da46bdf9308389!2sSTT%20Terpadu%20Nurul%20Fikri%20-%20Kampus%20B!5e0!3m2!1sen!2sid!4v1713075242316!5m2!1sen!2sid" 
              className="border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="STTNF Gedung B Location"
            ></iframe>
          </div>
          <div className="mt-3 text-center">
            <a href="https://goo.gl/maps/YX8zGGkCJFVt4ZLEA" target="_blank" rel="noreferrer" className="btn btn-primary">
              <i className="bi bi-map me-2"></i>Get Directions
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}