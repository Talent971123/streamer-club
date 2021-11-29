import React from "react";
// component
import { Row } from "components/Layout";
// styled component
import { CartStateWrapper, IconWrapper, CartCounts } from "./CartState.style";
// assets
import { CartIcon } from "assets/icon";

// ---------------------------------------------------------
const CartState = () => {
  return (
    <CartStateWrapper>
      <Row alignItems="center">
        <IconWrapper>
          <CartIcon />
        </IconWrapper>
        <CartCounts>20</CartCounts>
      </Row>
    </CartStateWrapper>
  );
};
export default CartState;
