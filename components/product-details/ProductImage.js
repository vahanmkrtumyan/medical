import React, { Component } from "react";
import Slider from "react-slick";

export class ProductImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  renderSliderMainImages = () => {
    return this.props.images.map((image, id) => {
      return (
        <div key={id}>
          <li className="item">
            <img src={image.fields?.file.url} alt="image" />
          </li>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="col-lg-12">
        <div className="products-details-image">
          <ul className="slickslide">
            <div>
              <Slider
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
                arrows={false}
                dots={true}
                slidesToShow={1}
                fade={false}
                autoplay={true}
                autoplaySpeed={4000}
              >
                {this.renderSliderMainImages()}
              </Slider>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductImage;
