import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets'; 

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
      
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />
        
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Our journey started with a simple idea: to provide high-quality, stylish products that bridge the gap between luxury and affordability. We believe everyone deserves to feel confident in what they wear and use.</p>
          <p>Since our inception, we've worked tirelessly to curate a collection that reflects our passion for excellence. Every item in our store is selected with care, ensuring it meets our strict standards for durability and design.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to empower customers by offering a seamless shopping experience and products that truly make a difference in their daily lives. We are committed to sustainability, quality, and community.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously source and vet each product to ensure it meets our high-grade quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
    </div>
  );
};

export default About;