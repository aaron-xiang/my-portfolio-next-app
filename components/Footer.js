import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: lightgray;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
`;

const Copyright = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`;

function Footer() {
  return (
    <Container className="fixed-bottom">
      <div>© 2020 Copyright: Aaron Xiang</div>
    </Container>
  );
}

export default Footer;
