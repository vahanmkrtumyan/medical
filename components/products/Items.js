import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import QuickView from "./QuickView";
import en from "../../static/locales/en";
import hy from "../../static/locales/hy";
import ru from "../../static/locales/ru";
import { selectProduct } from "../../store/actions/cartActions";

// import contentful from "contentful";
var contentful = require("contentful");

function Items({ select }) {
  var client = contentful.createClient({
    space: "y5qbs5ztl3e9",
    accessToken: "HTkzIKJ_To1Umwref3J-pif70ReuHPgOEAaFrLSW1jk",
  });

  const locales = {
    hy,
    ru,
    en,
  };

  const t = (verse) => locales[locale][verse];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    client
      .getEntries({
        content_type: "category",
      })
      .then(function(entries) {
        const fetchedCategories = entries.items.map(function(entry) {
          return entry.fields;
        });
        setCategories(fetchedCategories);
      });
  }, []);

  useEffect(() => {
    client
      .getEntries({
        content_type: "product",
      })
      .then(function(entries) {
        const fetchedProducts = entries.items.map(function(entry) {
          return { ...entry.fields, id: entry.sys.id };
        });
        setProducts(fetchedProducts);
      });
  }, []);

  const router = useRouter();
  let { locale } = router;

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const filteredProducts = products.filter(
    (product) =>
      !selectedCategory || product.category.fields.name === selectedCategory
  );

  return (
    <section className="shop-area ptb-80">
      <ToastContainer />
      <div className="container">
        <div className="woocommerce-topbar">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-7">
              <div className="woocommerce-result-count">
                {/* <p>Showing 1-8 of 14 results</p> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="woocommerce-topbar-ordering">
                <select
                  className="form-control"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option key="1" value="">
                    {t("all")}
                  </option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category[`name_${locale}`]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {filteredProducts.map((data, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="single-products">
                <div className="products-image">
                  <img src={data.images?.[0].fields.file.url} alt="image" />
                  {/* <ul>
                    <li>
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                            handleModalData(
                              data.image?.fields.file.url,
                              data.price,
                              data.id
                            );
                          }}
                        >
                          <Icon.Search />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <Icon.Heart />
                      </a>
                    </li>
                    <li>
                      <Link href="/product-details/">
                        <a>
                          <Icon.Link />
                        </a>
                      </Link>
                    </li>
                  </ul> */}
                </div>

                <div className="products-content">
                  <h3
                    className="product-title"
                    onClick={() => {
                      select(data);
                      router.push(`/product-details/${data.id}`);
                    }}
                  >
                    {data[`name_${locale}`]}
                  </h3>
                  {/* <span>${data.price}</span> */}
                  {/* <ul>
                    <li>
                      <i className="flaticon-star-1"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-1"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-1"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-1"></i>
                    </li>
                    <li>
                      <i className="flaticon-star-1"></i>
                    </li>
                  </ul> */}
                  {/* <Link href="#">
                    <a
                      className="add-to-cart-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(data.id);
                      }}
                    >
                      Add to Cart
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-lg-12 col-md-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Prev
                    </a>
                  </li>

                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
        </div>
      </div>

      {modalOpen ? (
        <QuickView closeModal={closeModal} image={modalImage} price={price} />
      ) : (
        ""
      )}
    </section>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => {
//       dispatch(addToCart(id));
//     },
//   };
// };

const mapStateToProps = (state) => {
  return {
    product: state.selectedProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    select: (product) => {
      dispatch(selectProduct(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
