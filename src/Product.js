import React from "react";
import styled from "styled-components";

function Product() {
  return (
    <Container>
      <Title>iPad Pro</Title>
      <Price>$1449</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2blZl._AC_SX342_.jpg" />
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  height: 300px;
`;
