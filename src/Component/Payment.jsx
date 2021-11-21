import React from "react";
import "../Style/home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Button } from 'react-bootstrap'


function Payment() {
  const state = useSelector((state) => state.dataSlice);
  return (
    <>
      <center>
        <header>
          <h1>Payment Window</h1>
        </header>
        <main>
          <div>
            <h2>
              Seats booked are:{" "}
              {state.arrangement.map((item, index) => {
                return (
                  <span key={index}>
                    {item.map((item2, index2) => {
                      if (item2[1] == true && item2[1] != 999) {
                        return item2[0] + ",";
                      } else {
                        return null;
                      }
                    })}
                  </span>
                );
              })}
            </h2>
          </div>
          <div>
            <h4>Total Amount:₹{state.amount}</h4>
          </div>

          <Link to="/book">
            <Button>Go back</Button>
          </Link>
        </main>
        <footer></footer>
      </center>
    </>
  );
}

export default Payment;
