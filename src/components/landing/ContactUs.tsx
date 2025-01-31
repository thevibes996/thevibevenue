import React, { Component } from "react";

export default class ContactUs extends Component {
  state = {
    name: "",
    email: "",

    message: ""
  };

  submitMessage = (e) => {
    e.preventDefault();
    console.log("successfully submitted the message: ", this.state);


    // check if the properties in the state are empty
    if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
      alert("Please fill in all the fields");
      return;
    }

    const number = "919564073380";

    const text = `Hi%20Dipan%2C%0AI%20am%20${encodeURI(this.state.name)}%20%0Aemail%3A%20${encodeURI(this.state.email)}%2C%0Amessage%3A${encodeURI(
      this.state.message
    )}`;

    const url = `https://api.whatsapp.com/send?phone=
    ${number}&text=${text}`;
    window.open(url);

    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <section id="contact" className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.794254433651!2d77.6450401!3d12.9110275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1592a4386333%3A0x1fd8cdd9e6083e7b!2sWhite%20Corner%20Boxing%20Academy!5e0!3m2!1sen!2sin!4v1705903695726!5m2!1sen!2sin"
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white  border border-gray-300  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white  border border-gray-300  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                onChange={(e) => {
                  this.setState({ message: e.target.value });
                }}
                id="message"
                name="message"
                className="w-full bg-white  border border-gray-300  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              onClick={this.submitMessage}
              className="text-black bg-[#D6FB00]  border-0 py-2 px-6 focus:outline-none hover:bg-black  hover:text-white text-lg"
            >
              Button
            </button>
          </div>
        </div>
      </section>
    );
  }
}
