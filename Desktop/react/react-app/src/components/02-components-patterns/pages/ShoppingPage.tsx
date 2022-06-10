import '../styles/custom-styles.css'
import React from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
const product = {
  id: "1",
  title: "Coffee Mug - card",
  img: "./coffee-mug.png",
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >{/* Relacion directa entre componentes hijos*/}
        <ProductCard 
        product={product}
        className="bg-dark text-white">
          <ProductCard.Image className="custom-img" />
          <ProductCard.Title className="text-white text-bold" />
          <ProductCard.Buttons className="custom-button" />
        </ProductCard>
        {/* Importacion por fuera de componentes hijos */}
        <ProductCard 
          product={product}
          className="bg-dark text-white"
          >
          <ProductTitle className="text-white text-bold"/>
          <ProductImage className="custom-img" />
          <ProductButtons className="custom-button"/>
        </ProductCard>
        <ProductCard 
          product={product}
          style={{
            backgroundColor: "#70D1F8"
          }}
          >
          <ProductTitle style={{
            fontSize: "1.4rem"
          }} className="text-white text-bold"/>
          <ProductImage style={{
            boxShadow: "10px 10px 10px rgba(0,0,0,0.2)"
          }} className="custom-img" />
          <ProductButtons  className="custom-button"
          style={{
            display: "flex",
            justifyContent: "end",
          }}/>
        </ProductCard>
      </div>
    </div>
  );
};
