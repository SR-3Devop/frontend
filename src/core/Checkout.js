import React, { useState} from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import StripeCheckOut from 'react-stripe-checkout'
import { API } from "../backend";
const Checkout = ({
  products,
  setReload = f => f,
  reload = undefined
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: ""
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalAmount = () => {
    let amount = 0;
    products.map(p => {
      amount = amount + p.price;
    });
    return amount;
  };
  const paymentMethod = token => {
    const body = {
      token,
      products
    };
    const headers = {
      "Content-Type": "application/json"
    };
    return fetch(`${API}/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log(response);
        {cartEmpty(() => {
          console.log("emptying the cart")
        })}
        setReload(!reload)
      })
      .catch(error => console.log(error));
  };

  const showStripeButton = () => {
    return isAuthenticated() ? (
        <StripeCheckOut
        stripeKey="pk_test_51HkMrTD7t673YzWnhdNxSXeojrDrcXjw7533jYFDefErsluciAUYz2RTz1Der5k8V2l3Lk2VfiEg9PAqUKANj5F600a4GnPDM1"
        token={paymentMethod}
        amount={getFinalAmount()}
        shippingAddress
        billingAddress
        >
      <button className="btn btn-success">Pay with stripe</button>
      </StripeCheckOut>
    ) : (
      <Link to="/signin">
        <button className="btn btn-warning">Signin</button>
      </Link>
    );
  };
  return (
    <div>
      <h2 className="text-dark">Your total is {getFinalAmount() === 0 ? 0:""}</h2>
      <h3 className="text-dark"> $ {getFinalAmount() === 0 ?  ("CART IS EMPTY") :   getFinalAmount()}</h3>
      { getFinalAmount() === 0 ? "":showStripeButton()}
    </div>
  );
};

export default Checkout;
