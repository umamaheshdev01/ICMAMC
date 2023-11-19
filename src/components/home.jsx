import React from 'react'
import Fun from './fun'
import FAQSection from './faq'
import logoImage1 from '../images/mnit.png';
import logoImage2 from '../images/ram.png';

import { useState, useEffect } from 'react';

const Header = () => {
  const [randomColor, setRandomColor] = useState(getRandomColor());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomColor(getRandomColor());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="flex items-center justify-center h-[70vh] md:h-[80vh] bg-[#750014]">
    <div className="text-center text-white">
      <div className="flex justify-center  md:gap-10 mb-4">
        <img src={logoImage1} alt="Conference Logo 1" className="h-[6rem] md:h-[13rem] max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-2" />
        <img src={logoImage2} alt="Conference Logo 2" className="h-[6rem] md:h-[13rem] max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-2" />
    
      </div>
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2" style={{ color: randomColor }}>ICMAMC-2024</h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">
        International Conference on Mathematical Analysis, Modeling, and Computation
      </p>
      <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Organized by</p>
      <p className="text-lg sm:text-xl md:text-2xl ">Department of Mathematics</p>
      <p className="text-lg sm:text-xl md:text-2xl ">Malaviya National Institute of Technology Jaipur</p>
      <p className="text-lg sm:text-xl md:text-2xl   mb-2">March 1-3, 2024</p>
    </div>
  </div>
  
  );
};



const Counter = () => {
  // Set the target date (March 31, 2024)
  const targetDate = new Date('March 31, 2024 00:00:00').getTime();

  // Set the initial state for the countdown values
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Update the countdown values every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    };

    // Call the updateCountdown function every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return (
    <div className="">

      <Fun></Fun>

      
    <div className="text-center mt-8">
  <h2 className="text-3xl md:text-4xl font-black text-[#750014] mb-4">The Conference Begins In:</h2>
  <p className="text-xl md:text-4xl font-black text-gray-900">
    <span className="countdown-item bg-[#750014] text-white border-1 md:border-[#750014] rounded px-2 md:px-4 py-2 m-2 inline-block animate__animated animate__fadeInUp">{days}</span> 
    <span className="hidden md:inline">Days :</span>
    <span className="inline md:hidden">D :</span>
    
    <span className="countdown-item bg-[#750014] text-white border-1 border-[#750014] rounded px-2 md:px-4 py-2 m-2 inline-block animate__animated animate__fadeInUp">{hours}</span> 
    <span className="hidden md:inline">Hours :</span>
    <span className="inline md:hidden">Hrs :</span>
    
    <span className="countdown-item bg-[#750014] text-white border-1 border-[#750014] rounded px-2 md:px-4 py-2 m-2 inline-block animate__animated animate__fadeInUp">{minutes}</span> 
    <span className="hidden md:inline">Minutes :</span>
    <span className="inline md:hidden">Min :</span>
    
    <span className="countdown-item bg-[#750014] text-white border-1 border-[#750014] rounded px-2 md:px-4 py-2 m-2 inline-block animate__animated animate__fadeInUp">{seconds}</span> 
    <span className="hidden md:inline">Seconds</span>
    <span className="inline md:hidden">Sec :</span>
  </p>
</div>


    
    
    

    </div>
  );
  
};



const home = () => {
  return (
    <>
    <br>
    </br>
    
    <br></br>
    
    {/* <Fun className ='mt'></Fun> */}

  
    <Header></Header>
    
    <Counter></Counter>
    
    <br />
  

   <hr></hr>

    <div className="max-w-[20rem] sm:max-w-[40rem] md:max-w-4xl mx-auto my-[60px]">
  <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-[#750010]">Welcome to ICMAMC 2024</h1>

  <p className="text-gray-700 text-left mb-8">
  Welcome to the International Conference on Mathematical Analysis, Modeling, and Computation (ICMAMC). The conference aims to serve as a platform for scholars, researchers, and practitioners worldwide to exchange insights and methodologies in the realms of Pure and Applied mathematics and their diverse applications. By fostering interdisciplinary collaboration, ICMAMC seeks to promote the advancement of mathematical techniques and computational tools that underpin various scientific and engineering disciplines. The event's focus includes addressing fundamental and applied mathematical challenges, facilitating discussions on innovative solutions, and exploring emerging trends. Join us in this collective effort to enrich our understanding of complex systems through qualitative and quantitative analysis.
  </p>
</div>


<div className="max-w-[20rem] sm:max-w-[40rem] md:max-w-4xl mx-auto my-[60px]">
  <h1 className="text-4xl text-center font-bold mb-4 text-[#750010]">News and Updates</h1>

  <FAQSection></FAQSection>

  

  
</div>


<br></br>


    </>
    

  )
}

export default home