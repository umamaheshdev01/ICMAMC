import React from 'react'

const register = () => {
  return (

    <>
    <div className="h-[30vh] md:h-[40vh] bg-[#750014] relative">
  <h2 className="absolute bottom-4 left-4 text-white text-4xl md:text-6xl font-bold group">
    Register
    <span className="block w-1/2 h-1 bg-white mt-1 transition-width duration-300 ease-in-out transform group-hover:w-full"></span>
  </h2>
</div>


<div className="max-w-[20rem] sm:max-w-[40rem] md:max-w-4xl mx-auto my-[60px]">

<p className="text-gray-700 text-left mb-8">
  The registration fee <span className="text-red-700">(non-refundable)</span> structure for attending the conference is as follows (Including GST):
</p>



<div className="overflow-x-auto">
  <table className="w-full table-auto border-collapse border border-blue-500">
    
    <thead>
      <tr className="bg-blue-500 text-white">
        <th className="py-2 px-4 border"></th>
        <th className="py-2 px-4 border" colSpan="2">Early-Bird Registration Fee (excluding 18% GST)</th>
        <th className="py-2 px-4 border" colSpan="2">Late/On-spot Registration Fee (excluding 18% GST)</th>
      </tr>
      <tr className="bg-blue-500 text-white">
        <th className="py-2 px-4 border"></th>
        <th className="py-2 px-4 border">Attendee</th>
        <th className="py-2 px-4 border">Presenter</th>
        <th className="py-2 px-4 border">Attendee</th>
        <th className="py-2 px-4 border">Presenter</th>
      </tr>
    </thead>
    <tbody>
      <tr className="transition-all hover:bg-blue-200 hover:text-blue-700">
        <td className="py-2 px-4 border">PG/PhD Student</td>
        <td className="py-2 px-4 border">2000/-</td>
        <td className="py-2 px-4 border">3000/-</td>
        <td className="py-2 px-4 border">2500/-</td>
        
        <td className="py-2 px-4 border">3500/-</td>
      </tr>
      <tr className="transition-all hover:bg-blue-200 hover:text-blue-700">
        <td className="py-2 px-4 border">Faculty</td>
        <td className="py-2 px-4 border">4000/-</td>
        <td className="py-2 px-4 border">5500/-</td>
        <td className="py-2 px-4 border">5000/-</td>
        
        <td className="py-2 px-4 border">6500/-</td>
      </tr>
      <tr className="transition-all hover:bg-blue-200 hover:text-blue-700">
        <td className="py-2 px-4 border">Industry Participants</td>
        <td className="py-2 px-4 border">6000/-</td>
        <td className="py-2 px-4 border">8000/-</td>
        <td className="py-2 px-4 border">7000/-</td>
       
        <td className="py-2 px-4 border">9000/-</td>
      </tr>
      <tr className="transition-all hover:bg-blue-200 hover:text-blue-700">
        <td className="py-2 px-4 border">Foreign Participants</td>
        <td className="py-2 px-4 border">$200</td>
        <td className="py-2 px-4 border">$250</td>
        <td className="py-2 px-4 border">$240</td>
        
        <td className="py-2 px-4 border">$300</td>
      </tr>
    </tbody>

    <caption className="text-lg font-bold mb-2 text-blue-700">Early and Late Registration Fees</caption>
  </table>
</div>

<br>
</br>
<hr></hr>
<br></br>
<p className="text-gray-700 text-left mb-8">
< span className='text-red-700'>One author can make a maximum of 3 presentations with an additional fee of 3000/- (excluding 18% GST) per additional presentation.</span> Note that 18% GST charges must be paid while paying the aforementioned registration fee through online fund transfer to the account:
</p>



<div className="bg-blue-50 p-4 rounded border border-blue-200 flex items-center">
 
  <div className="text-gray-700">
    <p className="mb-2"><strong>Bank:</strong> ICICI Bank Ltd. MNIT Branch Jaipur</p>
    <p className="mb-2"><strong>Account Name:</strong> Registrar (ICC) MNIT, Jaipur</p>
    <p className="mb-2"><strong>Account Number:</strong> 676801081625</p>
    <p><strong>IFSC Code:</strong> ICIC0006768</p>
  </div>
</div>




<br>
</br>




<br></br>


<div className="bg-green-50 p-4 rounded border border-green-200 flex items-center">
 
  <div className="text-gray-700">
    <p className="mb-2"><strong>Accommodation:</strong> The registration fee for attendees includes charges for registration kit, lunch and refreshments provided during the conference hours. It does not include boarding and lodging charges. For the participants willing to attend the conference, a limited number of paid on-campus accommodations are available (in the guest-house and hostels) on a first-come-first-serve sharing basis (for more details, please check the website for posting your request).</p>
  </div>
</div>

<br></br>
<br></br>

<p className="text-gray-700 text-left mb-8">
To complete the registration process attendees should fill the Google form available at the following button :
</p>


<div className="mt-4 ">
  <a
    href="https://forms.gle/ldfkjsdlkfjdskljflkdsjf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
  >
    Complete Registration
  </a>
</div>




</div>

</>
    
  )
}

export default register