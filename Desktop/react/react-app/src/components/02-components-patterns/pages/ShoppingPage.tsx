import "../styles/custom-styles.css";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import {products} from '../data/products';




export const ShoppingPage = () => {

  const {  shoppingCart, onProductCountChange } = useShoppingCart();

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
      >
        {products.map((product) => (
          <ProductCard
            className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-img" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-button" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {shoppingCart
          ? Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCard
                key={key}
                style={{ width: "150px" }}
                product={product}
                className="bg-dark text-white"
                value={product.count}
                onChange={onProductCountChange}
              >
                <ProductImage className="custom-img" />
                <ProductButtons
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className="custom-button"
                />
              </ProductCard>
            ))
          : null}
      </div>
    {/*   <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};
