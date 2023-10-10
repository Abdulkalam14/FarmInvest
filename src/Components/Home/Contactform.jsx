import React from 'react'
import Form from './Form';

const Contactform = () => {
  return (
    <div className="w-full py-16 px-4 text-white" id="contact">
        <div className='max-w-[1240px] mx-auto mb-10'>
            <h1 className='font-bold text-4xl'>How Can We Help You?</h1>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6'>
            <div className='border-solid border-gray-50 h-60 w-60px bg-gray-700 rounded-lg p-5 shadow-2xl'>
              <h1>Pradhan Mantri Fasal Bima Yojana</h1>
              <p className='text-green-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque inventore, labore a sed cum ipsum ducimus, nisi eos nostrum illum aperiam quia sapiente consequuntur quisquam eligendi. Ullam, dolore tenetur.</p>
            </div>
            <div className='border-solid border-gray-50 h-60 w-60px bg-gray-700 rounded-lg p-5 shadow-2xl'>
              <h1>Gov Plans</h1>
              <p className='text-green-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque inventore, labore a sed cum ipsum ducimus, nisi eos nostrum illum aperiam quia sapiente consequuntur quisquam eligendi. Ullam, dolore tenetur.</p>
            </div>
            <div className='border-solid border-gray-50 h-60 w-60px bg-gray-700 rounded-lg p-5 shadow-2xl'>
              <h1>Gov Plans</h1>
              <p className='text-green-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque inventore, labore a sed cum ipsum ducimus, nisi eos nostrum illum aperiam quia sapiente consequuntur quisquam eligendi. Ullam, dolore tenetur.</p>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto mt-10 flex py-6 md:flex-cols-2 gap-6'>
            <div className='w-1/3'>
                <h1 className='font-bold text-xl'>Points Of Contact</h1>
                <div className='py-3 mt-5'>
                <h1 className='font-bold text-l'>Support</h1>
                <h1 className='text-green-500 text-s hover:underline'>
                    <a href="mailto:agroinvest101@gmail.com">agroinvest101@gmail.com</a>
                </h1>
                </div>
                <div className='py-3'>
                <h1 className='font-bold text-l'>AgroInvest India</h1>
                <h1 className='text-gray-500 text-s italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit, Mumbai, Maharashtra.</h1>
                </div>
                <div className='py-3'>
                <h1 className='font-bold text-l'>Verification of Employment</h1>
                <h1 className='text-gray-400 text-s'>Want to enquire about job opportunities @AgroInvest? mail here -</h1>
                <h1 className='text-green-500 text-s hover:underline'>
                    <a href="mailto:agroinvest101@gmail.com">agroinvest101@gmail.com</a>
                </h1>
                </div>
            </div>
            <div className='w-2/3 mr-0'>
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Contactform