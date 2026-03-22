import "./product.css";
import prodPic from "../assets/images/image-product-desktop.jpg";
import cartPic from "../assets/images/icon-cart.svg";
import { useState } from "react";

export default function Product(){
    let productImage = new Image();
    productImage.src = prodPic;
    let productType = "PERFUME";
    let productName = "Gabrielle Essence Eau De Parfum";
    let productDescription = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.";
    let productPrice = "$149.99";
    let productOriginalPrice = "$169.99";

    return(
        <div className="product-main">
            <div className="product-image">
                <img src={prodPic} alt="product image" />
            </div>
            <div className="product-info">
                <p className="product-type-txt">{productType}</p>
                <p className="product-name-txt">{productName}</p>
                <p className="product-detail-txt">{productDescription}</p>
                <div className="product-price-main">
                    <p className="product-price-off-txt">{productPrice}</p>
                    <p className="product-price-txt">{productOriginalPrice}</p>
                </div>
                <button className="buy-button">
                    {/* <span className="button-add-to-cart-icon">{productImage}</span> */}
                    <img className="button-add-to-cart-icon" src={cartPic} alt="cart icon" />
                    <span className="button-add-to-cart-txt">Add to Cart</span>
                </button>
            </div>
        </div>
    )
}