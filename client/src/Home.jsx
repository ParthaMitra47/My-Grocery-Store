import React from 'react'
// import './App.css'
import Input from './components/Input'
function Home() {
  return (
    <> 
    {/* <div className='text-red-500'>Home</div> */}
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600">Now Order Grocery Online</h1>
      <p className="mt-2 text-purple-700">This is a simple homepage built with React & Tailwind.</p>
      <button className="mt-4 px-6 py-2 bg-green-800 text-white rounded-lg shadow-md hover:bg-blue-700">
        Get Started
      </button>
       <h3>Order somthing</h3> 
        <Input></Input> 
      <button type="button" class="btn btn-warning">order</button>

    </div>
    </>
   
  )
}

export default Home