// Pages/team/index.jsx
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";

export default function Team() {
  return (
    <>
      <Header />
      
      <div className="container px-4 py-5" id="team">
        <h2 className="pb-2 border-bottom text-center">Tim Kami</h2>
        <p className="lead text-center mb-5">Sekelompok pecinta buku yang berdedikasi bekerja untuk menghadirkan pengalaman sastra terbaik bagi Anda.</p>
        
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80")', backgroundSize: 'cover'}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Sarah Johnson</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <small>Founder & CEO</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>Book Enthusiast</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://img.freepik.com/free-photo/portrait-smiling-young-man-rubbing-his-hands_171337-10297.jpg?t=st=1744734520~exp=1744738120~hmac=66971f76d15e70e390f82dd6d089bb65352d95dec83f518786425a45b786998b&w=996")', backgroundSize: 'cover'}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Michael Chang</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <small>Head Curator</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>Literary Critic</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://img.freepik.com/free-photo/portrait-happy-asian-woman-smiling-posing-confident-cross-arms-chest-standing-against-studio-background_1258-89269.jpg?ga=GA1.1.1125603270.1744734437&semt=ais_hybrid&w=740")', backgroundSize: 'cover'}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Elena Rodriguez</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <small>Customer Relations</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>Book Club Leader</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h3 className="mb-4">Our Mission</h3>
            <p className="lead">
            Di Bookstore, kami percaya pada kekuatan transformatif membaca. Misi kami adalah menghubungkan pembaca dengan buku-buku yang menginspirasi, mendidik, dan menghibur. Kami berdedikasi untuk membina komunitas pecinta buku dan mempromosikan literasi di semua usia dan latar belakang.
            </p>
            <p>
            Didirikan pada tahun 2020, tim kami telah berkembang dari sekelompok kecil pembaca yang bersemangat menjadi kumpulan beragam penggemar sastra yang berkomitmen untuk berbagi kegembiraan membaca dengan komunitas kami.
            </p>
          </div>
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 bg-primary d-flex align-items-center justify-content-center text-white">
                  <i className="fa-solid fa-book-open fa-3x"></i>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Curated Selection</h5>
                    <p className="card-text">Kami memilih dengan cermat setiap judul dalam koleksi kami untuk memastikan kualitas literatur tertinggi di semua genre.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 bg-success d-flex align-items-center justify-content-center text-white">
                  <i className="fa-solid fa-users fa-3x"></i>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Community Events</h5>
                    <p className="card-text">Bergabunglah dengan klub buku rutin kami, pertemuan penulis, dan tantangan membaca untuk terhubung dengan sesama pecinta buku.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}