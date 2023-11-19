import React from 'react'

const papers = () => {


    const topics = [
        "Real Analysis",
        "Real Function Theory",
        "General and Combinatorial Topology",
        "Geometry and Topology",
        "Functional Analysis and Operator Theory",
        "Complex Analysis",
        "Several Complex Variables",
        "Spaces of Analytic Functions",
        "Measure Theory",
        "Topological Dynamics",
        "Ergodic Theory",
        "Matrix Analysis",
        "Summability Theory",
        "Convex and Variational Analysis",
        "Special Functions",
        "Integral Transforms",
        "Analysis of Ordinary and Partial Differential Equations",
        "Fixed-point theory"
      ];



      const topics1 = [
        "Mathematical Modeling",
        "Mechanics of Fluids and Solids",
        "Quantum Theory",
        "Relativity and Gravitational Theory",
        "Numerical ODEs and PDEs",
        "Bio-Mathematics",
        "Classical Thermodynamics, Heat Transfer",
        "Dynamical Systems",
        "Statistical Mechanics, Structure of Matter",
        "Difference Equations and Recurrence Relations",
      ];


      const tck = [
        "Linear, Nonlinear, and Integer Programming",
        "Combinatorial and Metaheuristic Optimization",
        "Network Algorithms",
        "Global Optimization",
        "Systems Theory",
        "Queuing Theory",
        "Game Theory, Economics, Social and Behavioral Sciences",
        "Applications of Fractional Calculus and Special Function",
        "Integral Transform",
        "Data Modeling and Analysis",
        "Model Verification and Validation",
        "Statistics",
        "Statistical Analysis",
        "Statistical Applications",
        "Sampling Techniques",
        "Stochastic Modeling",
        "Probability Theory and Stochastic Processes",
      ];
      











  return (
    <>

<div className="h-[30vh] md:h-[40vh] bg-[#750014] relative">
  <h2 className="absolute bottom-4 left-4 text-white text-4xl md:text-6xl font-bold group">
    Call For Papers
    <span className="block w-1/2 h-1 bg-white mt-1 transition-width duration-300 ease-in-out transform group-hover:w-full"></span>
  </h2>
</div>


<div className="max-w-[20rem] sm:max-w-[40rem] md:max-w-4xl mx-auto my-[60px]">
  <p className="text-gray-700 text-left mb-8">
  {/* The International Conference on Mathematical Analysis, Modeling, and Computation aims to provide a platform for scholars, researchers, and practitioners from across the globe to convene and exchange cutting-edge insights, methodologies, recent developments in Pure and Applied mathematics and their applications. This conference seeks to foster interdisciplinary collaboration and promote the advancement of mathematical techniques and computational tools that underpin various scientific and engineering disciplines. By addressing fundamental and applied mathematical challenges, this event aspires to facilitate discussions on innovative solutions, emerging trends, and their practical applications, thereby enriching our collective understanding of complex systems and their qualitative and quantitative analysis. */}
  The International Conference on Mathematical Analysis, Modeling, and Computation (ICMAMC-2023) invites submissions of original and novel research presentations in the following areas:
  </p>


  <div className="">

  <h1 className="text-2xl md:text-4xl text-left font-bold mb-4 text-[#750010] ">
  Track 1 : Mathematical Analysis And Applications
</h1>

<ul className="list-none pl-6">
  {topics.map((topic, index) => (
    <li key={index} className="flex items-center text-gray-500 mb-2">
      <span className="mr-2">&#10004;</span>
      {topic}
    </li>
  ))}
</ul>

  </div>

<br></br>
<hr></hr>
<br></br>



  <div className="">

<h1 className="text-2xl md:text-4xl text-left font-bold mb-4 text-[#750010] ">
Track 2 : Mathematical Modelling And Applications
</h1>

<ul className="list-none pl-6">
{topics1.map((topic, index) => (
  <li key={index} className="flex items-center text-gray-500 mb-2">
    <span className="mr-2">&#10004;</span>
    {topic}
  </li>
))}
</ul>

</div>



<br></br>
<hr></hr>
<br></br>

<div className="">
<h1 className="text-2xl md:text-3xl text-left font-bold mb-4 text-[#750010] ">
Track 3 : Computational Mathematics, Optimization, and Applications
</h1>
<ul className="list-none pl-6">
{tck.map((topic, index) => (
  <li key={index} className="flex items-center text-gray-500 mb-2">
    <span className="mr-2">&#10004;</span>
    {topic}
  </li>
))}
</ul>
</div>


<br></br>
<br></br>
<br></br>




<div className="bg-blue-50 p-4 rounded border border-blue-200 flex">
  <div className="text-green-500 mr-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
  </div>
  <p className="text-gray-700">
    <strong>INSTRUCTIONS FOR SUBMISSION:</strong><br></br> Abstracts include the scope of the work, methodology and its main conclusions, brief biography (maximum six lines) and author contact details including author's position, organization, address, telephone, mobile, and email. Abstracts should be sent via e-mail to: <a href="mailto:maths@mnit.ac.in" className="text-blue-500">maths@mnit.ac.in</a>. Authors may opt for virtual presentation or in person presentation of their research at ICMAMC-2024.
  </p>
</div>











  
</div>


<br></br>
    
    
    
    </>
  )
}

export default papers