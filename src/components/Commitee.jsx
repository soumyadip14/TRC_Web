import React from 'react';
import bgimage3 from "/src/assets/images/bgimage3.avif";

const Commitee = () => {
  return (
    <div
  className="bg-cover bg-center bg-no-repeat py-10 px-6 text-white font-Merriweather"
  style={{ backgroundImage: `url(${bgimage3})` }}
>
  <div className="bg-slate-800 bg-opacity-60 p-8 rounded-lg shadow-lg">
    <h1 className="text-center uppercase font-bold text-5xl text-teal-400 p-5">
      Tanguria Recreation Club - KaliPuja Committee for 2024
    </h1>
    <h1 className="text-center uppercase font-bold text-4xl text-yellow-500 mb-8">
      Celebrating 00th Years of KaliPuja
    </h1>
    <ul className="list-none text-xl space-y-6">
      <li className="bg-white bg-opacity-10 rounded-md border border-teal-400 p-6 hover:bg-teal-400 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 transform">
        <span className="font-bold text-yellow-300">President:</span><b> Sri Narayan Chandra Mandal</b>
      </li>
      <li className="bg-white bg-opacity-10 rounded-md border border-teal-400 p-6 hover:bg-teal-400 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 transform">
        <span className="font-bold text-yellow-300">Vice-President:</span><b> Sri Partha Pratim Das</b>
      </li>
      <li className="bg-white bg-opacity-10 rounded-md border border-teal-400 p-6 hover:bg-teal-400 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 transform">
        <span className="font-bold text-yellow-300">Secretary:</span><b> Sri Sanjib Pahari</b>
      </li>
      <li className="bg-white bg-opacity-10 rounded-md border border-teal-400 p-6 hover:bg-teal-400 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 transform">
        <span className="font-bold text-yellow-300">Assistant Secretary:</span><b> Sri Supriya Das</b>
      </li>
      <li className="bg-white bg-opacity-10 rounded-md border border-teal-400 p-6 hover:bg-teal-400 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 transform">
        <span className="font-bold text-yellow-300">Treasurer:</span><b> Sri Swapan Dey</b> 
      </li>
      <li className="bg-white bg-opacity-10 rounded-md border border-teal-400 p-6 hover:bg-teal-400 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 transform">
        <span className="font-bold text-yellow-300">Assistant Treasurer:</span><b> Sri Malay Basu</b>
      </li>
      <li className="bg-white bg-opacity-10 rounded-md border border-teal-400 p-6 hover:bg-teal-400 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 transform">
        <span className="font-bold text-yellow-300"> Joint Accountant:</span><b> Sri Somnath Maity and Soumyadip Das</b> 
      </li>
      <li className="bg-white bg-opacity-10 rounded-md border border-teal-400 p-6 hover:bg-teal-400 hover:bg-opacity-30 hover:scale-105 transition-all duration-300 transform">
        <span className="font-bold text-yellow-300">Conducting the Puja:</span><b> Sri Ajit Das</b>
      </li>
    </ul>
  </div>
</div>

  )
}

export default Commitee
