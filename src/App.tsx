// @ts-ignore
import logo from "./logo.svg";
import { Navbar, Sidebar } from "./components";
// @ts-ignore
import styled from "styled-components";
import React, { useState } from "react";
import Dashboard from "./dashboard";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  display: grid;
  grid: [stack] 1fr / minmax(min-content, 23%) [stack] 1fr;

  @media (max-width: 550px) {
    grid: [stack] 1fr / min-content [stack] 1fr;

    & > * {
      grid-area: stack;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const App = () => {
  

  
 

  return (
    <div>
      <Container>
        <Sidebar/>
        <div style={{ overflowY: "scroll" }}>
          <Navbar />

          
            <Dashboard />

        </div>
      </Container>
    </div>
  );
};

export default App;
