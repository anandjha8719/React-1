import React from "react";
import styled from "styled-components";
import { Icons } from "../assets";
// import { Inp } from "./form/input";

const Container = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  width: 100%;
  background: #fff;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  position: sticky;
  top: 0;
  align-items: center;
  padding: 0.2rem 1rem;
  box-shadow: 4px 0px 16px 10px rgba(30, 30, 30, 0.08);

  & > div:nth-of-type(1) {
    display: none;
  }

  & > div:nth-of-type(2) {
    flex: 1;
    padding: 0em 0.6rem;
  }

  & > div:last-of-type {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 1rem;
    gap: 0.4rem;
  }

  @media (max-width: 550px) {
    & > div:nth-of-type(1) {
      display: block;
    }
  }
`;

const Icon = styled.div`
  padding: 0.2rem 0.5rem;
  background: #eff3f9;
  border-radius: 2px;
`;




export const Navbar = () => {
  return (
    <>
      <Nav>

        <img src={Icons.search} alt="" />
        <input style={{
          width: '80%',
          padding: '1rem',
          paddingLeft: '2.5rem',
          border: 'none',
          fontFamily: "Manrope",
          marginLeft: '1rem',
          outline: 'none'
        
        }} placeholder="Type To Search.."></input>

        <div>
          

        </div>
        <div>
          <Icon>
          <img src={Icons.cog} alt="" />
          </Icon>
          <Icon>
            <img src={Icons.bell} alt="" />
          </Icon>
          <Icon>
          <img src={Icons.users} alt="" />
          </Icon>
          <div style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            margin: "0px 4px 0px 16px",
            padding: "0px"
          }}>
            <p style={{
              height: "8px",
              margin: "0px 4px 8px 0px",
              display: "inline-block",
              padding: "0px",
              fontWeight: "bold",
              fontSize: "14px",
              width: "120px"
            }}>Anand Kumar Jha</p>
            <small style={{
              height: "8px",
              margin: "4px 4px 8px 0px",
              display: "inline-block",
              padding: "0px",
              fontSize: "10px"
            }}>DEVELOPER</small>
          </div>

          <img style={{
            borderRadius: "50%",
            height: '36px',
            width: '36px'
          }} src="https://lh3.googleusercontent.com/ogw/AOh-ky2f4ms7SEmHX5kCaLINl6KC2gCC_DAFPZ-CnSSh_g=s32-c-mo" alt="" />
          
          <img src={Icons.down} alt="" />
          
        </div>
      </Nav>
    </>
  );
};
