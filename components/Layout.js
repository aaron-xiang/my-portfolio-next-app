import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 60px;
`;

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}

export default Layout;
