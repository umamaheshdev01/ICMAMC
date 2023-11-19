import React from 'react'
const CommitteeMember = ({ name, designation }) => (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="border border-gray-700 p-6 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-xl bg-white text-[#750010]">
        <h4 className="text-lg font-bold mb-2">{name}</h4>
        {designation && <p className="text-gray-600">{designation}</p>}
      </div>
    </div>
  );
  
  
  const CommitteeList = ({ title, members }) => (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center ">{title}</h2>
      <div className="flex flex-wrap -mx-4">
        {members.map((member, index) => (
          <CommitteeMember key={index} {...member} />
        ))}
      </div>

      <br></br>
      <hr></hr>
      <br></br>
    </div>

   

  );

const commitee = () => {


    const organizingCommittee = [
        { name: 'Prof. N. P. Padhy', designation: 'Director, MNIT Jaipur' },
        { name: 'Dr. Om P. Suthar | Dr. Kushal Sharma', designation: 'Chairman' },
        { name: 'Dr. Vatsala Mathur', designation: 'Head of Department of Mathematics, MNIT Jaipur' },
        
        { name: 'Dr. Sanjay Bhatter', designation: 'Organizing Secretary' },
        { name: 'Dr. Varun Jindal', designation: 'Organizing Secretary' },
        { name: 'Dr. Priyanka Harjule', designation: 'Organizing Secretary' },
        { name: 'Dr. Anubha Jindal', designation: 'Organizing Secretary' },
      ];
    
      const nationalAdvisoryBoard = [
        { name: 'Prof. Subiman Kundu', designation: 'Professor (Retired) IIT Delhi' },
        { name: 'Prof. P. Shunmugaraj', designation: 'IIT Kanpur' },
        { name: 'Prof. K. Sreenadh', designation: 'IIT Delhi' },
        { name: 'Dr. Anima Nagar', designation: 'IIT Delhi' },
        { name: 'Prof. Pratulananda Das', designation: 'Jadavpur University' },
        { name: 'Prof. S. Kesavan', designation: 'Professor (Retired), IMSc Chennai' },
        { name: 'Prof. S. Ponnusamy', designation: 'IIT Madras' },
        { name: 'Prof. P.V.S.N. Murthy', designation: 'IIT Kharagpur' },
        { name: 'Prof. Y.D. Sharma', designation: 'NIT Hamirpur' },
        { name: 'Prof. Sunil', designation: 'NIT Hamirpur' },
        { name: 'Prof. Aiyub Khan', designation: 'JNVU, Jodhpur' },
        { name: 'Prof. Paras Ram', designation: 'NIT Kurukshetra' },
        { name: 'Prof. R. P. Sharma', designation: 'NIT Arunachal Pradesh' },
        { name: 'Dr. A.S.V. Ravikanth', designation: 'NIT Kurukshetra' },
        { name: 'Dr. Ram Jiwari', designation: 'IIT Roorkee' },
        { name: 'Dr. Ch. Ramareddy', designation: 'NIT Warangal' },
        { name: 'Dr. R. Sivaraj', designation: 'NIT Jalandhar' },
        { name: 'Dr. Dharmendra Tripathi', designation: 'NIT Uttarakhand' },
        { name: 'Prof. Kusam deep', designation: 'IITR' },
        { name: 'Prof. A. Swaminathan', designation: 'IITR' },
        { name: 'Prof. Basant Agarwal', designation: 'CUR' },
        { name: 'Prof. Rajesh Kumar', designation: 'MNIT' },
        { name: 'Dr. S.D. Purohit', designation: 'RTU' },
        { name: 'Prof. Balram Dubey', designation: 'BITS Pilani' },
        { name: 'Prof. Panighari', designation: 'IITD' },
        { name: 'Prof. Jagdish Bansal', designation: 'Fill Missing Designation' },
        { name: 'Prof. Nischal Varma', designation: 'IITK' },
        { name: 'Prof. Akash Saxena', designation: 'Fill Missing Designation' },
        { name: 'Prof. Millie Panth', designation: 'IITR' },
    ];
    
    // Update the missing designations as needed
    
      
    
      const internationalAdvisoryBoard = [
        { name: "Prof. O.D. Makinde", designation: "Stellenbosch University, SA" },
        { name: "Prof. K. Vajravelu", designation: "University of Central Florida, Orlando" },
        { name: "Prof. O. Anwar Beg", designation: "University of Salford, Salford (UK)" },
        { name: "Prof. M. Turkyilmazoglu", designation: "Hacettepe University, Turkey" },
        { name: "Prof. D.A.S. Rees", designation: "University of Bath, Bath (UK)" },
        { name: "Prof. D. Laroze", designation: "Universite de Tarapacca, Chile" },
        { name: "Prof. Peter Vadasz", designation: "" },
        { name: "Dr. M. Narayana", designation: "University of West-indies, Jamaica Mona" },
        { name: "Prof. Dambharu Bhatta", designation: "University of Texas Rio Grande Valley, USA" },
        { name: "Prof. Ljubisa Kocinac", designation: "(Professor (Emeritus), University of Nis, Serbia)" },
        { name: "Prof. Vladan Devedzic", designation: "(Professor, University of Belgrade, Serbia)" },
      ];
      
    
      const localOrganizingCommittee = [
        { name: 'Dr. Sanjay Bhatter' },
        { name: 'Dr. Ritu Agarwal' },
        { name: 'Dr. Varun Jindal' },
        { name: 'Dr. Om P. Suthar' },
        { name: 'Dr. Kushal Sharma' },
        { name: 'Dr. Priyanka Harjule' },
        { name: 'Dr. Anubha Jindal' },
        // Add more members as needed
      ];







  return (
    <div>


        
<div className="h-[30vh] md:h-[40vh] bg-[#750014] relative">
  <h2 className="absolute bottom-4 left-4 text-white text-4xl md:text-6xl font-bold group">
    Committee
    <span className="block w-1/2 h-1 bg-white mt-1 transition-width duration-300 ease-in-out transform group-hover:w-full"></span>
  </h2>
</div>

<div className="max-w-[25rem] sm:max-w-[40rem] md:max-w-4xl mx-auto my-[60px]">

<div className="bg-white p-8">
      <CommitteeList title="Organizing Committee" members={organizingCommittee} />
      <CommitteeList title="National Advisory Commitee" members={nationalAdvisoryBoard} />
      <CommitteeList title="International Advisory Committe" members={internationalAdvisoryBoard} />
      <CommitteeList title="Local Organizing Committee" members={localOrganizingCommittee} />
    </div>




    </div>





















    </div>

    // </div>
  )
}

export default commitee