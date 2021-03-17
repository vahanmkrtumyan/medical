import React, { useState } from "react";
import { connect } from "react-redux";
import { addQuantityWithNumber } from "../../store/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import DetailsTab from "./DetailsTab";
import ProductImage from "./ProductImage";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// onSubmit = (e) => {
//   e.preventDefault();
//   const data = this.state.formFields;
//   fetch('/api/contact', {
//       method: 'post',
//       headers: {
//           'Accept': 'application/json, text/plain, */*',
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//   }).then(res => {
//       res.status === 200 ? this.setState({ submitted: true }) : ''
//       let formFields = Object.assign({}, this.state.formFields);
//       formFields.name = '';
//       formFields.email = '';
//       formFields.phone = '';
//       formFields.subject = '';
//       formFields.text = '';
//       this.setState({formFields});
//   });
// }

function ProductContent({ selectedProduct }) {
  const router = useRouter();
  let { locale } = router;
  console.log(selectedProduct);
  return (
    <section className="shop-details-area ptb-80">
      <ToastContainer />
      <div className="container">
        <div className="row align-items-center">
          <ProductImage images={selectedProduct?.images || []} />

          <div className="col-lg-7">
            <div className="products-details">
              <h3>{selectedProduct[`name_${locale}`]}</h3>
              <div style={{ maxHeight: "150px", overflow: "auto" }}>
                {documentToReactComponents(
                  selectedProduct[`description_${locale}`]
                )}
              </div>
              {/* <div className="availability">
                Availability: <span>In Stock</span>
              </div> */}
              {/* <form onSubmit={() => console.log("asdasd")}>
                <div className="quantity">
                  <span>Quantity:</span>

                  <span className="minus-btn">
                    <Icon.Minus />
                  </span>

                  <input
                    type="text"
                    // value={this.state.qty}
                    // min={this.state.min}
                    // max={this.state.max}
                    // onChange={(e) => this.setState({ qty: e.target.value })}
                  />

                  <span className="plus-btn">
                    <Icon.Plus />
                  </span>
                </div>
                <button type="submit">Add to Cart</button>

                <a
                  href="#"
                  className="add-to-wishlist-btn"
                  title="Add to Wishlist"
                >
                  <Icon.Heart />
                </a> */}
              <div className="buy-btn">
                <a href="#" className="btn btn-primary">
                  Buy it Now
                </a>
              </div>
              {/* </form> */}
            </div>
          </div>

          <DetailsTab />
        </div>
      </div>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(addQuantityWithNumber(id, qty));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.selectedProduct,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContent);
