import React, { Component } from "react";
// import Logo from "../assets/spinner3.gif";

export default class Loader extends Component {
  render() {
    return (
      <>
        <div className="flex-col justify-center align-center w-full h-screen">
          <p>Loading</p>
          {/* <img className="m-auto" src={Logo} /> */}
        </div>
      </>
    );
  }
}
