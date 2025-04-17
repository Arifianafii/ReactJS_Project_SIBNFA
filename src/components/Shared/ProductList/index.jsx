import books from "../../../Utils/books";
export default function ProductList() {

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
            Temukan koleksi buku kami yang mengubah hidup yang telah membantu ribuan pembaca mengubah kebiasaan, pemikiran, dan hasil mereka.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">Views</a>
              <a href="#" className="btn btn-secondary my-2">Other Book</a>
            </p>
          </div>
        </div>
      </section>

      {/* Kartu Buku */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.map((book) => (
              <div key={book.id} className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt="book.title"
                    style={{ height: "225px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <p className="text-muted">By {book.author}</p>
                      </div>
                      <small className="text-muted">{book.year}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </>
  );
}