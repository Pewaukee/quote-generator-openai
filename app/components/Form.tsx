'use client';

import generatePrompt from '@/pages/api/generate';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Form() {
  const [prompt, setPrompt] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { createPrompt } = generatePrompt(); // generate the closure

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    if (prompt.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [prompt]);

  const handleClick = async () => {
    setLoading(true);
    const response = await createPrompt({ prompt });
    console.log(response);
    setLoading(false);
  };

  return (
    <div className='w-full px-6 py-4 flex flex-col items-center justify-center'>
      <div className='grid grid-cols-2 gap-4 w-[50%]'>
        <input
          type='text'
          className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-black font-space-mono text-lg'
          placeholder='Enter a subject here...'
          onChange={handleChange}
        ></input>
        <input
          type='text'
          className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-black font-space-mono text-lg'
          placeholder='Enter an inspiration here...'
          onChange={handleChange}
        ></input>
      </div>

      <button
        className='mt-6 bg-blue-500 w-36 hover:bg-blue-700 text-white font-bold font-space-mono text-2xl py-2 px-4 rounded disabled:bg-gray-400'
        disabled={disabled || loading}
        onClick={handleClick}
      >
        {loading ? <CircularProgress className='h-24' /> : 'GENERATE'}
      </button>
    </div>
  );
}
