import React, { useEffect, useState } from "react";
import { ProgressBar } from 'react-bootstrap';
import styled from "styled-components";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Icons } from "./assets";
import { Button } from "./components/button";
import Graph from "./utils/graphs";
import Transaction from "./components/Transaction"
// import { Chart } from "./utils/Chart";
import './dashboard.css';





const data = [
  { name: '', students: 3 },
  { name: '', students: 10 },
  { name: '', students: 3 },
  { name: '', students: 10 },
  { name: '', students: 7 },
  { name: '', students: 9 },
  { name: '', students: 7 },
  { name: '', students: 9 }
];







const Container = styled.div`
  padding: 2rem 3rem;
  background-color: rgba(225, 225, 225, 0.583);

  & > div {
    display: flex;
    flex-flow: row nowrap;
    gap: 4rem;
  }

  @media (max-width: 550px) {
    padding: 0.5rem 1rem;

    & > div {
      flex-flow: column-reverse nowrap;
      gap: 0rem;
    }
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;
const Left = styled.div`
  height: 50vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Card1 = styled.div`

  border: 0px;
  background-color: #FFF;
  height: 40%;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px 12px 8px 12px;
  & > p {
    margin: 0px;
  }
`;
const Card2 = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  padding: 8px 12px 8px 12px;
  background-color: #FFF;
  & > p {
    margin: 0px;
  }
`;
const Card3 = styled.div`
  height: 50vh;
  width: 40vw;
  padding: 0;
  flex-direction: column;
  justify-content: baseline;
  padding: 8px 12px 8px 12px;
  background-color: #FFF;
`;








interface Props {
  result: [] | any[];
  setResult: any;
}

const Dashboard = () => {
 

  return (
    <>
    <Container>
      {/* <ProgressBar now={60} /> */}


      <div>
        <Left>
          <Card1>
            <p className="card-heading">Total Income</p>
            <div className="card2-div">
              <p className="make-bolder">$124,563.00</p>
              <p className="mini-tag">+69%</p>
            </div>

            <progress className="progress-bar" value="69" max="100" />

            <p>Yearly Goal</p>
          </Card1>
          <Card2>
            <p className="card-heading">New Users</p>
            <div className="card2-div card2-heading2">
              <p className="make-bolder">94.2%</p>
              <p className="mini-tag">+69%</p>
            </div>
            <div className="bar-container">
              <BarChart className="bar-graph" width={390} height={120} data={data}>
                <Bar dataKey="students" fill="blue" />

                <XAxis dataKey="name" />
                <YAxis dataKey="students" display="none" />
              </BarChart>
            </div>


          </Card2>
        </Left>
        <Card3>
          <section className="card3-top-section">
            <p className="make-bolder">Balance</p>
            <p className="add-border">Modify <img src={Icons.down} alt="" /></p>
          </section>
          <section className="card3-middle-section">
            <div className="leftBox">
              <small>Earnings</small>
              <div className="card2-div">
                <p className="make-bolder">43.41%</p>
                <p className="mini-tag">+26%</p>
              </div>
            </div>
            <div className="rightBox">
              <small>Sales Value</small>
              <div className="card2-div">
                <p className="make-bolder">$95,422</p>
                <p className="mini-tag">+13%</p>
              </div>
            </div>
          </section>
          <section className="graph-section">
            <Graph />
          </section>
        </Card3>
      </div>
      
    </Container>
    
    <Transaction />
  </>
  );
};

export default Dashboard;
