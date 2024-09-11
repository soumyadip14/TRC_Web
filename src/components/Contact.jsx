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
        <div className=''
            style={{ backgroundImage: `url(${bgimage2})` }}
        >
            <h1 className='text-center text-5xl font-bold p-5 text-blue-900'> About Us </h1>
            <p className=' mx-auto px-4 max-w-6xl text-pretty font-normal'>
                <b>Tanguria </b>Club has a long history of 90 years. We started our journey in the year 1935 and this years Durga Puja is the 90th year. During the pre-independence period the club took active participation in the Indian Freedom movement by encouraging youths with good physical exercises and primarily doing Durga Puja. After the Independence in the late 60-70s, we had emerged as one of the good team of Cricket and Football and had a good name in the field of sports and games. We had won several times John Shield Football Tournament, South Calcutta League matches, Duncans Cup and many important tournaments during that time. Many of the famous players of those days representing East Bengal and Mohun Bagan Club had played in our clubs also. As the days passed by we have gradually become a good and responsible club of the society by organizing many events. During that time other than Durga Puja and Saraswati Puja we have organized Rakhi Utsav, Birthday celebrations of many renowned freedom Fighters, poets, authors, Distribution of Woolen Clothes to the needy ones. Gradually we started Blood Donation, Free Health Check up Camp, Free Eye Check up Camp also. We also were Quarter Finalist of 5 O Side Football Tournament in the year 2010 organised by News Channel 24Ghanta.</p>
            <h1 className='text-center uppercase font-bold text-3xl text-blue-900 p-5'> Activities During Kali Puja</h1>
            <p className='mx-auto px-4 max-w-6xl text-pretty font-normal'> Distribution of New Clothes to 400 poor children and their families During Puja – A community Lunch Programme (Bhog) for all section of people on the Ashtami Day During Puja – Distrubution of Bhog to all our Visitors on Ashtami Day in the afternoon After Durga Puja a Cultural Evening with Bijoya Sammellane.</p>
            <p className='mx-auto px-4 max-w-6xl text-pretty font-normal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam? Animi modi officia magnam perferendis ex iusto exercitationem quam assumenda maxime eum maiores dolorem, accusantium quia aperiam ea. Facilis, et!</p>
            <p className='mx-auto px-4 max-w-6xl text-pretty font-normal'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima facilis ea labore cupiditate sunt sequi nisi, delectus rem architecto? Nobis.</p>
            <h1 className='text-5xl text-center font-bold font-Merriweather uppercase mt-3'> Get In Touch </h1>
            <address className='text-center font-semibold text-2xl p-4'>
                Tanguria Recreation Club <br />
                Tanguria, Bhagwanpur, Purba Medinipur, West Bengal - 721458
            </address>
            <div className='overflow-hidden h-0 pb-[30%] relative'>
                <iframe className='border-0 h-[100%] w-[80%] left-1/2 top-0 absolute transform -translate-x-1/2'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.099942372406!2d87.69473187474323!3d22.083999850701815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02cfd46971a2bd%3A0x1814793989b1be26!2sTanguria%20Recreation%20Club!5e0!3m2!1sen!2sin!4v1724822142441!5m2!1sen!2sin" width="800" height="600" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="flex justify-center items-center min-h-screen p-10">
                <div className='max-w-md text-center space-y-4'>
                    <h1 className='text-3xl font-semibold'>Contact Us</h1>
                    <p className='text-lg text-gray-600'>Have something to say? We are here to help.</p>
                    <p className='text-lg text-gray-600'>Fill up the form or send an email or call.</p>
                    <div className="text-left space-y-2">
                        <div className='text-lg flex items-center space-x-2'><FaRegAddressCard /> <span>Tanguria, Bhagwanpur, Purba Medinipur, 721458</span></div>
                        <div className='text-lg flex items-center space-x-2'><MdOutlineEmail /> <span>email@gmail.com</span></div>
                        <div className='text-lg flex items-center space-x-2'><FaPhone /> <span>+91 1111111111</span></div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full ml-8">
                    <form action="#" method="post" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" value={contact.name} onChange={handleInput} className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your Name" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" value={contact.email} onChange={handleInput} className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your Email" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" value={contact.message} onChange={handleInput} className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 text-sm rounded-lg font-semibold w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            Send
                        </button>
                    </form>
                </div>
            </div>

            <footer className='text-center bg-slate-800 text-white p-2'>
                <p><i> Copyright @Tanguria Recreation Club</i></p>
            </footer>
        </div>
    )
}

export default Contact
