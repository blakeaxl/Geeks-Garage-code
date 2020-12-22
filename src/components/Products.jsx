import React, { useContext } from "react";
import Product from "./Product";
import "../styles/components/Products.css";
import appContext from "../context/AppContext";
import banner from "../assets/images/banner.jpg";

const Products = () => {
  const { state, addToCart } = useContext(appContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  console.log();
  return (
    <div className="Products">
      <img src={banner} alt="banner" className="Products-banner" />
      <div className="Products-intro">
        <h3>Welcome to Geek´s Garage!</h3>
        <p>
          A place where you can find the most popular consoles at the best
          price.
        </p>
        <p>Scroll down to see and buy our consoles</p>
      </div>
      <div className="Products-sony company-container">
        <div className="Products-company-background sony"></div>
        <div className="Products-items">
          {products.map(
            (product) =>
              product.company === "sony" && (
                <Product
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              )
          )}
        </div>
        <p className="Products-company-description">
          "After the wheel, the best invention is the PlayStation." -Andrea
          Pirlo
        </p>
      </div>
      <div className="Products-xbox company-container">
        <div className="Products-company-background xbox"></div>
        <div className="Products-items">
          {products.map(
            (product) =>
              product.company === "xbox" && (
                <Product
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              )
          )}
        </div>
        <p className="Products-company-description">
          "You can always think of something like the Xbox as a super set-top
          box that can do everything the set-top box does, but then have the
          graphics to do the games as well." -Bill Gates
        </p>
      </div>
      <div className="Products-nintendo company-container">
        <div className="Products-company-background nintendo"></div>
        <div className="Products-items">
          {products.map(
            (product) =>
              product.company === "nintendo" && (
                <Product
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              )
          )}
        </div>
        <p className="Products-company-description">
          "Even a small amount of power can have a great effect when
          concentrated on a certain area." -Satoru Iwata
        </p>
      </div>
    </div>
  );
};

export default Products;
