import React,{useState} from "react";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";


import ImageHelper from "./helper/ImageHelper";

const Card = ({ product,addToCart=true,removeFromCart=false,setReload = f => f, reload=undefined }) => {

    const [redirect, setRedirect] = useState(false)
  const pushTocart = () => {
    addItemToCart(product, () => setRedirect(true))
  }

  const getARedirect = redirect => {
        if (redirect) {
          return <Redirect to="/cart" />;
        }
      };

  const showAddToCart = (addToCart) => {
    return(
      addToCart && (
        <button
        onClick={pushTocart}
        className="btn btn-block btn-outline-success mt-2 mb-2"
      >
        Add to Cart
      </button>
      )
    )
  }
 const showRemoveFromCart =(removeFromCart) => {
   return(
     removeFromCart && (
      <button
      onClick={() => {
        removeItemFromCart(product._id)
        setReload(!reload)
      }}
      className="btn btn-block btn-outline-danger mt-2 mb-2"
    >
      Remove from cart
    </button>
     )
   )
 }
console.log(product);
  return (
    <div className="card text-white bg-light border border-info ">
      <div className="card-header bg-dark text-white lead">{product.name}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-info font-weight-normal text-wrap">
          {product.description}
        </p>
  <p className="btn btn-success rounded  btn-sm px-4">$ {product.price}</p>
        <div className="row">
          <div className="col-12">
         {showAddToCart(addToCart)}
          </div>
          <div className="col-12">
         {showRemoveFromCart(removeFromCart)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;