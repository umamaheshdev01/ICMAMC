import React from 'react';

const ComplexFooter = () => {
  return (
    <footer className="bg-[#750014] text-white py-8 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-sm">Department of Mathematics <br /> MNIT Jaipur <br />
Jaipur- 302017 , Rajasthan</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">Email: <a href="mailto:contact@example.com" className="underline hover:text-gray-300">contact@example.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+918619487500" className="underline hover:text-gray-300">+918619487500</a></p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <h4 className="text-lg font-semibold mb-4">Social Links</h4>
          <div className="flex ">
            <a href="https://www.facebook.com/mnitjaipurindia/" className="text-white text-lg mx-4 transition duration-300 transform hover:scale-110"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/NITJaipur" className="text-white text-lg mx-4 transition duration-300 transform hover:scale-110"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/mnitjaipurindia/" className="text-white text-lg mx-4 transition duration-300 transform hover:scale-110"><i className="fab fa-instagram"></i></a>
            <a href="https://in.linkedin.com/school/mnitjaipur/" className="text-white text-lg mx-4 transition duration-300 transform hover:scale-110"><i className="fab fa-linkedin"></i></a>
            <a href="tel:+918619487500" className="text-white text-lg mx-4 transition duration-300 transform hover:scale-110"><i className="fas fa-phone"></i></a>
            <a href="mailto:contact@example.com" className="text-white text-lg mx-4 transition duration-300 transform hover:scale-110"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white pt-4 text-center">
        <p className="text-sm">&copy; ICMAMC 2024 | MNIT Jaipur </p>
      </div>
    </footer>
  );
};

export default ComplexFooter;
