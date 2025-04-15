export default function Hero() {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Jelajahi koleksi buku terbaik dari berbagai genre dan penulis ternama hanya di Bookstore.</h1>
            <p className="lead">Ribuan buku dari berbagai kategori: fiksi, non-fiksi, pendidikan, dan banyak lagi.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
            </div>
          </div>
          <div className="col-lg-5 p-0 overflow-hidden">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <img
                className="rounded-3"
                src="https://picsum.photos/720/600"
                alt="Atomic Habits book cover"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}