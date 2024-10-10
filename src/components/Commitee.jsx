import React from 'react';
import bgimage3 from "/src/assets/images/bgimage3.avif";

const Committee = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-10 px-4 md:px-8 text-gray-800 font-Merriweather"
      style={{ backgroundImage: `url(${bgimage3})` }}
    >
      <div className="bg-gradient-to-br from-purple-800 to-green-600 bg-opacity-90 p-6 md:p-12 rounded-2xl shadow-2xl mx-auto max-w-5xl">
        {/* Heading Section */}
        <h1 className="text-center uppercase font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-wider">
          Tanguria Recreation Club - Kali Puja Committee for 2024
        </h1>
        <h1 className="text-center uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-yellow-300 mb-8 tracking-wide">
          Celebrating 00th Years of Kali Puja
        </h1>

        {/* Committee Members List */}
        <ul className="list-none text-base md:text-lg lg:text-xl space-y-4 md:space-y-6 lg:space-y-8">
          {[
            { role: "President", name: "Sri Narayan Chandra Mandal" },
            { role: "Vice-President", name: "Sri Partha Pratim Das" },
            { role: "Secretary", name: "Sri Sanjib Pahari" },
            { role: "Assistant Secretary", name: "Sri Supriya Das" },
            { role: "Treasurer", name: "Sri Swapan Dey" },
            { role: "Assistant Treasurer", name: "Sri Malay Basu" },
            { role: "Joint Accountant", name: "Sri Somnath Maity and Soumyadip Das" },
            { role: "Conducting the Puja", name: "Sri Ajit Das" },
          ].map((member, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-purple-500 to-green-500 rounded-xl border border-yellow-400 p-4 md:p-6 transform transition duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:scale-105 hover:text-white shadow-lg"
            >
              <span className="font-extrabold text-white">{member.role}:</span>
              <b className="ml-2 text-gray-100">{member.name}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Committee;
