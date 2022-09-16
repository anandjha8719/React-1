import React from "react";
import { ReactLogo } from "../assets";
import styled from "styled-components";
import { Icons } from "../assets";
import { Dropdown } from "./dropdown";


const Container = styled.div`
  z-index: 2;
  padding: 0px;

  & > div:nth-of-type(1) {
    padding: 2rem 2rem 0.8rem 2rem;
    background: #fff;
    box-shadow: 4px 0px 16px rgba(30, 30, 30, 0.08);
    height: 100vh;
    overflow-y: auto;
  }

  & > div:nth-of-type(2) {
    background: #0000002e;
  }

  @media (max-width: 550px) {
    display:  "grid")};
    grid-template-columns: [nav] 3fr [escape] 1fr;
  }
`;

const LogoName = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  font-style: normal;
  padding-left: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Ul = styled.ul`
  padding: 1rem 0em 0em 0em;
  margin: 0px;
  list-style-type: none;
`;

const Li = styled.li<{ active?: boolean }>`
  padding: 0px 24px 0px 24px;
  & > a {
    color: #7C888B;
    text-decoration: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0.7rem 0rem;
    gap: 1rem;
  }

  & > a > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    gap: 2rem;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  ${(props) =>
    props.active &&
    `
    div {
      background-color: "blue";
    }
    & > a > div:nth-of-type(2) {
    font-weight: 600;
    
    }
  `}
`;

const Badge = styled.div`
  display: inline-flex;
  border-radius: 90px;
  align-content: center;
  background: #ddd;
  padding: 0.2em 0.5em;
  line-height: 16px;
  font-size: 0.9em;
  background-color: #1759EF;
  white-space: nowrap;
  color: #fff;
`;

export const clickHandler = () => {

}

interface Props {
  
}

export const Sidebar = () => {
  return (
    <Container>
      <div>
        <LogoContainer>
          <img style={{
            height: '40px'
          }} src={ReactLogo} alt="Logo" />
          <LogoName>Artemis</LogoName>
        </LogoContainer>
        <Ul>
          <small style={{
            fontSize: '10px'
          }}>MAIN</small>
          <Li active>
            <a href="#">
            <Dropdown
                items={["Link 1", "Link 2", "Link 3"]}
              >
                <div>
                  <img src={Icons.home} alt="" />
                </div>
                <div>Dashboard</div>
                <div>
                  <img src={Icons.down} alt="" />
                </div>
                </Dropdown>
              
            </a>
          </Li>
          <Li>
            <a href="#">
              <Dropdown
                items={["Link 1", "Link 2", "Link 3"]}
              >
                <div>
                  <img src={Icons.star} alt="" />
                </div>
                <div>
                  <div>Discover</div>
                  <Badge>4</Badge>
                </div>

              </Dropdown>
            </a>
          </Li>
          <Li>
            <a href="#">
              <Dropdown
                items={["Link 1", "Link 2", "Link 3"]}
              >
                <div>
                  <img src={Icons.user} alt="" />
                </div>
                <div>
                  <div>Users</div>
                </div>
                <div>
                  <img src={Icons.down} alt="" />
                </div>
              </Dropdown>
            </a>
          </Li>
          <Li>
            <a href="#">
              <Dropdown
                items={["Link 1", "Link 2", "Link 3"]}
              >
                <div>
                  <img src={Icons.building} alt="" />
                </div>
                <div>
                  <div>Documents</div>
                  <div>
                    <img src={Icons.down} alt="" />
                  </div>
                </div>
              </Dropdown>
            </a>
          </Li>
          <Li>
            <a href="#">
              <Dropdown
                items={["Link 1", "Link 2", "Link 3"]}
              >
                <div>
                  <img src={Icons.cog} alt="" />
                </div>
                <div>
                  <div>Applications</div>
                  <div>
                    <img src={Icons.down} alt="" />
                  </div>
                </div>
              </Dropdown>
            </a>
          </Li>
          <Li>
            <a href="#">
              <Dropdown
                items={["Link 1", "Link 2", "Link 3"]}
              >
                <div>
                  <img src={Icons.cog} alt="" />
                </div>
                <div>
                  <div>Pages</div>
                  <div>
                    <img src={Icons.down} alt="" />
                  </div>
                </div>
              </Dropdown>
            </a>
          </Li>
          <small style={{
            fontSize: '10px'
          }}>SECONDARY</small>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.users} alt="" />
              </div>
              <div>Support Center</div>
            </a>
          </Li>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.comments_alt} alt="" />
              </div>
              <div>Inbox</div>
            </a>
          </Li>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.comments_alt} alt="" />
              </div>
              <div>File Manager</div>
            </a>
          </Li>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.comments_alt} alt="" />
              </div>
              <div>Data List</div>
            </a>
          </Li>
          <div style={{
            height: "3rem"
          }}>

          </div>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.cog} alt="" />
              </div>
              <div>Settings</div>
            </a>
          </Li>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.comments_alt} alt="" />
              </div>
              <div>Log Out</div>
            </a>
          </Li>
        </Ul>
      </div>
      
    </Container>
  );
};
