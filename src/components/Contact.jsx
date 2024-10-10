import React, { useState } from 'react';
import bgimage2 from "/src/assets/images/bgimage3.avif";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat py-10 px-4 text-white font-Merriweather"
            style={{ backgroundImage: `url(${bgimage2})` }}
        >
            {/* Heading Section */}
            <h1 className='text-center text-4xl md:text-5xl font-extrabold text-yellow-400 p-5'>About Us</h1>

            {/* Description Section */}
            <p className='mx-auto px-4 max-w-4xl text-justify text-gray-700 md:text-lg font-extrabold leading-relaxed'>
                <b>Tanguria Club</b> has a long history of 90 years. We started our journey in the year 1935 and this year's Durga Puja is the 90th year. During the pre-independence period, the club took an active role in the Indian Freedom movement...
            </p>

            <h1 className='text-center text-3xl md:text-4xl uppercase font-extrabold text-yellow-400 py-6'>Activities During Kali Puja</h1>

            <p className='mx-auto px-4 max-w-4xl text-justify text-gray-700 md:text-lg font-normal leading-relaxed'>
                Distribution of new clothes to 400 poor children and their families, a community lunch program on the Ashtami Day during Puja, and a cultural evening with Bijoya Sammellane...
            </p>

            {/* Map Section */}
            <h1 className='text-3xl text-center font-bold mt-10 mb-2 text-gray-900'>Get In Touch</h1>
            <address className='text-center font-semibold text-2xl p-4 text-gray-900'>
                Tanguria Recreation Club <br />
                Tanguria, Bhagwanpur, Purba Medinipur, West Bengal - 721458
            </address>
            <div className='overflow-hidden h-0 pb-[50%] relative'>
                <iframe className='border-0 h-full w-full left-1/2 top-0 absolute transform -translate-x-1/2'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.099942372406!2d87.69473187474323!3d22.083999850701815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02cfd46971a2bd%3A0x1814793989b1be26!2sTanguria%20Recreation%20Club!5e0!3m2!1sen!2sin!4v1724822142441!5m2!1sen!2sin"
                    loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Contact Form Section */}
            <div className="container mx-auto py-10 px-4 sm:px-8 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Contact Info */}
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-semibold text-gray-900'>Contact Us</h1>
                        <p className='text-lg text-gray-700'>Have something to say? We are here to help. Fill up the form or reach out through email or phone.</p>
                        <div className="space-y-4">
                            <div className='flex items-center space-x-3 text-lg text-gray-700'><FaRegAddressCard /><span>Tanguria, Bhagwanpur, Purba Medinipur, 721458</span></div>
                            <div className='flex items-center space-x-3 text-lg text-gray-700'><MdOutlineEmail /><span>email@gmail.com</span></div>
                            <div className='flex items-center space-x-3 text-lg text-gray-700'><FaPhone /><span>+91 1111111111</span></div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={contact.name}
                                    onChange={handleInput}
                                    className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleInput}
                                    className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={contact.message}
                                    onChange={handleInput}
                                    className="border border-gray-300 px-4 py-2 rounded-md w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="bg-indigo-500 text-white px-6 py-2 text-sm rounded-md font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition duration-200 ease-in-out">
                                Send
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Footer Section */}
            <footer className='text-center bg-slate-800 text-white py-4'>
                <p>© 2024 Tanguria Recreation Club</p>
            </footer>
        </div>
    );
}

export default Contact;
