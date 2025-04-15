export default function ProductList() {
  const books = [
    { 
      id: 1, 
      title: "Atomic Habits", 
      author: "James Clear",
      imageUrl: "/images/buku1.jpg" 
    },
    { 
      id: 2, 
      title: "The Psychology of Money", 
      author: "Morgan Housel",
      imageUrl: "/images/buku2.jpg" 
    },
    { 
      id: 3, 
      title: "Deep Work", 
      author: "Cal Newport",
      imageUrl: "/images/buku3.jpg" 
    },
    { 
      id: 4, 
      title: "Sapiens", 
      author: "Yuval Noah Harari",
      imageUrl: "/images/buku4.jpg" 
    },
    { 
      id: 5, 
      title: "The Almanack of Naval Ravikant", 
      author: "Eric Jorgenson",
      imageUrl: "/images/buku5.jpg" 
    },
    { 
      id: 6, 
      title: "Thinking, Fast and Slow", 
      author: "Daniel Kahneman",
      imageUrl: "/images/buku6.jpg" 
    },
  ];

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

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm">
                  <div className="position-relative" style={{ height: "225px", overflow: "hidden" }}>
                    <img 
                      src={book.imageUrl}
                      className="card-img-top" 
                      alt={`Cover of ${book.title}`}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%"
                      }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-3" 
                      style={{ 
                        background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                        color: "white"
                      }}>
                      <h5 className="m-0">{book.title}</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-muted">By {book.author}</p>
                    <p className="card-text">This bestselling book offers practical insights and strategies that can transform your daily routines and help you achieve remarkable results.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Add to Cart</button>
                      </div>
                      <small className="text-body-secondary">4.8 ★</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}