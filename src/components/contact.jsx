import React from 'react'

const contact = () => {
  return (
    <>

<div className="h-[30vh] md:h-[40vh] bg-[#750014] relative">
  <h2 className="absolute bottom-4 left-4 text-white text-4xl md:text-6xl font-bold group">
    Important Dates
    <span className="block w-1/2 h-1 bg-white mt-1 transition-width duration-300 ease-in-out transform group-hover:w-full"></span>
  </h2>
</div>


<div className="max-w-[20rem] sm:max-w-[40rem] md:max-w-4xl mx-auto my-[60px]">

<div className="flex flex-col bg-white p-8 rounded-md shadow-md transition-transform transform ">
  <div className="border-b border-gray-300 py-4 transition-all duration-300 ease-in-out transform hover:bg-gray-100">
    <p className="text-lg font-semibold text-[#750010]">Last date for abstract submission:</p>
    <p className="text-gray-700">31st Jan. 2024</p>
  </div>
  <div className="border-b border-gray-300 py-4 transition-all duration-300 ease-in-out transform hover:bg-gray-100">
    <p className="text-lg font-semibold  text-[#750010]">Notification for the acceptance of abstracts:</p>
    <p className="text-gray-700">10th Feb, 2024</p>
  </div>
  <div className="border-b border-gray-300 py-4 transition-all duration-300 ease-in-out transform hover:bg-gray-100">
    <p className="text-lg font-semibold  text-[#750010]">Early-Bird Registration (online):</p>
    <p className="text-gray-700">15th Feb., 2024</p>
  </div>
  <div className="py-4 transition-all duration-300 ease-in-out transform hover:bg-gray-100">
    <p className="text-lg font-semibold  text-[#750010]">Conference dates:</p>
    <p className="text-gray-700">1st - 3rd March, 2024</p>
  </div>
</div>


    




</div>



    
    </>
  )
}

export default contact