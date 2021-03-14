import React, { Component } from "react";
import * as Icon from "react-feather";
import { connect } from "react-redux";
import { addQuantityWithNumber } from "../../store/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import DetailsTab from "./DetailsTab";
import ProductImage from "./ProductImage";

export class ProductContent extends Component {
  state = {
    qty: 1,
    max: 10,
    min: 1,
  };

  handleAddToCartFromView = () => {
    this.props.addQuantityWithNumber(8, this.state.qty);

    toast.success("Added to the cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.qty < 10) {
        return {
          qty: prevState.qty + 1,
        };
      } else {
        return null;
      }
    });
  };

  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.qty > 1) {
        return {
          qty: prevState.qty - 1,
        };
      } else {
        return null;
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(this.props);
    return (
      <section className="shop-details-area ptb-80">
        <ToastContainer />
        <div className="container">
          <div className="row align-items-center">
            <ProductImage />

            <div className="col-lg-7">
              <div className="products-details">
                <h3>Wood Pencil</h3>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>

                <div className="availability">
                  Availability: <span>In Stock</span>
                </div>

                <form onSubmit={this.handleSubmit}>
                  <div className="quantity">
                    <span>Quantity:</span>

                    <span className="minus-btn" onClick={this.DecreaseItem}>
                      <Icon.Minus />
                    </span>

                    <input
                      type="text"
                      value={this.state.qty}
                      min={this.state.min}
                      max={this.state.max}
                      onChange={(e) => this.setState({ qty: e.target.value })}
                    />

                    <span className="plus-btn" onClick={this.IncrementItem}>
                      <Icon.Plus />
                    </span>
                  </div>
                  <button type="submit" onClick={this.handleAddToCartFromView}>
                    Add to Cart
                  </button>

                  <a
                    href="#"
                    className="add-to-wishlist-btn"
                    title="Add to Wishlist"
                  >
                    <Icon.Heart />
                  </a>

                  <div className="buy-btn">
                    <a href="#" className="btn btn-primary">
                      Buy it Now
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <DetailsTab />
          </div>
        </div>
      </section>
    );
  }
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
    selectedProduct: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContent);
