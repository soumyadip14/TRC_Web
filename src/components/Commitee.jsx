import React from 'react';
import bgimage3 from "/src/assets/images/bgimage3.avif";

const Commitee = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-10 px-4 md:px-8 text-white font-Merriweather"
      style={{ backgroundImage: `url(${bgimage3})` }}
    >
      <div className="bg-gradient-to-br from-blue-800 via-purple-700 to-pink-900 bg-opacity-95 p-6 md:p-12 rounded-2xl shadow-2xl mx-auto max-w-5xl">
        {/* Heading Section */}
        <h1 className="text-center uppercase font-extrabold text-3xl md:text-4xl lg:text-5xl text-yellow-300 mb-4 tracking-wider">
          Tanguria Recreation Club - Kali Puja Committee for 2024
        </h1>
        <h1 className="text-center uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-teal-300 mb-8 tracking-wide">
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
              className="bg-gradient-to-r from-teal-700 via-blue-500 to-purple-800 rounded-xl border border-teal-400 p-4 md:p-6 transform transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:to-pink-600 hover:scale-105 hover:text-white shadow-lg"
            >
              <span className="font-extrabold text-yellow-200">{member.role}:</span>
              <b className="ml-2 text-yellow-100">{member.name}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Commitee;
