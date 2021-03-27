import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <Container>
        <HeaderLogo>
          <img src={"https://i.imgur.com/7I9Was5.png"} />
        </HeaderLogo>
        <HeaderOptionAddress>
          <span className="Header-optionLineOne">Hello,</span>
          <span className="Header-optionLineTwo">Select your address</span>
        </HeaderOptionAddress>
        <HeaderSearch>
          <HeaderSearchInput type="text" />
          <HeaderSearchIconContainer></HeaderSearchIconContainer>
        </HeaderSearch>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  color: white;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;
const HeaderOptionAddress = styled.div``;
const optionLineOne = styled.div``;
const optionLineTwo = styled.div``;
const HeaderSearch = styled.div``;
const HeaderSearchInput = styled.input``;
