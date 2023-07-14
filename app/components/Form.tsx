'use client';

import React, { useState } from 'react';

export default function Form() {

  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  // configure more in backend

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPrompt(e.target.value);
  };

  return (
    <div className='w-full px-6 py-4 flex flex-col items-center justify-center'>
      <input
        type='text'
        className='w-[50%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-black font-space-mono text-lg'
        placeholder='Enter a prompt here...'
        onChange={handleChange}
      ></input>
      <button
      className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold font-space-mono text-2xl py-2 px-4 rounded'
      >
        Submit
      </button>
    </div>
  );
}
