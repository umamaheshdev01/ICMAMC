import React from 'react'



const SpeakerCard = ({ name, designation }) => (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="border border-gray-700 p-6 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-xl bg-white text-[#750010]">
        <h4 className="text-lg font-bold mb-2">{name}</h4>
        {designation && <p className="text-gray-600">{designation}</p>}
      </div>
    </div>
  );
  


const speakers = () => {
  return (
    <div>


<div className="h-[30vh] md:h-[40vh] bg-[#750014] relative">
  <h2 className="absolute bottom-4 left-4 text-white text-4xl md:text-6xl font-bold group">
    Speakers
    <span className="block w-1/2 h-1 bg-white mt-1 transition-width duration-300 ease-in-out transform group-hover:w-full"></span>
  </h2>
</div>

<div className="max-w-[25rem] sm:max-w-[40rem] md:max-w-4xl mx-auto my-[60px]">



<div className="bg-white p-8">
<h2 className="text-3xl md:text-4xl font-bold mb-6  text-center text-[#750010]">Keynote Speakers</h2>
<div className="flex flex-wrap -mx-4">

<SpeakerCard name="Prof. S. Sundar" designation=" IIT Madras"  />

</div>

<br>
</br>
<hr></hr>
<br></br>
      <h2 className="text-3xl md:text-4xl font-bold mb-6  text-center text-[#750010]">Invited Speakers</h2>

      {/* Theme 1: Mathematical Analysis and Applications */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4"><span className='text-[#750010]'>Theme 1:</span> Mathematical Analysis and Applications</h3>
        <div className="flex flex-wrap -mx-4">
          {/* Speakers go here */}
          {/* For example: */}
         
          <SpeakerCard name="Foreign Speaker 1" designation="Torino, Italy" />
  <SpeakerCard name="Foreign Speaker 2" designation="Torino, Italy" />
  <SpeakerCard name="Dr. Anima Nagar" designation="IIT Delhi" />
  <SpeakerCard name="Prof. Pratulananda Das" designation="Jadavpur University" />
  <SpeakerCard name="Dr. Rajeev Gupta" designation="IIT Goa" />
  <SpeakerCard name="Dr. Gaurav Dwivedi" designation="BITS Pilani" />
          {/* Add more speakers as needed */}
        </div>
      </div>

      {/* Theme 2: Mathematical Modelling and Applications */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4 "><span className='text-[#750010]'>Theme 2:</span> Mathematical Modelling and Applications</h3>
        <div className="flex flex-wrap -mx-4">
          {/* Speakers go here */}
          {/* For example: */}
          <SpeakerCard name="Foreign Speaker 1 " designation=" Torino, Italy" />
          <SpeakerCard name="Prof. Satyajit Roy" designation=" IIT Madras" />
          <SpeakerCard name="Prof. Jitendra Kumar" designation=" IIT Ropar" />
          <SpeakerCard name="Prof. P.G. Siddheshwar" designation=" CHRIST University" />
          <SpeakerCard name="Prof. Beer Singh " designation=" CU Lucknow" />
          <SpeakerCard name="Dr. Santo Banerjee " designation=" Torino, Italy" />
          {/* Add more speakers as needed */}
        </div>
      </div>

      {/* Theme 3: Mathematical Computations and Optimization */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4"><span className='text-[#750010]'>Theme 3:</span> Mathematical Computations and Optimization</h3>
        <div className="flex flex-wrap -mx-4">
          {/* Speakers go here */}
          {/* For example: */}
          <SpeakerCard name="Foreign Speaker 1" designation=" Torino, Italy" />
          <SpeakerCard name="Prof. Kusam deep" designation = "IITR" />
          <SpeakerCard name="Prof. A. Swaminathan" designation=" India" />
          <SpeakerCard name="Prof. Basant Agarwal" designation = " CUR" />
          <SpeakerCard name="Prof. Rajesh Kumar" designation = " MNIT" />
          <SpeakerCard name="Prof. Balram Dubey" designation = " BITS Pilani" />
          {/* Add more speakers as needed */}
        </div>
      </div>
    </div>





</div>







    </div>

  
  )
}

export default speakers