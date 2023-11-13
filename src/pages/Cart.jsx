import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);


  return (
    <div>
        {
            carts?.length > 0 ?
            <div>
                {
                    carts?.map((cart, i) => (
                        <CartComp key={i} cart={cart}/>
                    ))
                }
                <div className="text-2xl flex items-center justify-end uppercase">Toplam Tutar : <span className="font-bold text-3xl ml-2"> {totalAmount} TL</span></div>
            </div> : 
            <div>
                Kartınız Boş...
            </div>
        }
    </div>
  )
};

export default Cart;
