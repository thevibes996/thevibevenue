import React, { Component, useState } from "react";

export default class Equipment extends Component {
  render() {
    return (
      <div className="flex flex-col py-24 px-4 pb-48">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold font-kanit py-4">ACHIEVEMENTS</h2>
        <p className=" flex text-center justify-center items-center py-4">
          Our team boasts numerous achievements, including multiple medals in state boxing championships and consistent participation in national and
          professional boxing events.
        </p>
      </div>
    );
  }
}
