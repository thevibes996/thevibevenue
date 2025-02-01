import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const services = [
'Private Theatre',
    'Bridal Shower',
    'Birthday Event',
    'Anniversary Party',
    'Customized Cake'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("successfully submitted the message: ", formData);

    // check if the properties in the state are empty
    if (formData.name === "" || formData.email === "" || formData.phone === "" || formData.service === "") {
      alert("Please fill in all the fields");
      return;
    }

    const number = "9535126699";
    const text = `Hi%20TheVibeVenue%2C%0AI%20am%20${encodeURI(formData.name)}%20%0Aemail%3A%20${encodeURI(formData.email)}%2C%0Aphone%3A%20${encodeURI(formData.phone)}%2C%0Aservice%3A%20${encodeURI(formData.service)}`;
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${text}`;
    window.open(url);

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.554486485431!2d77.6993602!3d12.7141601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6f82a7896cd5%3A0x20ab9638d4f6e2e4!2sMirza%20Rd%2C%20Vinayaka%20Nagar%2C%20Anekal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1706777770000"
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
          
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-[#ffb300] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-[#ffb300] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-[#ffb300] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="service" className="leading-7 text-sm text-gray-600">
              Service you need
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-[#ffb300] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="text-black bg-[#ffb300] border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;