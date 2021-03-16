import React, { useState } from "react";
import * as Icon from "react-feather";
import { connect } from "react-redux";
import { addQuantityWithNumber } from "../../store/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import DetailsTab from "./DetailsTab";
import ProductImage from "./ProductImage";

function ProductContent({ selectedProduct }) {
  return (
    <section className="shop-details-area ptb-80">
      <ToastContainer />
      <div className="container">
        <div className="row align-items-center">
          <ProductImage images={selectedProduct?.images || []} />

          <div className="col-lg-7">
            <div className="products-details">
              <h3>Wood Pencil</h3>

              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>

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
